import { Container, Row, Col, Badge } from "react-bootstrap";
import { BsSnow2, BsGear, BsWind } from "react-icons/bs";
import '../../Styles/ServicesSection.css';
const ValuesSection = () => {
  const values = [
    {
      id: 1,
      icon: <BsSnow2 className="text-white fs-3" />,
      title: "رسالتنا",
      description:
        "تقديم حلول التبريد الصناعي المتخصصة بأعلى معايير الجودة والكفاءة، مع التركيز على مخازن التبريد وأنفاق التجميد السريع والأنظمة المتكاملة للصناعات الغذائية والمطاعم الكبرى، لضمان سلامة المنتجات وكفاءة العمليات التشغيلية.",
    },
    {
      id: 2,
      icon: <BsGear className="text-white fs-3" />,
      title: "رؤيتنا",
      description:
        "أن نكون الشريك الأول والأكثر تخصصاً في مجال التبريد الصناعي ومخازن التبريد وأنفاق التجميد السريع في المنطقة، معروفين بالتميز الهندسي في مشاريع الصناعات الغذائية والمطاعم الكبرى.",
    },
    {
      id: 3,
      icon: <BsWind className="text-white fs-3" />,
      title: "قيمنا",
      description:
        "الجودة في التنفيذ، الشفافية مع العملاء، الابتكار في الحلول، الالتزام بالمواعيد، السلامة في العمل، والتطوير المستمر لفريق العمل.",
    },
  ];

  return (
    <section className="services-section py-5 position-relative overflow-hidden">
 
      <div className="watermark-bg"></div>

      <Container className="py-5 position-relative z-1">
     
        <Row className="justify-content-center mb-5 pb-3">
          <Col lg={8} className="text-center">
            <Badge
              bg=""
              className="badge-soft-primary rounded-pill px-4 py-2 mb-3 fs-6"
            >
              قيمنا ورؤيتنا
            </Badge>
            <br></br>
            <h2 className="fw-bold text-dark-blue mb-4 fs-1">
              المبادئ التي نعمل بها
            </h2>
            <p
              className="text-muted fs-5 lh-lg mx-auto"
              style={{ maxWidth: "800px" }}
            >
              نؤمن بأن النجاح الحقيقي يبنى على أساس من القيم الراسخة والرؤية
              الواضحة
            </p>
          </Col>
        </Row>

    
        <Row className="g-4 justify-content-center">
          {values.map((value) => (
            <Col lg={4} md={6} key={value.id}>
              <div className="service-card h-100 p-4 p-lg-5 text-end">
                <div className="service-icon-box mb-4 ms-auto">
                  {value.icon}
                </div>
                <h4 className="fw-bold text-dark-blue mb-3">{value.title}</h4>
                <p className="text-muted lh-lg mb-0 fs-6">
                  {value.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ValuesSection;
