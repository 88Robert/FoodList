import { Container, Row, Col } from "react-bootstrap"
import Search from "./Search"


const FoodInfo = ({ title, image }) => {
  return (
    <Container>
        <Row>
    <div>
        <h2>Dina Maträtter</h2>
        <p>Title: {title}</p>
        <img src={image} alt={title} /> 
    </div>
    </Row>
    </Container>
  )
}

export default FoodInfo