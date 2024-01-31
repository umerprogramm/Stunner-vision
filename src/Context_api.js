import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";


const AuthContext = createContext({
  isAuthenticated: null,
  email : '',
  Register: () => {},
  logout: () => {},
  login : () => {},
});

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [state , setstate] = useState('')

const login = async (email , pass)=>{
  if(email === '' || pass === ''){
   alert('Enter email and password')
  }else{
    const credentials  = {email,pass}
    let res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await res.json()
      console.log(data)
      if(data.login === true){
        setIsAuthenticated(true)
        localStorage.setItem('jwt' , data.token)
        window.location.reload();
      }else{
        alert("Wrong email or password")

      }
  }
    

}

const Send_email = async (email)=>{
  const credentials  = {email}
let res = await fetch('http://localhost:5000/mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
  const data = await res.json()
  console.log(data)
  if(data.login === true){
    setstate(email)
    history.push('/otp')
  }else{
    alert("Wrong email")

  }
}

  const Register = async (fname,lname,Email,pass,conPass)=>{
    console.log(fname)
    if(pass !== conPass){
      alert("Check your confrimed password or password")
    }else{
      const user = {
        fname,
        lname, 
        Email,
        pass,
       }
        
       let res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      const data = await res.json()
      if(data.status === false){
        alert('You already have account')
      }else{
        setIsAuthenticated(true)
        localStorage.setItem('jwt' , data.token)
      }
      
    }
  }
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, state,Register, logout,login,Send_email }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export  {AuthProvider , AuthContext};
