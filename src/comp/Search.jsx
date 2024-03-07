import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FoodInfo from "./FoodInfo";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchFood = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Cannot fetch API");
      }
      const data = await response.json();
      setSearchResults(data.meals);
      setError(null);
      console.log(data);
    } catch (error) {
      setError("An error occurred while fetching data");
      setSearchResults([]);
    }
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  const halfIndex = Math.ceil(searchResults.length / 2);
  const firstHalfResults = searchResults.slice(0, halfIndex);
  const secondHalfResults = searchResults.slice(halfIndex);

  return (
    <Container>
      <Row>
        <div className="SearchDiv">
          <h2>Här hittar du flera olika delikata maträtter!</h2>
          <input className="input"
            type="text"
            placeholder="Sök på maträtter"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <br />
          <button onClick={searchFood}>Sök</button>
          {error && <p>{error}</p>}
        </div>
        <Col xs={3} md={3}>
          <div>
            {firstHalfResults.map((food, index) => (
              <div key={index} className="food-item">
                <h3>{food.strMeal}</h3>
                <img
                  className="Foodpic"
                  src={food.strMealThumb}
                  alt={food.strMeal}
                  onClick={() => handleFoodSelect(food)}
                />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={5} md={5}>
          <div>
            {secondHalfResults.map((food, index) => (
              <div key={index} className="food-item">
                <h3>{food.strMeal}</h3>
                <img
                  className="Foodpic"
                  src={food.strMealThumb}
                  alt={food.strMeal}
                  onClick={() => handleFoodSelect(food)}
                />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={4} md={4}>
          {selectedFood && <FoodInfo food={selectedFood} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
