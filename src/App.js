import './App.css';
import Register from './auth/Register';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Nav from './Header/Nav'
import Merch from './Merch/Merch';
import { useContext } from "react";
import { AuthContext } from './Context_api';
import Login from './auth/Login';
import { Route, Switch } from 'react-router-dom';
import Send_email from './auth/Send_email';
import Reset_pass from './auth/Reset_pass';
import OTP from './auth/Otp';



function App() {
  const { isAuthenticated, state } = useContext(AuthContext);

  return (
    <div className="App">
      <Nav/>

      {isAuthenticated || localStorage.getItem("jwt")?
        <>
        <Banner/>
      <Merch/>
      <Footer/>
      </>:
      <>
      <Switch>
      <Route exact path='/'component={Login}/>
      <Route  path="/register" component={Register} />
      <Route  path="/send_mail" component={Send_email} />
      <Route path="/reset" 
      render={(props) => <Reset_pass {...props} email={state} />}
      />
      <Route path="/otp"
      render={(props) => <OTP {...props} email={state} />}
      />
      </Switch>
      </>
      }
    </div>
  );
}

export default App;
