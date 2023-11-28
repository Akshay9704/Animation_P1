import React, { useEffect } from 'react'
import abt1 from "../assets/abt-1.jpg"
import abt2 from "../assets/abt-2.jpg"

const About = () => {
  return (
    <div id="about-us">
      <img src={abt1} alt='ab1' />
      <div id='about-us-in'>
        <h3>ABOUT US</h3>
        <p>Welcome to VHUB Gaming Platform, where gaming meets progression. We're your go-to hub for tracking achievements and stats across various titles, offering a space where victories are celebrated and defeats are lessons. Beyond data, we're dedicated to your growth. Our platform provides tailored training programs, ensuring you're always at the forefront of competitive gaming. Join a dynamic community where gamers connect, learn, and evolve. At VHUB Gaming, every click takes you closer to excellence – welcome to the future of gaming advancement.</p>
      </div>
      <img src={abt2} alt="ab2" />
    </div>
  )
}

export default About