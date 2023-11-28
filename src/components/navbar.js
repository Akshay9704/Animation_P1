import React, { useEffect } from 'react';
import Logo from "../assets/logo.png"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "#000",
      height: "110px",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub:1
      }
    });
  }, []);
  return (
    <>
      <nav id='nav'>
        <img src={Logo} alt="logo" />
        <h4>TOPTRACER RANGE</h4>
        <h4>Lessons</h4>
        <h4>Challenges</h4>
        <h4>Coffee Shop</h4>
        <h4>Leagues</h4>
      </nav>
    </>
  )
}

export default Navbar