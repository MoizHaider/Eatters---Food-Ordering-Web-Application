import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "./slide.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function SpecialOffer() {
  let listOfImages = importAll(
    require.context("../../offers", false, /\.(png|jpe?g|svg)$/)
  );
  const imgNames = [];
  Object.keys(listOfImages).forEach(function (key) {
    imgNames.push(key);
  });

  return (
    <div className="flex flex-col gap-y-6 mb-[30px] py-10">
      <p className="text-3xl md:text-4xl font-semibold ">Events & Offers</p>
      {imgNames.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {imgNames.map((name, key) => {
            return (
              <SwiperSlide key={key}>
                <Card name={name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <h1>Oops! No Offers at the moment</h1>
      )}
    </div>
  );
}

function Card({name}){
  const img = require(`../../offers/${name}`)
  return (
    <div className="w-[100%] h-fit overflow-hidden">
      <img src = {img} className = "w-full object-scale-down rounded-[30px] px-2 shadow-2xl"/>
    </div>
  )
}

export default SpecialOffer;
