import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap'                  //avoids loading of page and gets to it directly
import { Link } from 'react-router-dom';
const HeaderComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container fluid>
                <LinkContainer to='/'>
                    <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <InputGroup>
                                <DropdownButton id="dropdown-basic-button" title="All">
                                    <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Books</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Cars</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control
                                    style={{ width: 350 }}
                                    type="search"
                                    placeholder="Search in shop..."
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="warning">
                                    <i className="bi bi-search"></i>
                                </Button>{' '}
                            </InputGroup>
                        </Form>
                    </Nav>

                    <Nav>
                        <LinkContainer to='/admin/orders'>
                            <Nav.Link href="#action2">
                                Admin
                                <span className='position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/user'>

                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Jack ass
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey='/user/my-orders' as={Link} to='/user/my-orders'>My orders</Dropdown.Item>
                                    <Dropdown.Item eventKey='/user' as={Link} to='/user'>My Profile</Dropdown.Item>
                                    <Dropdown.Item >Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </LinkContainer>

                        <LinkContainer to='/Login'>
                            <Nav.Link href="#action2">Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Register'>
                            <Nav.Link href="#action2">SignUp</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/Cart'>
                            <Button variant="dark">
                                <Badge bg="secondary">9</Badge>
                                <i class="bi bi-cart"></i>
                                CART
                                <span className="visually-hidden">unread messages</span>
                            </Button>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default HeaderComponent;