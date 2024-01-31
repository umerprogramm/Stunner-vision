import './App.css';
import Register from './auth/Register';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Nav from './Header/Nav'
import Merch from './Merch/Merch';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './Context_api';
import Login from './auth/Login';
import { Route, Switch } from 'react-router-dom';
import Send_email from './auth/Send_email';
import Reset_pass from './auth/Reset_pass';
import OTP from './auth/Otp';
import Detail from './detail/detail';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Main from './Main/Main';



function App() {
  const { state } = useContext(AuthContext);
  const history = useHistory()
  useEffect(()=>{
   async function senddata(){
      let res = await fetch('http://localhost:5000/check_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email : localStorage.getItem('email')
        })
      });
      let res_json = await res.json()
      if(res_json.status == true){
        history.push('/')
      }else {
        history.push('/login')

      }
    }
    senddata()

      
  })

  return (
    
    <div className="App">
    <Nav/>

    <Switch>

    <Route exact path='/'component={Main}/>
    <Route exact path='/login'component={Login}/>

    <Route  path="/register" component={Register} />
    <Route  path="/send_mail" component={Send_email} />
    <Route  path="/detail/:id" component={Detail} />


    <Route path="/reset" 
    render={(props) => <Reset_pass {...props} email={state} />}
    />
    <Route path="/otp"
    render={(props) => <OTP {...props} email={state} />}
    />
    </Switch>
  </div>
  );
}

export default App;
