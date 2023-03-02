import React from 'react'
import zindagi_se_mout_tak from '../Assets/zindagi_se_mout.png'
import asli_hay from '../Assets/asli_hay.png'
import one_in_a_billion from '../Assets/one_in_a_billion.png'
import dont_mind from '../Assets/dont_mind.png'

export default function YS_merch() {
  return (

    <>
      <div className='Ys_merch'>

        <div>
          <img data-aos='fade-in' data-aos-duration='3000' src={zindagi_se_mout_tak} alt='9mm' />
          <p>9MM HOODIE</p>
          <p><span style={{ color: 'rebeccapurple' }}>RS.4,299</span> <span style={{ color: 'white', textDecoration: 'line-through' }}>RS.5,299</span></p>
        </div>
        <div>
          <img data-aos='fade-in' data-aos-duration='3000' src={asli_hay} alt='9mm' />
          <p>CHAOS HOODIE</p>
          <p><span style={{ color: 'rebeccapurple' }}>RS.4,499</span> <span style={{ color: 'white', textDecoration: 'line-through' }}>RS.5,299</span></p>


        </div>
        <div>
          <img data-aos='fade-in' data-aos-duration='3000' src={one_in_a_billion} alt='9mm' />
          <p>I RUN THIS - HOODIE</p>
          <p><span style={{ color: 'rebeccapurple' }}>RS.5,499</span></p>


        </div>
        <div>

          <img data-aos='fade-in' data-aos-duration='3000' src={dont_mind} alt='9mm' />
          <p>SKI MASK - HOODIE</p>
          <p><span style={{ color: 'rebeccapurple' }}>RS.5,299</span></p>

        </div>
      </div>
      <p className='button'>ALL PRODUCT</p>
      <hr style={{ color: 'white', marginTop: "60px" }} />

    </>
  )
}
