import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>vitech solutions</Navbar.Brand>
          </Container>

          <Nav>
            <a href="/cart" className="nav-link">
              cart
            </a>
            <a href="/signin" className="nav-link">
              sign in
            </a>
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>&#8373;{product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <footer>
        <div className="text-center">all right reserved</div>
      </footer>
    </div>
  )
}

export default App
