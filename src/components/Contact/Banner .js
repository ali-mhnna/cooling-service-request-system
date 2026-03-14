import { Container, Row, Col,} from 'react-bootstrap';

 export default function Baner(){
    return(
  <div dir="rtl">
   

    
      <section className="about-banner-section py-5 position-relative overflow-hidden">
    
        <div className="banner-curve-shape"></div>
        <div className="banner-line-shape"></div>

        <Container className="py-5 position-relative z-1 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
        
              <h2 className="fw-bold text-dark-blue mb-4 about-title">تواصل معنا</h2>

          
              <p className="text-muted fs-5 lh-lg mb-5 mx-auto about-desc">
              فريقنا الهندسي المتخصص جاهز لمساعدتك في اختيار الحل الأمثل لاحتياجاتك. احصل على استشارة مجانية اليوم.
              </p>

            
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    )
 }
