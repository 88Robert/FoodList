import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data.meals);
      setError(null);
    } catch (error) {
      setError("An error occurred while fetching data");
      setSearchResults([]);
    }
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
          {error && <p>{error}</p>}
          <div className="food-list">
            {searchResults.map((food, index) => (
              <div key={index} className="food-item">
                <h3>{food.strMeal}</h3>
                <img src={food.strMealThumb} alt={food.strMeal} />
              </div>
            ))}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Search;
