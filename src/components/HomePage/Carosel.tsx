import { Swiper, SwiperSlide } from "swiper/react";
 import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../../assets/book1.jpg";
import bgimg3 from "../../assets/book3.jpg";
import bgimg4 from "../../assets/book4.jpg";


export default function Carosel() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><Slide image={bgimg3} /></SwiperSlide>
        <SwiperSlide><Slide image={bgimg4} /></SwiperSlide>
        <SwiperSlide><Slide image={bgimg1} /></SwiperSlide>
       
      </Swiper>
    </div>
  );
}
