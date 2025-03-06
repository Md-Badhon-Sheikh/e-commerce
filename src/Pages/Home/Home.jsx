import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// carousal image

import c01 from "../../assets/carousal/cOivwgngUN7eG89qzRNpkdTwKl2gmELrArtihTrH.jpg";
import c02 from "../../assets/carousal/slider_winter_24_new_02.jpg";
import c03 from "../../assets/carousal/womens_aw24_slider_01.jpg";
import c04 from "../../assets/carousal/gift_box.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Service from "../../Components/Service/Service";
import Gallery from "../../Components/Gallery/Gallery";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="mt-20">
      {/* Swiper Start  */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={c03} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c01} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c04} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c03} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c01} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c02} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={c03} alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </section>

      {/* Swiper End  */}

      {/* Service section Start */}

      <Service></Service>
      {/* Service section End  */}

      {/* popular product */}

      <PopularProducts></PopularProducts>

      {/* Gallery section Start */}
      <Gallery></Gallery>
      {/* Gallery section End  */}

      {/* Hero section  End */}
    </div>
  );
};

export default Home;
