import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsCheckCircle, BsClock, BsShieldCheck } from 'react-icons/bs';
import '../../Styles/CTASection.css';

const CTASection = () => {
  const badges = [
    {
      id: 1,
      icon: <BsCheckCircle />,
      text: 'استشارة مجانية'
    },
    {
      id: 2,
      icon: <BsClock />,
      text: 'رد سريع خلال 24 ساعة'
    },
    {
      id: 3,
      icon: <BsShieldCheck />,
      text: 'ضمان على الأعمال'
    }
  ];

  return (
    <section className="cta-section py-5 text-center text-white">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
       
            <h2 className="display-4 fw-bold mb-4 lh-base">
              جاهز لتطوير أنظمة التبريد
              <br />
              في منشأتك الغذائية؟
            </h2>

         
            <p className="fs-5 mb-5 lh-lg opacity-75 mx-auto" style={{ maxWidth: '700px' }}>
              احصل على استشارة مجانية من فريقنا الهندسي وتعرف على كيف يمكننا تحسين أنظمة التبريد الصناعي ومخازن التبريد في مشروعك
            </p>

       
            <Button
              as={Link}
              to="/contact"
              variant="light"
              className="text-primary px-5 py-3 fw-bold fs-5 mb-5 d-inline-flex align-items-center gap-2 cta-main-btn shadow"
            >
              تواصل معنا <BsArrowLeft />
            </Button>

        
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className="cta-badge px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                >
                  {badge.icon}
                  <span className="fs-6">{badge.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;