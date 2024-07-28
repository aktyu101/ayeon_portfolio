import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import ProjectItem from "../portfolio/ProjectItem";
//https://swiperjs.com/react#useswiper

export default () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={(swiper) => {
            console.log("isbeginning", swiper.isBeginning);
            console.log("isend", swiper.isEnd);
          }}
        >
          <div slot="container-start">
            <div className="flex justify-between">
              <span className="font-medium text-[#222] text-[60px]">
                MAIN PROJECT
              </span>
              <div className="flex gap-[15px] items-center">
                <span>More Project</span>
                <div className="flex gap-[15px]">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </div>
            </div>
          </div>
          <SwiperSlide className="block w-[400px] h-[300px] bg-slate-400">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[300px] bg-slate-400">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[300px] bg-slate-400">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="w-[400px] h-[300px] bg-slate-400">
            Slide 4
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>좌</button>;
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>우</button>;
};
