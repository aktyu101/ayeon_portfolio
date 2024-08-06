import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesData = [
  {
    title: "Schedule Coordination",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "0",
  },
  {
    title: "Project Management",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "0",
  },
  {
    title: "Service Planning",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "0",
  },
  {
    title: "UX Design·Prototyping",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "-400%",
  },
  {
    title: "QA Test",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "-400%",
  },
  {
    title: "Manual Production",
    imageUrl: "images/portfolio/portfolio01.png",
    ImageTop: "-400%",
  },
];

//레이아웃
const ServiceItem = ({ service, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      className="relative flex items-center cursor-pointer w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ display: "flex", alignItems: "center" }}
    >
      <motion.div className="flex-shrink-0" style={{ flex: "0 0 40%" }}>
        {(isHovered || service.isDefault) && (
          <Image
            src={service.imageUrl}
            alt={service.title}
            className="absolute left-[50px]"
            style={{ top: service.ImageTop }}
            width={500}
            height={400}
          />
        )}
      </motion.div>
      <div className="flex-1" style={{ flex: "1 1 60%" }}>
        <h2
          className={`text-left text-[50px] font-semibold ml-[50px] ${
            isHovered || service.isDefault
              ? "text-[#ffffff]"
              : "text-[#ffffff64]"
          }`}
        >
          {service.title}
        </h2>
      </div>
    </motion.div>
  );
};

const ServiceList = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleHover = (service) => {
    setHoveredService(service);
  };

  const handleLeave = () => {
    setHoveredService(null);
  };

  const isDefaultHovered = hoveredService === null;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {servicesData.map((service, index) => (
        <ServiceItem
          key={index}
          service={{ ...service, isDefault: isDefaultHovered && index === 0 }}
          isHovered={hoveredService === service}
          onMouseEnter={() => handleHover(service)}
          onMouseLeave={handleLeave}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <ServiceList />
    </>
  );
}

export default App;
