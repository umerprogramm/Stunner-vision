import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context_api';


export default function Send_email() {
    const [email , setEmail] = useState('')
    const { isAuthenticated, state,Register, logout,login,Send_email }= useContext(AuthContext);


    

  return (
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 p-md-5">
              <h3 style={{display : "flex" , justifyContent :"center", alignItems : "center"}} class="mb-1 pb-1 pb-md-0 mb-md-1">Login</h3>
  
                <div style={{display : "flex" , justifyContent :"center", alignItems : "center"}} class="row">
                  <div class="col-md-6 mb-4">

  
                    <div class="form-outline">
                      <label class="form-label" for="firstName">Email</label>
                      <input type="email" class="form-control form-control-lg" 
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                    </div>
  
                  </div>
            
                </div>
                <div style={{display : "flex" , justifyContent :"center", alignItems : "center"}} class="mt-4 pt-2">
                  <button class="btn btn-primary btn-lg" onClick={()=>Send_email(email)}>Send</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
