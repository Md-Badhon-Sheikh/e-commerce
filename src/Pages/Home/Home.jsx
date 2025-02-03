import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
            <img src="/src/assets/img/carousel 04.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/featured prodct 01.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/featured prodct 02.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/featured prodct 03.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/featured prodct 04.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/carousel 04.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/src/assets/img/featured prodct 02.jpg" alt="" />
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

      {/* Hero section  Start */}

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Hero section  End */}
    </div>
  );
};

export default Home;
