import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';
import logo from '../undraw_secure_login_pdn4.svg';

import google_logo from "../google-brands.svg";
import './login.css';
import {Link} from 'react-router-dom';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa'
import { login, reset } from '../redux/auth-redux';
import Spinner from './loading';


const user1=JSON.parse(localStorage.getItem('user'));

const Login = () => {
//declaring a login data
const [logindata,setlogindata]=useState({
    email:"",
password:''}

)
const{email,password}=logindata
const navigate=useNavigate();
const dispatch=useDispatch();
const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
useEffect(()=>{
    if(isError){
        toast.error(message);
    }
    if (isLoading) {
         <Spinner />
      }
    if(isSuccess&&user1){
        navigate('/form');
    }
    else{
         <Spinner />
    }
    dispatch(reset())

},[user, isLoading, isError, isSuccess, message ]);
const onChange = (e) => {
    setlogindata((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

 

    return (
        <div className="Login">
            <div className='container log'>
        <div className="row" >
            <div className="col-sm" >
                <div className="container login-cont" >
                    <div className="col">
                        <h1 className='wel'>
                            Welcome
                        </h1>
                        <div className="row">
                            {/* <label className='lab'>
                            <img  style={{ margin:"5px" }} width="19px" src={username_img}></img></label> */}
                            <input placeholder='Enter your user name' className='inp' id='email' onChange={onChange}/>
                        </div>
                             
               <br></br>
                        <div className="row">
                            
                            <input placeholder='Enter your Password'type={password} className='inp' id='password' autoComplete='false' onChange={onChange}/>
                           
                        </div>
               
               <br></br>
                        

                            <div className='row'>
                                <Button variant="light" className="google-but" placeholder=' Login' style={{color:"white", backgroundColor:"#5d3fd3"}} onClick={onSubmit}>
                                   Login
                               </Button>
                                </div>
                          
                               
                            
                        
               <br></br>
               <h4 style={{ textAlign:"center" }}>or</h4>
               <br></br>
                        <div className="row" >
                            <Button variant="light" className="google-but" style={{ color:"white",  backgroundColor:"#5d3fd3"}} >
                                <img width="23px"  src={google_logo} style={{ marginRight: "8px" }} ></img>
                                Continue with Google
                            </Button>

                        </div>
                
                </div>
                    
            </div>  
                
            </div>

            <div className="col-sm im">
                <img width="100%" src={logo} ></img>
            </div>

        </div>

        </div>
        </div>
        
    )
};


export default Login;

