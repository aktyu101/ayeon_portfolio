import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
//https://swiperjs.com/react#useswiper
import { useState } from "react";
//useEffect(() => { // 실행할 로직 }, [의존성 배열])
import { projectList } from "@/constants/projectList";
import Image from "next/image";
import { Pagination } from "swiper/modules";

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
          slidesPerView={2.9}
          spaceBetween={40}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            console.log("isbeginning", swiper.isBeginning);
            console.log("isend", swiper.isEnd);
          }}
        >
          <div slot="container-start">
            <div className="flex justify-between px-[15px] md:px-[50px] mb-[60px]">
              <span className="font-medium text-[#222] text-[60px]">
                MAIN PROJECT
              </span>
              <div className="flex gap-[11px] items-center">
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
                <div className="flex gap-[4px]">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
              </div>
            </div>
          </div>
          {/* project list */}
          <div className="box-border">
            {projectList.listSortedByDate
              .filter((list) => list.mainDisplay)
              .map((list) => (
                <SwiperSlide
                  key={list.name}
                  className="swiper-slide-custom first:pl-[50px]"
                >
                  <li className="">
                    <article
                      className="flex flex-col gap-y-[25px] cursor-pointer"
                      // onClick={() => handleClick(list.id)}
                    >
                      <header className="relative w-full h-[300px]">
                        <Image
                          className="object-cover w-[100%] rounded-md"
                          src={list.url}
                          fill
                          alt={list.name}
                        />
                      </header>
                      <section className="flex flex-col gap-y-[15px] text-left">
                        <span className="text-[30px] font-medium leading-[30px]">
                          {list.name}
                        </span>
                        <div className="flex flex-col gap-y-[6px]">
                          <p className="text-[22px] font-normal leading-[30px]">
                            {list.description}
                          </p>
                          <p className="text-[16px] font-normal leading-[16px]">
                            {list.period}
                          </p>
                        </div>
                      </section>
                    </article>
                  </li>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[54px] h-[54px] rounded-full flex justify-center items-center hover:bg-[#DDDEDD]"
      onClick={() => swiper.slidePrev()}
    >
      <img
        src={"images/main/heroicons_arrow-up.svg"}
        alt="프로필 이미지"
        className="object-cover"
      />
    </button>
  );
};

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[54px] h-[54px] rounded-full flex justify-center items-center hover:bg-[#DDDEDD]"
      onClick={() => swiper.slideNext()}
    >
      <img
        src={"images/main/heroicons_arrow-up.svg"}
        alt="프로필 이미지"
        className="object-cover rotate-180"
      />
    </button>
  );
};
