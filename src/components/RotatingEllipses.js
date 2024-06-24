import React from "react";
import { motion, useAnimation } from "framer-motion";

const RotatingEllipses = () => {
  // 회전 애니메이션 설정
  const circleVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    },
  };

  // 첫 번째 타원의 경로를 따라 움직이는 점을 위한 애니메이션 컨트롤 생성
  const controls = useAnimation();

  // 점의 초기 위치 설정 (첫 번째 타원의 오른쪽 끝)
  const initialPosition = {
    x: 100 + 70, // 타원 중심의 x 좌표 + 타원의 x축 반지름
    y: 100, // 타원 중심의 y 좌표
  };

  // 타원의 경로를 따라 점을 움직이는 애니메이션 설정
  const animateEllipsePath = async () => {
    await controls.start({
      path: "M170,100 A70,40 0 1,1 30,100 A70,40 0 1,1 170,100", // 타원의 경로를 SVG Path 형태로 지정
      rotate: 360, // 회전 애니메이션
      transition: { duration: 10, repeat: Infinity, ease: "linear" },
    });
  };

  React.useEffect(() => {
    animateEllipsePath();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* 첫 번째 타원 */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="40"
        fill="#ffffff09"
        stroke={"#352f2f"}
        strokeWidth={"2px"}
        variants={circleVariants}
        initial="initial"
        animate="animate"
      />
      {/* 첫 번째 타원의 움직이는 점 */}
      <motion.circle
        cx={initialPosition.x}
        cy={initialPosition.y}
        r={5}
        fill="#FF5733"
        initial={false}
        animate={{
          path: "M170,100 A70,40 0 1,1 30,100 A70,40 0 1,1 170,100",
          transition: { duration: 10, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* 두 번째 타원 */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="40"
        fill="#ffffff09"
        stroke={"#352f2f"}
        strokeWidth={"2px"}
        variants={circleVariants}
        initial="initial"
        animate={{
          rotate: -180,
          transition: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      />

      {/* 세 번째 타원 */}
      <motion.ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="40"
        fill="#ffffff09"
        stroke={"#352f2f"}
        strokeWidth={"2px"}
        variants={circleVariants}
        initial="initial"
        animate={{
          rotate: 180,
          transition: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
      />
    </svg>
  );
};

export default RotatingEllipses;
