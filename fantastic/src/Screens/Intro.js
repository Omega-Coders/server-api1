import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../tiktok-app.svg';
import login_icon from '../login-circle-svgrepo-com.svg';
import msg_icon from '../icons8-mail-24.png';
import sign_in from '../user-application-identity-authentication-login-svgrepo-com.svg';
import photo from '../undraw_visionary_technology_re_jfp7.svg';
import play_store_icon from '../Google_Play-Badge-Logo.wine.svg';
import './Intro.css';

import { Link } from 'react-router-dom';


 


const Intro = () => {
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
        <Nav.Link href="#" >

      
          

          <Link to ="/login">
            <Button variant="light" style={{ backgroundColor:"#ccccff", borderRadius:"15px"}}><img width="24"
            className="align-top d-inline-block nav-comp"
            height="24" src={login_icon}  alt="logo"></img>
          Login</Button>
          </Link>
          

          
          </Nav.Link>
        <Nav.Link href="#">
        <Link to ="/signup">
          <Button variant="light" style={{ backgroundColor:"#ccccff",  borderRadius:"15px"}}><img width="24"
            className="align-top d-inline-block nav-comp"
            height="24" src={sign_in}  alt="logo"></img>
          Sign Up</Button>
          </Link>
          </Nav.Link>
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


    <div className='container cont' >
        <div className="row" >
            
            <div className="col-sm" >
                <p style={{ fontWeight:"bold", fontSize:"20px" }} >
                    Spreading Things up into an efficient way
                </p>
                <p style={{ fontWeight:"bold", fontSize:"35px" }} >Get Your DataAutomation Done With our Fantastic Tool!.......</p>
                <p style={{ fontWeight:"bold", fontSize:"20px" }} >
                    Share Your Data Sprightly
                </p>
                <a href="#">
                    <img width='250px' src={play_store_icon} ></img>
                </a>
                    
                
            </div>

            <div class="col-sm">
                <img width="100%" src={photo} ></img>
            </div>

        </div>
</div>
</div>




);
}



export default Intro;