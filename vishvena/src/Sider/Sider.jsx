import React, { useState, useEffect } from "react";
import "./Sider.modular.css"; // use normal css file
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png"; // add more images
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";


const slides = [
  [
    { img: pic1, title: "The Top IoT Devices You Need in Your Home" },
    { img: pic2, title: "How IoT is Reshaping the Manufacturing Industry" },
    { img: pic3, title: "What Are the Current Issues Related to Intellectual Property" },
  ],
  [
    { img: pic4, title: "The Future of Intellectual Property in the Digital Age" },
    { img: pic5, title: "Why IoT Integration is Essential for Businesses" },
    { img: pic6, title: "Unlocking the Potential of IoT in Education" },
  ],
  [
    { img: pic1, title: "The Top IoT Devices You Need in Your Home" },
    { img: pic5, title: "Why IoT Integration is Essential for Businesses" },
    { img: pic3, title: "What Are the Current Issues Related to Intellectual Property" },
  ],
];

const Sider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sider-container">
      <h4 className="sider-heading-small">NEWS & UPDATES</h4>
      <h2 className="sider-heading-main">
        Check out some of our awesome projects with <br /> creative ideas and
        great design.
      </h2>

      {/* Slides */}
      <div className="sider-slide-wrapper">
        {slides.map((group, index) => (
          <div
            key={index}
            className={`sider-slide ${index === current ? "active" : ""}`}
          >
            <div className="sider-grid">
              {group.map((slide, i) => (
                <div key={i} className="sider-card">
                  <img src={slide.img} alt={slide.title} />
                  <p>{slide.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="sider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`sider-dot ${index === current ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sider;
