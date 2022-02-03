import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

// components
import MovieBox from "../components/MovieBox";

// styles
import styles from "../styles/SliderContainer.module.scss";

// config
import { fetchUpcomingMovies } from "../config/api";

export default function SliderContainer({ upcomingMovies }) {
  return (
    <div className={styles.mainSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {upcomingMovies.results.map((upcomingMovie, index) => (
          <SwiperSlide key={index}>
            <MovieBox upcomingMovie={upcomingMovie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
