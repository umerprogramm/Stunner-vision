import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function Reset_pass(props) {
  const history = useHistory();

    const [pass , setPass ] = useState('')
    const [conPass  , SetconPass] = useState('')
    const reset = async ()=>{
      let password = {
        pass,
        email : props.email
      }
      if(pass === conPass){
        let res = await fetch('http://localhost:5000/reset_pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(password)
      });
      const data = await res.json()
      if(data.res === true){
        alert('your password has been updated')
        history.push('/')
      }else{
        alert('something went wrong')
      }
      }else{
        alert('Check your passwords')
      }
    }


  return (
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">{props.email}</h3>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
                  <div class="form-outline">
                      <label class="form-label" for="lastName">Passward</label>
                      <input type="password" class="form-control form-control-lg" 
                      value={pass}
                      onChange={(e)=>setPass(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <label class="form-label" for="firstName">Confrim Passward</label>
                      <input type="password" class="form-control form-control-lg" 
                       value={conPass}
                       onChange={(e)=>SetconPass(e.target.value)}
                       />
                    </div>
  
                   
  
                  </div>
                </div>
                <div class="mt-4 pt-2">
                  <button class="btn btn-primary btn-lg" onClick={reset}>Reset</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
