import React, { useState } from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context_api';

export default function Register() {
  const { isAuthenticated, state,Register} = useContext(AuthContext);

  const [fname , setfname ] = useState('')
  const [lname , setlname ] = useState('')
  const [Email , setEmail ] = useState('')
  const [pass , setpass ] = useState('')
  const [conPass  , SetconPass] = useState('')
 

 
  return (
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="firstName" class="form-control form-control-lg" value={fname}
                      onChange={e => {setfname(e.target.value)}}
                      />
                      <label class="form-label" for="firstName">First Name</label>
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="lastName" class="form-control form-control-lg" value={lname}  
                      onChange={e => {setlname(e.target.value)}}
                      />
                      <label class="form-label" for="lastName">Last Name</label>
                    </div>
  
                  </div>
                </div>
  
            
  
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                      <input type="email" id="emailAddress" class="form-control form-control-lg" value={Email}
                      onChange={e=> setEmail(e.target.value)}
                      />
                      <label class="form-label" for="emailAddress">Email</label>
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                      <label class="form-label" for="phoneNumber">Passward</label>
                      <input type="password" id="phoneNumber" class="form-control form-control-lg" 
                      value={pass}
                       onChange={e=> setpass(e.target.value)}
              
                      />
                      
                    </div>
              
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                      <label class="form-label" for="phoneNumber">Confrim Passward</label>
                      <input type="password" id="phoneNumber" class="form-control form-control-lg" 
                      value={conPass}
                       onChange={e=> SetconPass(e.target.value)}
              
                      />
                      
                    </div>

                  </div>
                </div>
                
  
               
  
                <div class="mt-4 pt-2">
                <button class="btn btn-primary btn-lg" onClick={()=>Register(fname,lname,Email,pass,conPass)} >Sumbit</button>
                </div>
                    <p style={{color : "black"}}>Do you want to login? <Link to='/' style={{color : "blue"}}>Login</Link></p>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
