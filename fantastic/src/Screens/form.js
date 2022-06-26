
import {React, useState} from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import google_logo from "../google-brands.svg";
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';
import heading from "../heading_img.png";
import formsimg from "../form_js.svg";
import logo from '../tiktok-app.svg';
import msg_icon from '../icons8-mail-24.png';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


//sending data to the api;
const url="http://textextraction-api.herokuapp.com/api/v1/forms"
function Form() {

  const {state} = useLocation();

  const[publisher,setPublisher]=useState('');
  const[email,setEmail]=useState('');
  const[template,setTemplate]=useState('');
  const[type,setType]=useState('');
  const navigate = useNavigate();
const handlesubmit=async (e)=>{

if(template==="" || template===null){
  alert("Please enter template name")
}
else{
  try {
  const res= await  axios.post(url,{ NameofPublisher:publisher, PublisherEmail:email, NameofTemplate:template,TypeofTemplate:type})
  console.log(res.data);
} catch (error) {
  console.log(error.response);
}
navigate('/cropper',
{
    state: {
        tempname: template
    }
});

}
}



  

  return (
<div>
<Navbar  bg="none" expand="lg">
  <Container>
    <Nav>
        <Nav.Item className="edge-de">
            <div className="edge-design">
      </div>
      <div className="edge-des"></div>
        </Nav.Item>
    </Nav>



    <Navbar.Brand href="#" className="app-name" style={{margin:"10px"}}>
      <img width="50vw"
            className="img-fluid align-top d-inline-block tiktok"
            height="50vh" src={logo}  alt="logo"></img>
      Fantastic
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto justify-content-end flex-grow-1 pe-3 nav-comp">
       
       
        <Nav.Link href="#" className='butt'>
          <Button variant="light" className="contact-but" style={{ color:"white", backgroundColor:"#5d3fd3", borderRadius:"15px", }}>
              <img width="27"
            className="align-top d-inline-block nav-comp"
            height="22" src={msg_icon}  alt="logo" ></img>
          Contact Us</Button>
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
      
      
        <div class="Login">
            <div className='container log'>
        <div className="row" >
        <div className="col-sm">
        {/*  <p style={{ fontWeight:"bold", fontSize:"50px" }}>
               Let The Process Start By Creating..
            <img width="40px"  src={heading} style={{ marginRight: "8px" }} ></img></p>   */}
           <Container>
               <p style={{ fontWeight:"bold", fontSize:"50px" }}>
               Let The Process Start By Creating..
            <img width="40px"  src={heading} style={{ marginRight: "8px" }} ></img></p>   
          
          
          
            <div className="container login-cont" >
                
                    <div className="col">
                    <p style={{ fontWeight:"bold", fontSize:"20px" ,color:"black"}} >
                    Please Fill The following Details:
                </p>
                
                
                        <div className="row">
                            
                            <TextField
                autoComplete="fname"
                name="firstName"
                //variant="outlined"
                required
                fullWidth
                id="Publisher"
          
                label="Enter Name of the Publisher"
                onChange={(e)=>{setPublisher(e.target.value)}}
                autoFocus
              />
                        </div>
                             
               <br></br>
                        <div className="row">
                            
                            {/* <input placeholder='Enter your Password'  className='inp'> */}
              <TextField autoComplete="fname"
                name="firstName"
                //variant="outlined"
                required
                fullWidth
                id="email"
                label="EnterpublisherEmailAddress"
                autoFocus
                onChange={(e)=>{setEmail(e.target.value)}}
              />
                         
                        </div>
                        
               
               <br></br>
               <div className="row">
                            
                            {/* <input placeholder='Enter your Password'  className='inp'>
                            </input> */}
                            <TextField autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Name of the Template"
                autoFocus
                onChange={(e)=> {setTemplate(e.target.value)}}
              />
                
                        </div>
               
               <br></br>
               <div className="row">
                            
                            {/* <input placeholder='Enter your Password'  className='inp'>
                            </input> */}
                                   <TextField autoComplete="fname"
                                    margin="normal"
                name="firstName"
                //variant="filled"
                required
                fullWidth
                id="firstName"
                label="Type of the Template"
                autoFocus
                onChange={(e)=>{setType(e.target.value)}}
              />
                        </div>
               
               <br></br>
                        

                          <div className='row'>
                                <Button onClick={(e) => { handlesubmit() }} variant="light" className="google-but"  style={{color:"white", backgroundColor:"#5d3fd3"}}>
                                    Submit
                                </Button>
                          </div>

                            
                        

                
                </div>
                    
            </div>  
            
            </Container>
            </div>

            <div class="col-sm im">
                <img width="100%" src={formsimg} ></img>
            </div>

        </div>

        </div>
        </div>
        </div>
        
  
    
      
        
    
    
/* <Navbar  bg="none" expand="lg">
  <Container>
    <Nav>
        <Nav.Item className="edge-de">
            <div className="edge-design">
      </div>
      <div className="edge-des"></div>
        </Nav.Item>
    </Nav>
 
    
    <Navbar.Brand href="#" className="app-name" style={{margin:"10px"}}>
      <img width="50vw"
            className="img-fluid align-top d-inline-block tiktok"
            height="50vh" src={logo}  alt="logo"></img>
      Fantastic
      </Navbar.Brand>
      <Nav.Link href="#" className='butt'>
          <Button variant="light" className="contact-but" style={{ color:"white", backgroundColor:"#5d3fd3", borderRadius:"15px", }}>
              <img width="27"
            className="align-top d-inline-block nav-comp"
            height="22" src={msg_icon}  alt="logo" ></img>
          Contact Us</Button>
          </Nav.Link>
      </Container>
      </Navbar> */
  );

}





export default Form;

