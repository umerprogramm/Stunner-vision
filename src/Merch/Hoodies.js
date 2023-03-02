import React from 'react'
import Ninemm from '../Assets/9mm.png'
import chaos from '../Assets/chaos.png'
import i_run from '../Assets/i_run.png'
import ski_mask from '../Assets/ski_mask.png'
import './merch.css'

export default function Hoodies() {
  return (
    <>
    <div className='hoodies'>
        <div>
<img data-aos='fade-in' data-aos-duration='3000'  src={Ninemm} alt='9mm'/>
<p>9MM HOODIE</p>
<p><span style={{color : 'rebeccapurple'}}>RS.4,299</span> <span style={{color : 'white',  textDecoration : 'line-through'}}>RS.5,299</span></p>
</div>
<div>
<img data-aos='fade-in' data-aos-duration='3000'  src={chaos} alt='9mm'/>
<p>CHAOS HOODIE</p>
<p><span style={{color : 'rebeccapurple'}}>RS.4,499</span> <span style={{color : 'white',  textDecoration : 'line-through'}}>RS.5,299</span></p>


</div>
<div>
<img data-aos='fade-in' data-aos-duration='3000' src={i_run} alt='9mm'/>
<p>I RUN THIS - HOODIE</p>
<p><span style={{color : 'rebeccapurple'}}>RS.5,499</span></p>


</div>
<div>
  
<img data-aos='fade-in' data-aos-duration='3000'  src={ski_mask} alt='9mm'/>
<p>SKI MASK - HOODIE</p>
<p><span style={{color : 'rebeccapurple'}}>RS.5,299</span></p>

</div>
<br/>
    </div>
<p className='button'>ALL PRODUCT</p>
    </>
  )
}
