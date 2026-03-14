import { Container, Row, Col, Badge } from 'react-bootstrap';
import { BsSnow2, BsGear, BsWind } from 'react-icons/bs';
import '../../Styles/ServicesSection.css';


const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <BsSnow2 className="text-white fs-3" />,
      title: 'التبريد الصناعي ومخازن التبريد',
      description: 'حلول تبريد متخصصة للمصانع والمطاعم ومعامل الأغذية مع مخازن تبريد وتجميد متعددة الدرجات ونظام تحكم دقيق مطابق مع HACCP.'
    },
    {
      id: 2,
      icon: <BsGear className="text-white fs-3" />,
      title: 'أنفاق التجميد السريع',
      description: 'أنظمة تجميد سريع IQF و blast freezing لحفظ جودة المنتجات الغذائية مع تقنيات متقدمة للحوم والدواجن والأسماك والفواكه والخضروات.'
    },
    {
      id: 3,
      icon: <BsWind className="text-white fs-3" />,
      title: 'أنظمة التكييف التجارية',
      description: 'تصميم وتنفيذ أنظمة HVAC و VRF متكاملة للمباني التجارية والإدارية والفنادق بكفاءة طاقة عالية.'
    },
    {
      id: 4,
      icon: <BsWind className="text-white fs-3" />,
      title: 'الصيانة والدعم الفني',
      description: 'عقود صيانة شاملة ودعم فني 24/7 لضمان استدامة الأداء وتقليل الأعطال.'
    }
  ];

  return (
    <section className="services-section py-5 position-relative overflow-hidden">
  
      <div className="watermark-bg"></div>

      <Container className="py-5 position-relative z-1">
     
        <Row className="justify-content-center mb-5 pb-3">
          <Col lg={8} className="text-center">
            <Badge bg="" className="badge-soft-primary rounded-pill px-4 py-2 mb-3 fs-6">
              خدماتنا
            </Badge>
            <br></br>
            <h2 className="fw-bold text-dark-blue mb-4 fs-1">حلول التبريد الصناعي المتكاملة</h2>
            <p className="text-muted fs-5 lh-lg mx-auto" style={{ maxWidth: '800px' }}>
              نتخصص في مخازن التبريد، أنفاق التجميد السريع، وأنظمة التبريد الكاملة للصناعات الغذائية والمطاعم بأعلى معايير الجودة ومطابقة HACCP
            </p>
          </Col>
        </Row>

     
        <Row className="g-4 justify-content-center">
          {services.map((service) => (
            <Col lg={4} md={6} key={service.id}>
              <div className="service-card h-100 p-4 p-lg-5 text-end">
                <div className="service-icon-box mb-4 ms-auto">
                  {service.icon}
                </div>
                <h4 className="fw-bold text-dark-blue mb-3">{service.title}</h4>
                <p className="text-muted lh-lg mb-0 fs-6">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
     
    </section>
   
  );
};

export default ServicesSection;