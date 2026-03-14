import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsSnow2,
  BsTelephone,
  BsGeoAlt,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import "../Styles/Footer.css";

const Footer = () => {
  const quickLinks = [
    { id: 1, title: "الرئيسية", path: "/" },
    { id: 2, title: "من نحن", path: "/about" },
    { id: 3, title: "الخدمات", path: "/services" },
    { id: 4, title: "تواصل معنا", path: "/contact" },
  ];

  const services = [
    { id: 1, title: "التبريد الصناعي ومخازن التبريد", path: "/services" },
    { id: 2, title: "أنفاق التجميد السريع", path: "/services" },
    { id: 3, title: "أنظمة التكييف التجارية", path: "/services" },
    { id: 4, title: "الصيانة والدعم الفني", path: "/services" },
  ];

  return (
    <footer className="site-footer pt-5 position-relative">
      <Container className="pt-4 pb-2">
        <Row className="gy-5">
      
          <Col lg={4} md={6} className="pe-lg-5">
            <Link
              to="/"
              className="d-flex align-items-center gap-2 mb-4 text-decoration-none"
            >
              <BsSnow2 className="fs-1 text-primary" />
              <div className="logo-text lh-1">
                <span className="fw-bold fs-3 text-primary d-block">
                  الصفوة
                </span>
                <span className="text-primary logo-subtitle">AL SAFWA</span>
              </div>
            </Link>
            <p className="footer-text lh-lg mb-0 pe-lg-3">
              شريكك المتخصص في التبريد الصناعي ومخازن التبريد وأنفاق التجميد
              السريع. نصمم ونُنفّذ أنظمة تبريد متكاملة للصناعات الغذائية بأعلى
              معايير الجودة والكفاءة.
            </p>
          </Col>

        
          <Col lg={2} md={6}>
            <h5 className="text-white fw-bold mb-4">روابط سريعة</h5>
            <ul className="list-unstyled footer-links">
              {quickLinks.map((link) => (
                <li key={link.id} className="mb-3">
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </Col>

       
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">خدماتنا</h5>
            <ul className="list-unstyled footer-links">
              {services.map((service) => (
                <li key={service.id} className="mb-3">
                  <Link to={service.path}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </Col>

      
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-4">تواصل معنا</h5>
            <ul className="list-unstyled footer-contact mb-4">
              <li className="mb-3 d-flex align-items-center gap-2">
                <BsTelephone className="text-white fs-5" />
                <span dir="ltr" className="footer-text fw-semibold fs-5">
                  +20 10 07498390
                </span>
              </li>
              <li className="mb-3 d-flex align-items-start gap-2">
                <BsGeoAlt className="text-white fs-5" />
                <span className="footer-text">
                  الإسماعيلية، جمهورية مصر العربية
                </span>
              </li>
            </ul>

      
            <div className="social-icons d-flex gap-2">
              <button type="button" className="social-icon">
                <BsFacebook />
              </button>
              <button type="button" className="social-icon">
                <BsInstagram />
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom mt-5 py-3 border-top border-secondary border-opacity-25">
        <Container className="text-end">
          <p className="footer-text mb-0 fs-6">
            &copy; 2026 الصفوة للتبريد والتكييف. جميع الحقوق محفوظة.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
