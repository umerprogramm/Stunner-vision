import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const OTP = (props) => {
  const history = useHistory();

  const [otp, setOTP] = useState('');
  const verify = async ()=>{
    const info = {
      email : props.email,
      otp : otp
    }
    let res = await fetch('http://localhost:5000/verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    const data = await res.json()
    if(data.status === true){
      history.push('/reset')
    }else{
       alert('Invalid otp') 
    }
  }



  return (
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 p-md-5">
              <h3 style={{display : "flex" , justifyContent :"center", alignItems : "center"}} class="mb-1 pb-1 pb-md-0 mb-md-1">{props.myProp}</h3>
  
                <div style={{display : "flex" , justifyContent :"center", alignItems : "center"}} class="row">
                  <div class="col-md-6 mb-4">

  
                    <div class="form-outline">
                      <input type="email" class="form-control form-control-lg" 
                       value={otp}
                       onChange={(e)=>setOTP(e.target.value)}
                       />
                    </div>
  
                  </div>
            
                </div>
                <div style={{display : "flex" , justifyContent :"center", alignItems : "center"}}>
                  <button class="btn btn-primary btn-lg" onClick={verify}>Verify</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default OTP;
