import React, { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Video from "../assets/hero.mp4";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        gsap.to("#main", {
            backgroundColor: "#000",
            scrollTrigger: {
                trigger: "#main",
                scroller: "body",
                start: "top -25%",
                end: "top -70%",
                scrub: 2
            }
        });
    }, []);

    useEffect(() => {
        // Additional GSAP animations or ScrollTrigger setups can go here
    }, []); // Add dependencies if needed

    return (
        <>
            <video autoPlay loop muted src={Video}></video>
            <section id="main">
                <div id="page1">
                    <h1>EAT. DRINK. PLAY</h1>
                    <h2>WELCOME TO VHUB GAMING!</h2>
                </div>
                <div id="page2">
                    <div id="scroller">
                        <div className="scroller-in">
                            <h4>TOPTRACER RANGE</h4>
                            <h4>LESSONS</h4>
                            <h4>CHALLENGES</h4>
                            <h4>COFFEE SHOP</h4>
                            <h4>LEAGUES</h4>
                        </div>
                        <div className="scroller-in">
                            <h4>TOPTRACER RANGE</h4>
                            <h4>LESSONS</h4>
                            <h4>CHALLENGES</h4>
                            <h4>COFFEE SHOP</h4>
                            <h4>LEAGUES</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
