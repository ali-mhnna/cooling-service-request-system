
import AboutSection from '../components/Home/AboutSection';
import ClientsSection from '../components/Home/ClientsSection';
import CTASection from '../components/Home/CTASection';
import Footer from '../components/Footer';
import HeroSection from '../components/Home/HeroSection';
import NavBar from '../components/Home/NavBar';
import ServicesSection from '../components/Home/ServicesSection';
import StatsSection from '../components/Home/StatsSection';

const Home = () => {
  return (
    <div dir="rtl">
      <NavBar />
      <HeroSection />
      <ClientsSection />
      <ServicesSection/>
      <StatsSection/>
      <AboutSection />
      <CTASection/>
      <Footer/>

    </div>
  );
};

export default Home;