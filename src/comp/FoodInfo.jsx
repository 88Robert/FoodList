import { Container, Row, Col } from "react-bootstrap"


const FoodInfo = ({ food }) => {
  return (
    <Container>
      <Row>
        <div>
          <h2>Dina Maträtter</h2>
          <p>Title: {food.strMeal}</p>
          <img src={food.strMealThumb} alt={food.strMeal} />
          <p>Category: {food.strCategory}</p>
          <p>Area: {food.strArea}</p>
        </div>
      </Row>
    </Container>
  );
};

export default FoodInfo