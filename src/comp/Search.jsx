import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FoodInfo from "./FoodInfo";

const Search = () => {
  /* Sätter states för API hantering */
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  /* ------------------------------------------------------ */

  /* Hämtar API och skapar vilkor */
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
  /* --------------------------------------------------------*/

  /*  Detta är grunden för att kunna hantera att sökresultaten delas och 
  visas i 2 olika col */
  const halfIndex = Math.ceil(searchResults.length / 2);
  const firstHalfResults = searchResults.slice(0, halfIndex);
  const secondHalfResults = searchResults.slice(halfIndex);
  /* -------------------------------------------------------- */

  return (
    /* Skapar sökfält där man hämtar information från API för att sedan visa */
    <Container>
      <Row>
        <div className="SearchDiv">
          <h2 className="Header2">Här hittar du flera olika delikata maträtter!</h2>
          <input
            className="Input"
            type="text"
            placeholder="Sök på maträtter"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <br />
          <button className="Button" onClick={searchFood}>
            Sök
          </button>
          {error && <p>{error}</p>}
        </div>
        {/* ------------------------------------------------------- */}

        {/* Visar första halvan av sökresultatet */}
        <Col xs={3} md={3}>
          <div>
            {firstHalfResults.map((food, index) => (
              <div key={index} className="food-item">
                <h3 className="Header3">{food.strMeal}</h3>
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
        {/* ------------------------------------------------------- */}

        {/* Visar andra halvan i sökresultatet */}
        <Col xs={5} md={5}>
          <div>
            {secondHalfResults.map((food, index) => (
              <div key={index} className="food-item">
                <h3 className="Header3">{food.strMeal}</h3>
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
        {/* ------------------------------------------------------- */}

        {/* Hämtar FoodInfo-komponenten och använder props för att visa ut mer
            detaljerad information */}
        <Col xs={4} md={4}>
          {selectedFood && <FoodInfo food={selectedFood} />}
        </Col>
      </Row>
    </Container>
    /* -------------------------------------------------------- */
  );
};

export default Search;
