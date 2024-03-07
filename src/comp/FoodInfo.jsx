import { Container, Row, Col } from "react-bootstrap";

const FoodInfo = ({ food }) => {
  const filterIngredients = (food) => {
    const ingredients = Array.from({ length: 20 }, (_, i) => {
      const ingredient = food[`strIngredient${i + 1}`];
      const measure = food[`strMeasure${i + 1}`];
      return ingredient && measure && `${ingredient} - ${measure}`;
    }).filter(Boolean);
    return ingredients;
  };
  return (
    <Container>
      <Row>
        <div>
          <h3>Dina Maträtter</h3>
          <p>
            <strong>Title:</strong> {food.strMeal}
          </p>
          <img className="Foodpicid" src={food.strMealThumb} alt={food.strMeal} />
          <br />
          <h5>Ingredients:</h5>
          <ul>
            {filterIngredients(food).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5>Info:</h5> <p>{food.strInstructions}</p>
        </div>
      </Row>
    </Container>
  );
};

export default FoodInfo;
