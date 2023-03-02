import React, { useState } from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context_api';




export default function Login(props) {
  const { isAuthenticated, state,Register, logout,login,Send_email }= useContext(AuthContext);
  const [email , setEmail] = useState('')
  const [pass , setPass ] = useState('')

  return (
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <label class="form-label" for="firstName">Email</label>
                      <input type="email" class="form-control form-control-lg" 
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <label class="form-label" for="lastName">Passward</label>
                      <input type="password" class="form-control form-control-lg" 
                      value={pass}
                      onChange={(e)=>setPass(e.target.value)}
                      />
                    </div>
  
                  </div>
                </div>
                <p style={{color : "black"}}><Link to='/send_mail' style={{color : "blue"}}>forget password?</Link></p>
                <div class="mt-4 pt-2">
                  <button class="btn btn-primary btn-lg" onClick={()=>login(email,pass)}>Login</button>
                </div>
                  <p style={{color : "black"}}>Don't have an account? <Link to='/register' style={{color : "blue"}}>Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  )
}
