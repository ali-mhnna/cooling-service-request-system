import { Container, Row, Col } from 'react-bootstrap';
import { BsClipboardCheck, BsGear, BsPeople, BsActivity, BsWrench } from 'react-icons/bs';
import '../../Styles/ProcessSection.css';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      icon: <BsClipboardCheck className="text-white fs-3" />,
      title: 'معاينة الموقع',
      description: 'زيارة ميدانية لفهم احتياجات المشروع والتحديات الهندسية وأخذ القياسات الدقيقة.'
    },
    {
      id: 2,
      icon: <BsGear className="text-white fs-3" />,
      title: 'التصميم الهندسي',
      description: 'إعداد مخططات تفصيلية وحسابات الأحمال الحرارية واختيار الأنظمة الأمثل.'
    },
    {
      id: 3,
      icon: <BsPeople className="text-white fs-3" />,
      title: 'التوريد والتركيب',
      description: 'توريد معدات عالية الجودة من موردين موثوقين والتركيب وفق أعلى المعايير الفنية.'
    },
    {
      id: 4,
      icon: <BsActivity className="text-white fs-3" />,
      title: 'الاختبار والتشغيل',
      description: 'اختبارات شاملة للنظام والمعايرة الدقيقة وتدريب فريق العميل على التشغيل.'
    },
    {
      id: 5,
      icon: <BsWrench className="text-white fs-3" />,
      title: 'الصيانة والدعم',
      description: 'خدمة ما بعد البيع مع عقود صيانة دورية ودعم فني سريع الاستجابة.'
    }
  ];

  return (
    <section className="process-section py-5 bg-white">
      <Container className="py-5">
     
        <Row className="g-4 justify-content-center mb-5">
          {steps.map((step) => (
            <Col 
              lg={4} 
              md={6} 
              key={step.id}
              className={step.id > 3 ? 'mt-5 mt-lg-4' : 'mt-5 mt-lg-0'}
            >
              <div className="process-card p-4 p-xl-5 h-100 position-relative text-end">
          
                <div className="step-number shadow-sm">{step.id}</div>

                <div className="text-start mb-4">
                  <div className="process-icon-box shadow-sm">
                    {step.icon}
                  </div>
                </div>

             
                <h4 className="fw-bold text-dark-blue mb-3">{step.title}</h4>
                <p className="text-muted small lh-lg mb-0 fs-6">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>

       
        <div className="commitment-box p-4 text-center mx-auto">
          <p className="mb-0 fs-5">
            <span className="text-primary fw-bold ms-1">التزامنا:</span>
            <span className="text-muted">
              نعمل بشفافية كاملة مع عملائنا ونلتزم بالمواعيد والمعايير الفنية المتفق عليها، مع متابعة مستمرة.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;