import React from 'react'
import Ninemm from '../Assets/9mm.png'
import chaos from '../Assets/chaos.png'
import i_run from '../Assets/i_run.png'
import ski_mask from '../Assets/ski_mask.png'
import './merch.css'
import {data} from '../Data'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Hoodies() {
  const history = useHistory()
  const redirect = (id)=>{
    history.push(`/detail/${id}`)
  }
  return (
    <>
    <div className='hoodies'>
      {
          data.slice(0, 3).map(item => {
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
       
<br/>
    </div>
<p className='button'>ALL PRODUCT</p>
    </>
  )
}
