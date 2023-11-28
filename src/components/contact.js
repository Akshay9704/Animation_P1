import React, { useEffect } from 'react'
import quote from '../assets/quote.png'
import quote2 from '../assets/quote2.png'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from("#colon1", { duration: 1, scrollTrigger: { trigger: "#colon1", scroller: "body", start: "top 55%", end: "45%", scrub: 4 }, y: -70, x: -70, opacity: 0 });
    gsap.from("#colon2", { duration: 1, scrollTrigger: { trigger: "#colon2", scroller: "body", start: "top 55%", end: "45%", scrub: 4 }, y: 70, x: 70, opacity: 0 });
  }, []); 
  return (
    <>
      <div id="contact">
        <p>Excellent Couple of Hours, Relax and enjoy in the fun. staff were accommodating, friendly and very helpful. cafe on site for refreshments etc. will keep children entertained during the holidays. worth a visit if you haven't been.</p>
        <img id="colon1" src={quote} />
        <img id="colon2" src={quote2} />
      </div>
    </>
  )
}

export default Contact