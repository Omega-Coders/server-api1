
import {React, useState} from 'react'
import { Container,Navbar,Nav ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';
import heading from "../heading_img.png";
import formsimg from "../form_img1png.png";
import logo from '../tiktok-app.svg';
import msg_icon from '../icons8-mail-24.png';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [TemplateName, setTemplateName] = useState('');


  const passName = () => {

    if(TemplateName==="" || TemplateName===null){
          alert("please give template name");
    }else {
              navigate('/cropper',
            {
                state: {
                    tempname: TemplateName
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
      
    
        <Nav.Link href="#" className='butt'>
            <Button variant="light" className="contact-but" style={{ color:"white", backgroundColor:"#5d3fd3", borderRadius:"15px", }}>
                <img width="27"
              className="align-top d-inline-block nav-comp"
              height="22" src={msg_icon}  alt="logo" ></img>
            Contact Us</Button>
            </Nav.Link>
        </Container>
        </Navbar> 
        
    <div className='container cont co1' >
    
        <div className="row " >
          
            <div className="col-sm" > {/*  <p style={{ fontWeight:"bold", fontSize:"50px" }}>
               Let The Process Start By Creating..
            <img width="40px"  src={heading} style={{ marginRight: "8px" }} ></img></p>   */}
            <div className='container1'>
           <svg viewBox='0 0 1100 500'> 
             <text id='mytext' x="50%" y="50%" textAnchor='middle' fill='none'>Let The Process Start By Creating.. </text>
             <use xlinkHref='#mytext' className='copy copy1'></use>
             <use xlinkHref='#mytext' className='copy copy2'></use>
             <use xlinkHref='#mytext' className='copy copy3'></use>
             <use xlinkHref='#mytext' className='copy copy4'></use>
             <use xlinkHref='#mytext' className='copy copy5'></use>
           </svg> 
           </div>


              <div className='container co'>
              <p style={{ fontWeight:"bold", fontSize:"20px" ,color:"black"}} >
                    Please Fill The following Details:
                </p>
              
                <div className='row'>
                

              <div className="col-sm" >
                <div className='row-sm'>
                
         {/* <input name="emailid" placeholder='Enter Name of the Publisher' className='input_field'></input> */}
         <TextField
                autoComplete="fname"
                name="firstName"
                //variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Name of the Publisher"
                autoFocus
              />
        </div>
        <br></br>
        <div className="row-sm">
        {/* <input name="emailid" placeholder='Enter publisher email Address'className='input_field'></input> */}
        <TextField
                autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter publisher email Address"
                autoFocus
              />
        </div>
        <br></br>
        <div className="row-sm">
        {/* <input name="emailid" placeholder='Enter Name of the Template'className='input_field'></input> */}
        <TextField
                autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Name of the Template"
                autoFocus
                onChange={(e)=> {setTemplateName(e.target.value)}}
              />
        </div>
        <br></br>
        </div>
        <br></br>
        <div className='col-sm'>
        <div className="row-sm ">
        {/* <input name="emailid" placeholder='Enter Code of the Template'className='input_field'></input> */}
        <TextField
                autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Enter Code of the Templatest "
                autoFocus
              />
        </div>

        <br></br>
        <div className="row-sm" >
        {/* <input typeof='password' name="Type" placeholder='Type of the Template'className='input_field'></input> */}
        <TextField
                autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Type of the Template "
                autoFocus
              />
        </div>
        <br></br>
        <div className="row-sm">
        {/* <input typeof='text' name="purpose" placeholder='Purpose of the Template'className='input_field'></input> */}
        <TextField
                autoComplete="fname"
                name="firstName"
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Purpose of the Template "
                autoFocus
              />
        </div>
       
        </div>
        <br></br>
        <div className='row'>
        <br></br>


        <Button onClick={() => { passName() }} variant="light" className="google-but" style={{ color:"white",  backgroundColor:"#2f2e41",borderRadius:"15px"}} >
           Submit
        </Button>

        
        </div>
        
        </div>
    
           </div>
       </div>
       <div className='col-sm im'>
         <div className='img'><img width="100%" src={formsimg}></img></div>

         
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