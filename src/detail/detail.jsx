import React from 'react'
import './detail.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { data } from '../Data';



export default function Detail() {
  const { id } = useParams()
  const product = data[id-1]
  console.log(product);

  return (
    <div className='details'>
    <div style={{display : 'flex' , marginTop : '50px'}}>
    <div className='images'>
      
      </div>
      <div>
        <h3 style={{marginLeft : '10px',marginBottom : '20px'}}>title of product</h3>
        <p style={{color : 'black', fontSize : '20px' , marginLeft : '10px',marginBottom : '20px',color : 'white' , width : "50vw",textAlign : 'left'}}>{product.description}</p>
        <span style={{fontSize : '20px', marginLeft : '10px',marginBottom : '20px'}}>
          Rs: {product.price}
        </span>
        <div style={{marginLeft : '10px',marginTop : '20px' ,}}>
        <button  >Add to Cart</button>
        <button>Buy Now</button>
        </div>
 

      </div> 
      <div>
        <p></p>
      </div>
    </div>

       
    </div>
   
  )
}
