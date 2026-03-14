import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brandsData';

// Swiper CSS
import 'swiper/css';

import '../../Styles/ClientsSection.css';

const ClientsSection = () => {
  return (
    <section className="clients-section py-5 bg-white">
      <Container className="py-4">
    
        <div className="text-center mb-5">
          <span className="badge badge-soft-primary rounded-pill px-4 py-2 mb-3 fs-6">
            شركاء النجاح
          </span>
          <br></br>
          <h2 className="fw-bold text-dark-blue mb-3 fs-1">عملاؤنا يثقون بنا</h2>
          <p className="text-muted fs-5">
            نفخر بخدمة أبرز العلامات التجارية في قطاعي المطاعم والضيافة
          </p>
        </div>
      </Container>

   
      <div className="clients-slider-wrapper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="client-card text-center d-flex flex-column align-items-center justify-content-center">
                <img src={brand.img} alt={brand.name} className="client-logo mb-3" />
                <h5 className="fw-bold mb-1 fs-6 text-dark-blue">{brand.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
      <Container className="text-center mt-5 pt-3">
        <Link to="/contact" className="btn btn-primary custom-btn px-5 py-3 fw-bold fs-5 shadow-sm">
          انضم إلى قائمة عملائنا
        </Link>
      </Container>
    </section>
  );
};

export default ClientsSection;