import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><h1>Maträtter</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed by: <br /> Robert Magnusson
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
