import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import aboutImage from '../../Assets/pexels-pixabay-257636.jpg';
import '../../Styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section py-5 position-relative overflow-hidden bg-white">
    
      <div className="about-bg-shape shape-1"></div>
      <div className="about-bg-shape shape-2"></div>

      <Container className="py-5 position-relative z-1">
        <Row className="align-items-center gy-5">
     
          <Col lg={6} className="ps-lg-4 ps-xl-5">
            <div className="about-image-frame mx-auto shadow-lg">
              <div className="frame-decor"></div>
              <img 
                src={aboutImage} 
                alt="غرفة تبريد صناعي" 
                className="about-inner-img shadow-sm" 
              />
            </div>
          </Col>

     
          <Col lg={6} className="text-end pe-lg-4 pe-xl-5">
            <Badge bg="" className="badge-soft-primary rounded-pill px-4 py-2 mb-4 fs-6">
              من نحن
            </Badge>
            <br></br>
            <h2 className="fw-bold mb-4 lh-base about-title">
              <span className="text-dark-blue">خبرة هندسية متخصصة</span>
              <br />
              <span className="text-primary-custom">في التبريد الصناعي والتجميد</span>
            </h2>

            <p className="text-muted fs-5 lh-lg mb-4">
              الصفوة للتبريد والتكييف شركة رائدة متخصصة في تصميم وتنفيذ أنظمة التبريد الصناعي، مخازن التبريد والتجميد، وأنفاق التجميد السريع. نعمل منذ أكثر من 10 سنوات، مع عملاء في الصناعات الغذائية والمطاعم الكبرى وقطاع الضيافة.
            </p>

            <p className="text-muted fs-5 lh-lg mb-5">
              نعتمد على فريق هندسي متخصص ومعدات حديثة لضمان تنفيذ مشاريع التبريد الصناعي بأعلى معايير الكفاءة والجودة ومطابقة HACCP.
            </p>

            <Button
              as={Link}
              to="/about"
              variant="primary"
              className="custom-btn px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 fs-5 shadow-sm"
            >
              تعرف علينا أكثر <BsArrowLeft />
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;