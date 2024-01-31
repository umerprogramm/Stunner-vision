import React from 'react'
import Aonncement from './Aonncement'
import './nav.css'

export default function Nav() {
  const logout =async ()=>{
    localStorage.removeItem('jwt')
    window.location.reload();
    await fetch('http://localhost:5000/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email : localStorage.getItem('email')
      })
    });
    localStorage.removeItem('email')
  }
    return (
        <div className='header'>
            <Aonncement />
            <nav>
                <ul>
                <li id='logo'>STUNNER VISION</li>
                    <li>
                        HOODIES
                    </li>

                    <li>
                        SWEAT SHIRTS
                    </li>
                    <li>
                        YS MERCH
                    </li>
                    <li>
                        TROUSERS
                    </li>
                    <li>
                        Tees
                    </li>
                    <li>
                        COMPLETE COLLECTION
                    </li>
                      
                    <div style={{float : 'right',margin : '10px'}}>
                        { localStorage.getItem('jwt')?<button type="button" class="btn btn-primary" onClick={logout}>logout</button>:<div></div>}
                        </div>
                </ul>
               </nav>
               <nav id='menu' class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand mx-3" href="#">STUNNER VISION</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon bg-dark"></span>
  </button>

  <div class="collapse navbar-collapse my-3" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#"> HOODIES </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#"> SWEAT SHIRTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">YS MERCH</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">TROUSERS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">TEES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true"> COMPLETE COLLECTION</a>
      </li>
    </ul>

  </div>
</nav> 
              

        </div>
    )
}
