import React from "react";
import "./Services.modular.css";
import { Camera, Shield, RefreshCw, BarChart2, Cog, Globe } from "lucide-react";

const services = [
  {
    icon: <Camera size={32} />,
    title: "Digital Transformation",
    desc: "Empower your business with Vishvena’s cutting-edge Digital Transformation services, revolutionizing your operations for the modern era.",
  },
  {
    icon: <Shield size={32} />,
    title: "AI Solutions",
    desc: "Unlock the potential of Artificial Intelligence with Vishvena’s AI Solutions, tailored to drive innovation and efficiency across industries.",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Research & Development",
    desc: "Drive innovation forward with Vishvena’s Research & Development services, delivering groundbreaking solutions to meet your unique needs.",
  },
  {
    icon: <BarChart2 size={32} />,
    title: "Product Development",
    desc: "From concept to market, Vishvena’s Product Development services ensure your vision becomes reality, delivering exceptional products that resonate with your audience.",
  },
  {
    icon: <Cog size={32} />,
    title: "Patents/IP realization",
    desc: "Protect your innovations with Vishvena’s Patents/IP realization services, safeguarding your intellectual property and securing your competitive edge.",
  },
  {
    icon: <Globe size={32} />,
    title: "IoT Solutions",
    desc: "Harness the power of connectivity with Vishvena’s IoT Solutions, driving efficiency and innovation through seamless integration and intelligent data insights.",
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <div className="services-header">
        <h4>OUR SERVICES</h4>
        <h2>
          The full service we are offering is specifically
          <br /> designed to meet your business needs.
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
