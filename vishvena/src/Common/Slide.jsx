import React, { useState } from "react";
import { FaChartLine, FaUserCog, FaRobot, FaBrain, FaSearch, FaNetworkWired } from "react-icons/fa";

const cardData = {
  AI: {
    title: "Artificial Intelligence",
    description:
      "At Vishvena, we are at the forefront of innovation, utilizing Artificial Intelligence to transform key sectors, including Agriculture, Fleet Management, Health, and Defence. Our commitment lies in delivering cutting-edge solutions that optimize operations, improve efficiency, and drive progress in these vital domains. At Vishvena, we are dedicated to pushing the boundaries of AI applications, contributing to a future where technology creates sustainable solutions and secures our world. Join us as we pioneer advancements that shape the way industries operate and evolve. Vishvena - Where AI meets Excellence.",
    icon: <FaUserCog size={150} color="#3b82f6" />,
  },
  IOT: {
    title: "Internet of Things",
    description:
      "Specializes in shaping deep tech innovation. Leverages IoT for solutions in healthcare, agriculture, and fleet management. Holds patents for inventions like TRINETRA IoT software and chromatic jaundice detection. Actively revolutionizing farming practices with drone systems. Enhances commercial transportation through camera-based AI devices. Dedicated to transforming industries with viable and valuable deep tech solutions.",
    icon: <FaNetworkWired size={150} color="#10b981" />,
  },
  Drones: {
    title: "Drones",
    description:
      "Vishvena's Drone Division: Pushing Boundaries in Aerial Tech. Our expertise in IoT, AI, and advanced hardware drives innovation for agriculture, logistics, and emergency response. Reliability, simplicity, safety, our commitment to revolutionizing sectors is unwavering. Expect big things.",
    icon: <FaRobot size={150} color="#8b5cf6" />, // Use FaRobot instead of FaDrone
  },
  Software: {
    title: "Softwares",
    description:
      "In our pursuit of technological innovation, Vishvena places a strong emphasis on software solutions that drive efficiency, precision, and advancement across key sectors. Our Software Section plays a pivotal role in reshaping Agriculture, Fleet Management, Health, and Defence. Explore how Vishvena leverages software to catalyze transformative changes.",
    icon: <FaRobot size={150} color="#f59e0b" />,
  },
  Intellectual_property: {
    title: "Intellectual Property",
    description:
      "Vishvena specializes in Intellectual Property (IP) services, safeguarding businesses' innovations worldwide. Our tailored solutions cover patents, trademarks, and copyrights, empowering clients to maximize the value of their intangible assets while ensuring legal compliance and competitive advantage.",
    icon: <FaSearch size={150} color="#ef4444" />,
  },
};

export default function Cards() {
  const [active, setActive] = useState("AI");

  return (
    <div className="cards-container" style={{ maxWidth: "900px", margin: "auto", padding: "1rem" }}>
      <h2 className="cards-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Our Fields of Expertise</h2>
      <p className="cards-subtitle" style={{ textAlign: "center", marginBottom: "2rem" }}>
        We thrive on tailoring cutting-edge strategies to provide clients with the best solutions in the industry.
      </p>

      {/* Tabs */}
      <div className="cards-tabs" style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {Object.keys(cardData).map((item) => (
          <button
            key={item}
            className={`cards-tab ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              border: active === item ? "2px solid #054ec4ff" : "1px solid #ccc",
              backgroundColor: active === item ? "#0b9385ff" : "white",
              cursor: "pointer",
              fontWeight: active === item ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            {item.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div
        className="cards-content"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#96bbdfa3",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div className="cards-icon" style={{ flexShrink: 0 }}>
          {cardData[active].icon}
        </div>
        <div className="cards-text" style={{ maxWidth: "600px" }}>
          <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{cardData[active].title}</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#376ec8ff" }}>{cardData[active].description}</p>
        </div>
      </div>
    </div>
  );
}