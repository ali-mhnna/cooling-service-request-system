import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSnow2 } from 'react-icons/bs';
import '../../Styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="white" className="py-3 sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <BsSnow2 className="fs-2 text-primary" />
          <div className="logo-text lh-1">
            <span className="fw-bold fs-4 text-primary d-block">الصفوة</span>
            <span className="fs-7 text-primary logo-subtitle">AL SAFWA</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto gap-4 fw-semibold">
           <Nav.Link as={Link} to="/">الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/about">من نحن</Nav.Link>
            <Nav.Link as={Link} to="/services">الخدمات</Nav.Link>
            <Nav.Link as={Link} to="/contact">تواصل معنا</Nav.Link>
          </Nav>
          
          <Button as={Link} to="/contact" variant="primary" className="custom-btn px-4 py-2 fw-semibold">
            اطلب استشارة
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;