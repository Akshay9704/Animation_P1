import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                    <img src={logo} />
                <div id="f1">
                    {/* <img src={}/> */}
                </div>
                <div id="f2">
                    <h3>TOPTRACER RANGES</h3>
                    <h3>CHALLENGES</h3>
                    <h3>LESSONS</h3>
                </div>
                <div id="f3">
                    <h3>COFFEE SHOP</h3>
                    <h3>LEAGUES</h3>
                    <h3>CONTACT US</h3>
                </div>
                <div id="f4">
                    <h4>
                        A20, 1000 Airport Rd <br />
                        Lakewood, <br />
                        NJ 08701 <br />
                    </h4>
                    <h3>CHALLENGES</h3>
                    <h3>LESSONS</h3>
                </div>
            </footer>
        </>
    )
}

export default Footer