import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";
import heroImage from "../../Assets/image.webp";
import "../../Styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section d-flex align-items-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Container className="relative-content">
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1 className="hero-title fw-bold mb-3">
              <span className="dark-text">حلول التبريد الصناعي</span>
              <br />
              <span className="text-white">ومخازن التبريد المتكاملة</span>
            </h1>

            <p className="hero-desc text-white mb-5 mx-auto">
              متخصصون في تصميم وتنفيذ أنظمة التبريد الصناعي، مخازن التبريد
              والتجميد، وأنفاق التجميد السريع للصناعات الغذائية والمطاعم الكبرى
              بأعلى معايير الجودة.
            </p>

            <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                className="custom-btn px-4 py-3 fw-bold d-flex align-items-center gap-2"
              >
                اطلب استشارة <BsArrowLeft />
              </Button>

              <Button
                as={Link}
                to="/services"
                variant="light"
                className="custom-btn-light px-4 py-3 fw-bold d-flex align-items-center gap-2 text-primary"
              >
                تصفح خدماتنا <BsArrowLeft />
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col lg={8}>
            <div className="trust-badge d-flex align-items-center justify-content-center gap-3 px-4 py-3">
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle"
                style={{ width: "45px", height: "45px", minWidth: "45px" }}
              >
                <BsCheck2 style={{ color: "black", fontSize: "1.5rem" }} />
              </div>
              <p className="mb-0 text-white fw-semibold fs-5 text-end">
                موثوق من شركات رائدة في قطاع الأغذية والمطاعم والضيافة منذ أكثر
                من 10 سنوات
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
