import { Container, Row, Col } from 'react-bootstrap';
import { BsGear, BsCheck2 } from 'react-icons/bs';
import '../Styles/IndustrialCoolingSection.css';

const CoolingSection = ({ title, description, features, benefits, image }) => {
  return (
    <section className="industrial-cooling-sec py-5">
      <Container className="py-4">
        <Row className="align-items-start">

          <Col lg={6} className="ps-lg-5 text-content">
            <div className="top-icon-box">
              <BsGear />
            </div>

            <h2 className="main-title">{title}</h2>
            <p className="main-description">{description}</p>

            <h3 className="sub-title">المميزات التقنية:</h3>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <BsCheck2 /> {feature}
                </li>
              ))}
            </ul>

            <div className="benefits-box">
              <h3 className="sub-title-box">الفوائد:</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="image-card-wrapper">
              <div className="shape-top-right"></div>
              <div className="shape-bottom-left"></div>

              <img src={image} alt={title} className="img-fluid main-image" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CoolingSection;
