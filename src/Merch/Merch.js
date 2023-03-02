import React from 'react'
import Complete_tarcksuit from './Complete_tarcksuit'
import Hoodies from './Hoodies'
import './merch.css'
import YS_merch from './YS_merch'

export default function Merch() {
  return (
    <>    
    <div data-aso='fade-in' className='merch'>

      <p>HOODIES</p>
      <p>SWEAT SHIRTS</p>



    </div>
      <Hoodies />
      <hr style={{color : 'white',marginTop : "60px"}}/>
      <div className='second_section'>

      <p>YS MERCH</p>
      <p>TROUSERS</p>
      </div>
      <YS_merch/>
      <div className='third_section'>

   <p>COMPLETE TRACKSUITS</p>
</div>
      <Complete_tarcksuit/>

    </>


  )
}
