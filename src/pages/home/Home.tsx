import { Swiper, SwiperSlide } from "swiper/react";

const cards = [
  { id: 1, title: "Cake 1", img: "https://picsum.photos/500/300?random=1" },
  { id: 2, title: "Cake 2", img: "https://picsum.photos/500/300?random=2" },
  { id: 3, title: "Cake 3", img: "https://picsum.photos/500/300?random=3" },
  { id: 4, title: "Cake 4", img: "https://picsum.photos/500/300?random=4" },
];

function Home() {
  return (
    <div className="swiper-container w-full max-w-5xl mx-auto py-10">
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={(swiper) => {
          const totalSlides = swiper.slides.length;
          const radius = 400; // شعاع نیم‌دایره

          swiper.slides.forEach((slide, index) => {
            const angle = ((index - swiper.realIndex) / totalSlides) * 360; // زاویه چرخش
            const x = radius * Math.sin((angle * Math.PI) / 180); // مختصات x
            const z = radius * Math.cos((angle * Math.PI) / 180); // مختصات z

            // اعمال چرخش به هر کارت
            slide.style.transform = `rotateY(${angle}deg) translate3d(${x}px, 0, ${z}px)`;
          });
        }}
        className="keen-slider"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{card.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
