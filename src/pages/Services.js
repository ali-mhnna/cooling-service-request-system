import Footer from '../components/Footer';
import NavBar from '../components/Home/NavBar';
import AboutServices from '../components/AboutServices';
import ServicesSection from '../components/Home/ServicesSection';
 import serviceImage from '../Assets/IMG_20210528_165805-scaled.jpg';
import CoolingSection from '../components/CoolingSection';
import CTASection from '../components/Home/CTASection';

const Services = () => {
 

const section1 = {
  title: "أنظمة التكييف التجارية",
  description:
    "نقدم حلولاً متكاملة لأنظمة التكييف المركزي للمباني التجارية والإدارية والفنادق والمستشفيات. نستخدم أحدث التقنيات لضمان كفاءة الطاقة والراحة المثلى.",
  features: [
    "أنظمة VRV/VRF متغيرة التدفق",
    "وحدات مناولة الهواء AHU",
    "مبردات مياه Chillers",
    "أنظمة التهوية والتكييف الدقيق",
    "عزل حراري وصوتي احترافي",
  ],
  benefits: [
    "توفير يصل إلى 40% من استهلاك الطاقة",
    "راحة حرارية مثالية في جميع المساحات",
    "صيانة أقل وعمر تشغيلي أطول",
    "مطابقة كاملة لمعايير السلامة السعودية",
  ],
  image: serviceImage,
};

const section2 = {
  title: "الصيانة والدعم الفني",
  description:
    "عقود صيانة شاملة مع فريق فني متخصص متاح على مدار الساعة. نضمن استمرارية التشغيل وإطالة العمر الافتراضي لأنظمتك.",
  features: [
    "عقود صيانة شاملة ومرنة",
    "جدولة صيانة دورية منتظمة",
    "فريق فني معتمد ومدرب",
    "خدمة طوارئ 24/7",
    "تقارير فنية تفصيلية",
  ],
  benefits: [
    "تقليل الأعطال المفاجئة إلى 90%",
    "إطالة العمر الافتراضي للمعدات",
    "توفير تكاليف الإصلاحات الطارئة",
    "راحة البال والتركيز على عملك",
  ],
  image: serviceImage,
};

const section3 = {
  title: "أنفاق التجميد السريع (Blast Freezers)",
  description:
    "نوفر أحدث أنظمة التجميد السريع (IQF - Individually Quick Frozen) للصناعات الغذائية، مما يضمن تجميد سريع ومتجانس للمنتجات مع الحفاظ على الجودة والقيمة الغذائية. مثالية للحوم، الدواجن، الأسماك، المخبوزات، والخضروات.",
  features: [
    "أنفاق تجميد سريع Blast Freezing Tunnels",
    "أنظمة تجميد فردي سريع IQF Spiral & Fluidized Bed",
    "مراوح دفع هواء قوية High Velocity Fans",
    "تحكم دقيق في سرعة التجميد وتدفق الهواء",
    "أنظمة تبخير متقدمة لتوزيع متساوي للبرودة",
  ],
  benefits: [
    "الحفاظ على القيمة الغذائية والطعم واللون الأصلي",
    "منع تكون بلورات ثلجية كبيرة تضر بجودة المنتج",
    "زيادة الإنتاجية وتسريع دورة التصنيع",
    "تقليل فقدان الوزن والرطوبة Drip Loss بنسبة 90%",
    "مطابقة معايير التصدير الدولية",
  ],
  image: serviceImage,
};

const section4 = {
  title: "التبريد الصناعي ومخازن التبريد",
  description:
    "نتخصص في تصميم وتنفيذ حلول التبريد الصناعي المتكاملة للمصانع ومعامل الأغذية والمطاعم الكبرى. نصمم مخازن التبريد والتجميد بمختلف السعات والدرجات وفقاً لأعلى المعايير الدولية HACCP، FDA، وISO 22000 لضمان سلامة المنتجات الغذائية.",
  features: [
    "غرف التبريد والتجميد Cold & Freezer Rooms بجميع الأحجام",
    "كومبريسرات صناعية Bitzer، Copeland، وRefcomp",
    "لوحات تحكم PLC مع شاشات SCADA للمراقبة",
    "أنظمة إذابة الثلج الأوتوماتيكية",
  ],
  benefits: [
    "حفظ مثالي للمنتجات الغذائية مع تقليل الفاقد بنسبة 95%",
    "توفير في استهلاك الطاقة يصل إلى 35% بأنظمة ECO",
    "عمر افتراضي طويل للمعدات يصل إلى 15-20 سنة",
    "ضمان الامتثال الكامل للمعايير الصحية والبيئية",
    "خدمة صيانة 24/7 مع قطع غيار أصلية",
  ],
  image: serviceImage,
};

  return (
    <div dir="rtl">
      <NavBar />
      <AboutServices />
      <ServicesSection />
      <CoolingSection {...section1} />
      <CoolingSection {...section2} />
      <CoolingSection {...section3} />
      <CoolingSection {...section4} />
      <CTASection/>
      <Footer />
    </div>
  );
};

export default Services;