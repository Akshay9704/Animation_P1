import React, { useEffect } from 'react';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Cards from "./components/cards";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    const cursor = document.querySelector('#cursor');
    const blur = document.querySelector('#cursor-blur');
    const h4all = document.querySelectorAll("#nav h4");

    document.addEventListener("mousemove", function (dets) {
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      blur.style.left = dets.x - 250 + "px";
      blur.style.top = dets.y - 250 + "px";
    });

    h4all.forEach(function(elem){
       elem.addEventListener("mouseenter", function(){
         cursor.style.scale = 5;
         cursor.style.border = "1px solid #fff";
         cursor.style.backgroundColor = "transparent";
       });
       elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
       });
  })

    return () => {
      document.removeEventListener("mousemove", function () {});
    };
    
  }, []);
  
  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
      <Navbar />
      <Hero />
      <About/>
      <Cards/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
