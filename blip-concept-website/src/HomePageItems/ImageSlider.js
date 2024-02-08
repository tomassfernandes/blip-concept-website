import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

export default function ImageSlider() {
  // Define images for different screen sizes
  const [images, setImages] = useState([
    { id: "1", img: "/img/blip-office-1.webp" },
    { id: "2", img: "/img/blip-office-2.webp" },
    { id: "3", img: "/img/blip-office-3.webp" },
    { id: "4", img: "/img/blip-office-4.webp" },
  ]);

  // Function to update images based on screen width
  const updateImages = () => {
    const maxWidth = window.matchMedia("(max-width: 75em)").matches;
    const newImages = maxWidth
      ? [
          { id: "1", img: "/img/blip-office-1-smaller-screen.webp" },
          { id: "2", img: "/img/blip-office-2-smaller-screen.webp" },
          { id: "3", img: "/img/blip-office-3-smaller-screen.webp" },
          { id: "4", img: "/img/blip-office-4-smaller-screen.webp" },
        ]
      : [
          { id: "1", img: "/img/blip-office-1.webp" },
          { id: "2", img: "/img/blip-office-2.webp" },
          { id: "3", img: "/img/blip-office-3.webp" },
          { id: "4", img: "/img/blip-office-4.webp" },
        ];

    setImages(newImages);
  };

  // Update images on initial render and when screen width changes
  useEffect(() => {
    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

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
