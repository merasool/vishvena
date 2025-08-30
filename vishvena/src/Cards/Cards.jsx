import React, { useState } from "react";
import "./Cards.modular.css";
import { FaChartLine, FaUserCog, FaRobot, FaBrain, FaSearch } from "react-icons/fa";

const cardData = {
  Analytics: {
    title: "Predictive Analytics",
    description:
      "Focus on developing algorithms and models that can forecast future trends, behaviors, or outcomes based on historical data. This involves using techniques such as machine learning and statistical analysis to identify patterns and correlations in data, enabling organizations to make informed decisions and anticipate future events in areas such as sales forecasting, demand planning, and risk management.",
    icon: <FaChartLine size={150} color="#3b82f6" />,
  },
  Personalized: {
    title: "Personalized Recommendations",
    description:
      "Concentrate on developing AI-driven recommendation systems that provide personalized recommendations and content to users based on their preferences, behavior, and past interactions. This involves leveraging techniques such as collaborative filtering, content-based filtering, and reinforcement learning to deliver tailored experiences and enhance user engagement in applications such as e-commerce, content streaming, and social media.",
    icon: <FaUserCog size={150} color="#10b981" />,
  },
  NLP: {
    title: "Natural Language Processing (NLP)",
    description:
      "Emphasize research and development efforts in the field of natural language processing (NLP), which focuses on enabling computers to understand, interpret, and generate human language. This involves developing algorithms and models for tasks such as speech recognition, language translation, sentiment analysis, and text generation, enabling applications such as virtual assistants, chatbots, and language translation services.",
    icon: <FaBrain size={150} color="#8b5cf6" />,
  },
  "Computer Vision": {
    title: "Computer Vision",
    description:
      "Focus on developing AI solutions for computer vision, which involves enabling computers to interpret and understand visual information from images or videos. This includes developing algorithms and models for tasks such as object detection, image classification, facial recognition, and scene understanding, enabling applications such as autonomous vehicles, surveillance systems, and medical imaging.",
    icon: <FaRobot size={150} color="#f59e0b" />,
  },
  Automation: {
    title: "Process Automation",
    description:
      "Concentrate on developing AI-driven automation and optimization solutions that streamline processes, improve efficiency, and reduce manual effort. This involves developing algorithms and models that can automate repetitive tasks, optimize resource allocation, and improve decision-making in areas such as manufacturing, supply chain management, and customer service, enabling organizations to operate more efficiently and effectively.",
    icon: <FaSearch size={150} color="#ef4444" />,
  },
};

export default function Cards() {
  const [active, setActive] = useState("Analytics");

  return (
    <div className="cards-container">
      <h2 className="cards-title">Focus Areas on <span>AI Solutions</span></h2>
      <p className="cards-subtitle">
        We thrive on tailoring cutting-edge strategies to provide clients with the best solutions in the industry.
      </p>

      {/* Tabs */}
      <div className="cards-tabs">
        {Object.keys(cardData).map((item) => (
          <button
            key={item}
            className={`cards-tab ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}..
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="cards-content">
        <div className="cards-icon">{cardData[active].icon}</div>
        <div className="cards-text">
          <h3>{cardData[active].title}</h3>
          <p>{cardData[active].description}</p>
        </div>
      </div>
    </div>
  );
}
