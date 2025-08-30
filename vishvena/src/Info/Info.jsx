import React from 'react'
import './Info.modular.css'
import solutionImg from '../assets/solution.png'  // adjust path as needed

export default function Info() {
  return (
    <div className='Info'>
      <div className='info-text'>
        <h5 className='small'>ABOUT AI SOLUTIONS</h5>
        <h2>We believe what sets us apart are these three factors</h2>
        
        <p>
          At the core of our distinctiveness are three pivotal factors that unequivocally set us apart in the business landscape. Firstly, our commitment to Patent Driven Agreements underscores our dedication to innovation and safeguarding intellectual property, ensuring a foundation of trust and uniqueness in our collaborations. Secondly, we thrive on the forefront of progress with Cutting Edge Technologies, leveraging the latest advancements to drive efficiency, creativity, and unmatched quality in our offerings. Lastly, our seamless integration of Hardware and Software exemplifies a holistic approach, providing comprehensive solutions that not only meet but exceed the evolving needs of our clients. Together, these factors form the cornerstone of our identity, positioning us as a trailblazer in delivering unparalleled value and excellence.
        </p>

        <p>
          We propel ourselves to the forefront of progress through Cutting Edge Technologies, actively leveraging the latest advancements to drive efficiency, kindle creativity, and maintain an unparalleled standard of quality in our products and services. This dynamic embrace of innovation positions us as pioneers in the industry, allowing us not only to meet but to anticipate and exceed the ever-evolving demands of the market. Together, these two pillars form the cornerstone of our identity, defining us as trailblazers committed to delivering unparalleled value and excellence in every aspect of our business endeavors.
        </p>
      </div>

      <div className='info-image'>
        <img src={solutionImg} alt="AI Solutions" />
      </div>
    </div>
  )
}
