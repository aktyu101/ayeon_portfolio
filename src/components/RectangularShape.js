import React, { useState } from "react";

const RectangularShape = () => {
  const [points, setPoints] = useState([
    { x: 100, y: 100 }, // 좌상단
    { x: 300, y: 100 }, // 우상단
    { x: 300, y: 300 }, // 우하단
    { x: 100, y: 300 }, // 좌하단
  ]);
  const [fillColor, setFillColor] = useState("#ffcc00"); // 내부 색상

  const handleMouseDown = (index, e) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();

    const handleMouseMove = (moveEvent) => {
      const { clientX: newX, clientY: newY } = moveEvent;
      const deltaX = newX - clientX;
      const deltaY = newY - clientY;

      const newPoints = [...points];
      newPoints[index] = {
        x: points[index].x + deltaX,
        y: points[index].y + deltaY,
      };
      setPoints(newPoints);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleFillColorChange = (e) => {
    setFillColor(e.target.value);
  };

  return (
    <span>
      <svg width="100%" height="600">
        {/* 내부를 채울 다각형 */}
        <polygon
          points={`${points[0].x},${points[0].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y} ${points[3].x},${points[3].y}`}
          fill={fillColor}
          stroke="black"
          strokeWidth="2"
        />
        {/* 사각형 테두리 */}
        <polygon
          points={`${points[0].x},${points[0].y} ${points[1].x},${points[1].y} ${points[2].x},${points[2].y} ${points[3].x},${points[3].y}`}
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        {/* 각 꼭지점 */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#ff4b00"
            onMouseDown={(e) => handleMouseDown(index, e)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </svg>
      <div style={{ marginTop: "10px" }}>
        <label htmlFor="fillColor"></label>
        <input
          type="color"
          id="fillColor"
          name="fillColor"
          value={fillColor}
          onChange={handleFillColorChange}
        />
      </div>
    </span>
  );
};

export default RectangularShape;
