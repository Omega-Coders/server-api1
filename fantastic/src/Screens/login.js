import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';
import logo from '../undraw_secure_login_pdn4.svg';

import google_logo from "../google-brands.svg";
import './login.css';
import {Link} from 'react-router-dom';





const Login = () => {




    return (
        <div class="Login">
            <div className='container log'>
        <div className="row" >
            <div class="col-sm" >
                <div className="container login-cont" >
                    <div className="col">
                        <h1 className='wel'>
                            Welcome
                        </h1>
                        <div className="row">
                            {/* <label className='lab'>
                            <img  style={{ margin:"5px" }} width="19px" src={username_img}></img></label> */}
                            <input placeholder='Enter your user name' className='inp'></input>
                        </div>
                             
               <br></br>
                        <div className="row">
                            
                            <input placeholder='Enter your Password'  className='inp'>
                            </input>
                        </div>
               
               <br></br>
                        

                            <Link to ="/form" style={{ textDecoration:'none' }}><div className='row'>
                                <Button variant="light" className="google-but"  style={{color:"white", backgroundColor:"#5d3fd3"}}>
                                    Login
                                </Button>
                                </div>
                            </Link>
                               
                            
                        
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

            <div class="col-sm im">
                <img width="100%" src={logo} ></img>
            </div>

        </div>

        </div>
        </div>
        
    )
};


export default Login;

