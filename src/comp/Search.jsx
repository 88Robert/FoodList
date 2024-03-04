import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FoodInfo from "./FoodInfo"; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

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
    } catch (error) {
      setError("An error occurred while fetching data");
      setSearchResults([]);
    }
  };

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <Container>
      <Row>
        <div>
          <h2>Här hittar du flera olika delikata maträtter!</h2>
          <input
            type="text"
            placeholder="Sök på maträtter"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <br />
          <button onClick={searchFood}>Sök</button>
          <div className="food-list">
            {searchResults.map((food, index) => (
              <div key={index} onClick={() => handleFoodSelect(food)}>
                <FoodInfo title={food.strMeal} image={food.strMealThumb} />
              </div>
            ))}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Search;
