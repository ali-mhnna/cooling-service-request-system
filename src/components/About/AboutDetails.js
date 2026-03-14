import { Container, Row, Col, Badge } from 'react-bootstrap';
import aboutImage from '../../Assets/51ASru+lm-L._AC_UF894,1000_QL80_.jpg';
import '../../Styles/AboutSection.css';

const AboutDetails = () => {
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
              الصفوة للتبريد والتكييف
            </Badge>
            <br></br>

            <h2 className="fw-bold mb-4 lh-base about-details-title">
              <span className="text-dark-blue">الشريك الهندسي المتخصص</span>
              <br />
              <span className="text-primary-custom">في التبريد الصناعي والتجميد</span>
            </h2>

            <p className="text-muted fs-5 lh-lg mb-4">
              <strong>من نحن:</strong> الصفوة للتبريد والتكييف شركة رائدة متخصصة في تصميم وتنفيذ أنظمة التبريد الصناعي، مخازن التبريد والتجميد، وأنفاق التجميد السريع للصناعات الغذائية، مع التركيز على الجودة ومطابقة المعايير الدولية
            </p>

            <p className="text-muted fs-5 lh-lg mb-4">
              <strong>ما نقدمه:</strong> حلول هندسية شاملة تشمل التصميم، التوريد، التركيب، الاختبار، التشغيل، والصيانة الدورية لمخازن التبريد وأنظمة التجميد السريع بمختلف أنواعها.
            </p>

            <p className="text-muted fs-5 lh-lg mb-0">
              <strong>لماذا العملاء يثقون بنا:</strong> سجل حافل من +120 مشروع تبريد صناعي منجز بنجاح، فريق هندسي متخصص في التبريد، التزام بالمواعيد، ودعم فني 24/7 يضمن رضا العملاء التام.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutDetails;