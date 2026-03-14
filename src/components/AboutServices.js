import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';


 export default function AboutServices(){
    return(
  <div dir="rtl">
   

  
      <section className="about-banner-section py-5 position-relative overflow-hidden">
      
        <div className="banner-curve-shape"></div>
        <div className="banner-line-shape"></div>

        <Container className="py-5 position-relative z-1 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
           
              <h2 className="fw-bold text-dark-blue mb-4 about-title">خدماتنا</h2>

             
              <p className="text-muted fs-5 lh-lg mb-5 mx-auto about-desc">
               نقدم حلولاً هندسية متكاملة في مجال التبريد الصناعي للصناعات الغذائية والمطاعم، من التصميم إلى التنفيذ والصيانة المستدامة.
              </p>

        
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                className="custom-btn px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 fs-5 shadow-sm"
              >
                اطلب استشارة <BsArrowLeft />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    )
 }
