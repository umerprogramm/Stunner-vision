import React, { useState,useEffect } from 'react';
import AOS  from 'aos';
import "aos/dist/aos.css";
import banner  from '../Assets/banner.jpg'
import native_banner  from '../Assets/native_banner.jpg'
import banner2  from '../Assets/banner2.jpg'
import './banner.css'

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    
    
  }, []);
  const [condition, setCondition] = useState(true);
  setTimeout(function(){
    setCondition(false) 
  }, 5000)
  return (
    <div className='banner'>

 <img className='banner_image'data-aos="fade-left" src={banner} alt='banner'/>
 <img className='native_image'  data-aos="fade-left" src={native_banner} alt='banner'/>

      




    </div>
  )
}
