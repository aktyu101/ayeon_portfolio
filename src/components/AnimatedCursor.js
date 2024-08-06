import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div className="relative z-[99999999999]">
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
