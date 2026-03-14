import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsAward, BsCheck2Circle, BsClock, BsShieldCheck } from 'react-icons/bs';
import '../../Styles/StatsSection.css';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <BsAward className="text-white fs-1" />,
      number: '10+',
      label: 'سنوات خبرة'
    },
    {
      id: 2,
      icon: <BsCheck2Circle className="text-white fs-1" />,
      number: '120+',
      label: 'مشروع منجز'
    },
    {
      id: 3,
      icon: <BsClock className="text-white fs-1" />,
      number: '24/7',
      label: 'دعم فني'
    },
    {
      id: 4,
      icon: <BsShieldCheck className="text-white fs-1" />,
      number: '100%',
      label: 'فريق معتمد'
    }
  ];

  return (
    <section className="stats-section pb-5 bg-white">
    
      <Container className="text-center mb-5 pb-4 pt-5">
        <Button
          as={Link}
          to="/services"
          variant="primary"
          className="custom-btn px-5 py-3 fw-bold fs-5 shadow-sm"
        >
          اكتشف المزيد عن خدماتنا
        </Button>
      </Container>

    
      <Container className="pb-5">
        <Row className="g-4 justify-content-center">
          {stats.map((stat) => (
            <Col md={6} lg={3} key={stat.id}>
              <div className="stat-card p-4 p-lg-5 text-center h-100">
                <div className="stat-icon-box mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="stat-number fw-bold mb-2">{stat.number}</h3>
                <p className="text-dark-blue fw-semibold mb-0 fs-6">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;