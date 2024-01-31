import React, { useEffect } from 'react'
import zindagi_se_mout_tak from '../Assets/zindagi_se_mout.png'
import asli_hay from '../Assets/asli_hay.png'
import one_in_a_billion from '../Assets/one_in_a_billion.png'
import dont_mind from '../Assets/dont_mind.png'
import { data } from '../Data'
import {  useHistory } from 'react-router-dom/cjs/react-router-dom'


export default function YS_merch() {


  const history = useHistory()
  const redirect = (id)=>{
    history.push(`/detail/${id}`)
  }
  return (

    <>
      <div className='Ys_merch'>

      {
          data.slice(3, 6).map(item => {
            return(
<>
            
            
            
            <div onClick={()=>redirect(item.id)}> 
<img data-aos='fade-in' data-aos-duration='3000'  src={item.imageaddress} alt='9mm'/>
<p>{item.title}</p>
<p><span style={{color : 'rebeccapurple'}}>RS.{item.price}</span> <span style={{color : 'white',  textDecoration : 'line-through'}}>RS.{item.cut_price}</span></p>
</div>



            </>
            )
            

          })
      }
      </div>
      <p className='button'>ALL PRODUCT</p>
      <hr style={{ color: 'white', marginTop: "60px" }} />

    </>
  )
}
