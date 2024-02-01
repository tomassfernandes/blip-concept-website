import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

export default function ImageSlider() {
  const images = [
    { id: "1", img: "/img/blip-office-1.webp" },
    { id: "2", img: "/img/blip-office-2.webp" },
    { id: "3", img: "/img/blip-office-3.webp" },
    { id: "4", img: "/img/blip-office-4.webp" },
  ];

  return (
    <div className="slider-div">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className="slider-img"
              src={item.img}
              alt={`Slide ${item.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
