"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
//https://swiperjs.com/react#useswiper
import { useState } from "react";
//useEffect(() => { // 실행할 로직 }, [의존성 배열])
import { projectList } from "@/constants/projectList";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";

export default () => {
  const [moreBtnHover, setMoreBtnHover] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const router = useRouter();

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

  const handleSlideClick = (id) => {
    router.push(`/project/${id}`);
  };

  return (
    <>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
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
                <a
                  href="/project"
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
                    alt="+"
                    className="object-cover hover:hidden"
                  />
                </a>
                <div className="flex gap-[4px]">
                  <SlidePrevButton isBeginning={isBeginning} />
                  <SlideNextButton isEnd={isEnd} />
                </div>
              </div>
            </div>
          </div>
          {/* project list */}
          <div className="box-border">
            {projectList.listSortedByDate
              .filter((list) => list.mainDisplay)
              .map((list) => (
                <SwiperSlide className="swiper-slide-custom first:ml-[50px]">
                  <li key={list.name}>
                    <article
                      className="flex flex-col gap-y-[25px] cursor-pointer"
                      onClick={() => handleSlideClick(list.id)}
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

const SlidePrevButton = ({ isBeginning }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`w-[54px] h-[54px] rounded-full flex justify-center items-center border border-solid border-[#DDDEDD] ${
        isBeginning ? "" : "hover:bg-[#DDDEDD]"
      }`}
      onClick={() => swiper.slidePrev()}
      disabled={isBeginning}
    >
      {/* heroicons_arrow-up_disable.svg */}
      <img
        src={
          isBeginning
            ? "images/main/heroicons_arrow-up_disable.svg"
            : "images/main/heroicons_arrow-up.svg"
        }
        alt="프로필 이미지"
        className="object-cover"
      />
    </button>
  );
};

const SlideNextButton = ({ isEnd }) => {
  const swiper = useSwiper();
  return (
    <button
      className={`w-[54px] h-[54px] rounded-full flex justify-center items-center border border-solid border-[#DDDEDD] ${
        isEnd ? "" : "hover:bg-[#DDDEDD]"
      }`}
      onClick={() => swiper.slideNext()}
      disabled={isEnd}
    >
      <img
        src={
          isEnd
            ? "images/main/heroicons_arrow-up_disable.svg"
            : "images/main/heroicons_arrow-up.svg"
        }
        alt="프로필 이미지"
        className="object-cover rotate-180"
      />
    </button>
  );
};
