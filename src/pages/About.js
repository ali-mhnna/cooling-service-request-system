import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import Footer from '../components/Footer';
import '../Styles/About.css';
import NavBar from '../components/Home/NavBar';
import AboutDetails from '../components/About/AboutDetails';
import QualitySection from '../components/About/QualitySection';
import ValuesSection from '../components/About/ValuesSection';
import ProcessSection from '../components/About/ProcessSection';
import CTASection from '../components/Home/CTASection';

const About = () => {
  return (
    <div dir="rtl">
      <NavBar />

    
      <section className="about-banner-section py-5 position-relative overflow-hidden">
      
        <div className="banner-curve-shape"></div>
        <div className="banner-line-shape"></div>

        <Container className="py-5 position-relative z-1 text-center">
          <Row className="justify-content-center">
            <Col lg={8}>
              
              <h2 className="fw-bold text-dark-blue mb-4 about-title">من نحن</h2>

            
              <p className="text-muted fs-5 lh-lg mb-5 mx-auto about-desc">
                شركة رائدة في تقديم حلول التبريد الصناعي، مخازن التبريد والتجميد، وأنفاق التجميد السريع للصناعات الغذائية، بخبرة تمتد لأكثر من 10 سنوات وسجل حافل من المشاريع الناجحة.
              </p>

            
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                className="custom-btn px-5 py-3 fw-bold d-inline-flex align-items-center gap-2 fs-5 shadow-sm"
              >
                تواصل معنا <BsArrowLeft />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
     <AboutDetails/>
     <ValuesSection/>
     <QualitySection/>
       <ProcessSection />
       <CTASection/>

      <Footer />
    </div>
  );
};

export default About;