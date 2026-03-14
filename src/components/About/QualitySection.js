import { Container, Row, Col, Badge } from 'react-bootstrap';
import { BsShield, BsPatchCheck, BsGraphUpArrow, BsShieldCheck, BsHeadset } from 'react-icons/bs';
import '../../Styles/QualitySection.css';

const QualitySection = () => {
  const qualityItems = [
    {
      id: 1,
      icon: <BsShield className="text-white fs-3" />,
      title: 'السلامة المهنية',
      description: 'التزام كامل بمعايير OSHA'
    },
    {
      id: 2,
      icon: <BsPatchCheck className="text-white fs-3" />,
      title: 'مهندسون معتمدون',
      description: 'فريق بشهادات دولية معتمدة'
    },
    {
      id: 3,
      icon: <BsGraphUpArrow className="text-white fs-3" />,
      title: 'كفاءة الطاقة',
      description: 'حلول موفرة للطاقة مع SEER عالي'
    },
    {
      id: 4,
      icon: <BsShieldCheck className="text-white fs-3" />,
      title: 'ضمان شامل',
      description: 'ضمان على الأجهزة والتركيبات'
    },
    {
      id: 5,
      icon: <BsHeadset className="text-white fs-3" />,
      title: 'دعم 24/7',
      description: 'خدمة عملاء وصيانة طوارئ'
    }
  ];

  return (
    <section className="quality-section py-5 position-relative overflow-hidden">

      <div className="quality-bg-shape shape-left"></div>
      <div className="quality-bg-shape shape-right"></div>
      <div className="quality-bg-shape shape-bottom"></div>

      <Container className="py-5 position-relative z-1 text-center">
      
        <Row className="justify-content-center mb-5 pb-2">
          <Col lg={8}>
            <Badge bg="" className="badge-soft-primary rounded-pill px-4 py-2 mb-3 fs-6">
              الجودة والاعتمادات
            </Badge>
            <br></br>
            <h2 className="fw-bold text-dark-blue mb-3 fs-1 lh-base">
              معايير عالمية ملتزمون بها
            </h2>
            <p className="text-muted fs-5">
              شهادات واعتمادات تؤكد التزامنا بأعلى معايير الجودة والسلامة
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {qualityItems.map((item) => (
            <Col lg={4} md={6} key={item.id}>
              <div className="quality-card p-4 p-xl-5 h-100">
                <div className="quality-icon-box mx-auto mb-4">
                  {item.icon}
                </div>
                <h5 className="fw-bold text-dark-blue mb-2">{item.title}</h5>
                <p className="text-muted small mb-0 fs-6">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default QualitySection;