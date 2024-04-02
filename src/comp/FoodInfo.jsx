import { Container, Row, } from "react-bootstrap";

/*I denna komponent renderas detaljerad info ut, och hämtar info via props från Search komponenten */

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
          <h3 className="Header3">{food.strMeal}</h3>
          <img className="Foodpicid" src={food.strMealThumb} alt={food.strMeal} />
          <br />
          <h5 className="Header5">Ingredients:</h5>
          <ul>
            {filterIngredients(food).map((ingredient, index) => (
              <li className="List" key={index}>{ingredient}</li>
            ))}
          </ul>
          <h5 className="Header5">Info:</h5> <p className="Paragram">{food.strInstructions}</p>
        </div>
      </Row>
    </Container>
  );
};

export default FoodInfo;
