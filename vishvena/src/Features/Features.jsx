import React from 'react'
import './Features.modular.css'

export default function Features() {
  const features = [
    {
      number: "1",
      title: "Patent Driven Agreements",
      description: "Explore the future with our cutting-edge technologies, shaping innovation and transforming possibilities."
    },
    {
      number: "2",
      title: "Cutting Edge Technologies",
      description: "Explore the future with our cutting-edge technologies, shaping innovation and transforming possibilities."
    },
    {
      number: "3",
      title: "Hardware and Software",
      description: "Empower businesses with advanced tech for seamless efficiency and top-notch performance."
    }
  ]

  return (
    <div className="features-section">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-number">{item.number}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
