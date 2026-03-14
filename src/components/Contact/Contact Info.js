import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  BsTelephone,
  BsGeoAlt,
  BsClock,
  BsGlobe,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import "../../Styles/ContactInfo.css";

const ContactInfo = () => {
  const contactCards = [
    {
      id: 1,
      icon: <BsTelephone />,
      title: "اتصل بنا",
      content: (
        <p className="card-text text-muted" dir="ltr">
          +20 10 07498390
        </p>
      ),
      isSocial: false,
    },
    {
      id: 2,
      icon: <BsGeoAlt />,
      title: "العنوان",
      content: (
        <p className="card-text text-muted">الإسماعيلية، جمهورية مصر العربية</p>
      ),
      isSocial: false,
    },
    {
      id: 3,
      icon: <BsClock />,
      title: "ساعات العمل",
      content: (
        <>
          <p className="card-text text-muted mb-1">
            السبت - الخميس: 8 صباحاً - 5 مساءً
          </p>
          <p className="card-text text-muted">الجمعة: مغلق</p>
        </>
      ),
      isSocial: false,
    },
    {
      id: 4,
      icon: <BsGlobe />,
      title: "تابعنا",
      content: null,
      isSocial: true,
    },
  ];

  return (
    <section className="contact-sec py-5 bg-white">
      <Container className="py-4">
      
        <Row className="text-center mb-5">
          <Col>
            <Badge bg="" className="rounded-pill section-badge mb-3">
              معلومات التواصل
            </Badge>
            <br></br>
            <h2 className="section-title fw-bold mb-3">نحن هنا لمساعدتك</h2>
            <p className="section-subtitle">
              تواصل معنا عبر أي من القنوات التالية
            </p>
          </Col>
        </Row>

      
        <Row className="g-4 text-center justify-content-center">
          {contactCards.map((card) => (
            <Col lg={3} md={6} key={card.id}>
              <div className="contact-card h-100">
                <div className="icon-circle">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>

                {card.isSocial ? (
                  <div className="social-icons mt-3">
                    <button type="button" className="social-icon">
                      <BsFacebook />
                    </button>
                    <button type="button" className="social-icon">
                      <BsInstagram />
                    </button>
                  </div>
                ) : (
                  card.content
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;
