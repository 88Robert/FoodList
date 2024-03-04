import { Container, Row, Col } from "react-bootstrap"



const FoodInfo = ({ title, image }) => {
  return (
    <Container>
        <Row>
    <div>
      <ul>
        <li>
        <h4>Title: {title}</h4>
        <img className="Foodpic" src={image} alt={title} /> 
        </li>
        </ul>
    </div>
    </Row>
    </Container>
  )
}

export default FoodInfo