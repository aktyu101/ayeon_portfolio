import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import ProjectItem from "../portfolio/ProjectItem";
//https://swiperjs.com/react#useswiper
import { useState } from "react";
//useEffect(() => { // 실행할 로직 }, [의존성 배열])

export default () => {
  const [moreBtnHover, setMoreBtnHover] = useState(false);
  const moreBtnStyle =
    "flex items-center gap-[6px] box-border border-solid border-[#352F2F] rounded-full border px-[21px] py-[15px] font-medium";
  const handleMouseEnter = () => {
    setTimeout(() => {
      setMoreBtnHover(true);
    }, 50);
  };

  const handleMouseLeave = () => {
    setMoreBtnHover(false);
  };

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
                <span
                  className={moreBtnStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    color: moreBtnHover ? "#fff" : "#352f2f",
                    background: moreBtnHover ? "#352f2f" : "#f5f5f5",
                  }}
                >
                  <p>More Project</p>
                  <img
                    src={
                      moreBtnHover
                        ? "images/main/plus_white.svg"
                        : "images/main/plus.svg"
                    }
                    alt="프로필 이미지"
                    className="object-cover hover:hidden"
                  />
                </span>
                <div className="flex gap-[15px]">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </div>
            </div>
          </div>
          <SwiperSlide className="block w-[400px] h-[300px]">
            <img src="images/main/hiseang.svg" alt="프로필 이미지" />
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
