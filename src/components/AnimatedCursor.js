import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999999999999999,
        pointerEvents: "none",
      }}
    >
      <AnimatedCursor
        color="217,217,217"
        innerSize={20}
        outerSize={40}
        innerAlpha={0.4}
        outerAlpha={0.2}
        innerScale={0.2}
        outerScale={2}
        clickables={["a", "button"]}
      />
    </div>
  );
};

export default CustomCursor;
