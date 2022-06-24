
import 'bootstrap/dist/css/bootstrap.css';
import msg_icon from '../icons8-mail-24.png';
import { useState, React, useEffect } from 'react';
import logo from '../undraw_secure_login_pdn4.svg';
import { Container,Navbar,Nav ,Button,Row,Col} from 'react-bootstrap';
import Annotation from './Annotation';

import Resizer from "react-image-file-resizer";
import axios from 'axios';

import { useLocation } from 'react-router-dom';


    async function postTemplateImage(tempName, img){
        await axios.post('http://localhost:8000/cropper/add-template-image', {
            templateName: tempName,
            templateImage: img,
        }).then(response => { 
	    console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
            }

const resizeFile = (file) =>
new Promise((resolve) => {
Resizer.imageFileResizer(
        file,
           300,300,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
                },
                "base64"
              );
            });


function FileUploadPage(){

    // const [Input, setInput] = useState("");
    // const [keys, setKey] = useState([]);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);


    const {state} = useLocation();




    const TakeInputImage = (event) => {
        if (event.target.files[0]) {
        setPicture(event.target.files[0]);
        };
        console.log('taken picture');
        
    }

    const Preview = async() =>{
        try {
            const reader = new FileReader();
            
            const image = await resizeFile(picture);
            setImgData(image);
            console.log(image)

            postTemplateImage(state.tempname, image);
            return image;

    
        } catch (error) {
            console.log(error);
        }
        
       
        
        
        
       
    }
        
        // return (
        //     reader.readAsDataURL(picture)
        // );
    

    // function TakeInput(event) {
    //     console.log("TakeInput");
    //     setInput(event.target.value)
    // }

    // function AddKeys() {
    //     setKey([...keys, Input]);
    //     setInput("");
    //     console.log("AddKeys");
    // }




    return(
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
            
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <div>
                        <input type="file" onChange={TakeInputImage}/>

                        <button style={{margin: "50px"}} onClick={Preview}>Preview</button>
                        {/* <img src={imgData} alt="" width="100%"></img> */}
                        
                    </div>
                </div>

                <div className='col-sm'>
                    {/* <div style={{ width: '500px', height: '500px',backgroundImage: `url(${imgData})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '500px',
                    height: '500px' }}>
                    <DynamicCreateElement
                        style={{ height: "100%" }}
                        target={<div style={{ border: '2px solid black' }}></div>}
                    >
                        <div className="elementContainer"></div>
                    </DynamicCreateElement>
                </div> */}
                      <Annotation Image={imgData} Name={state.tempname}/>  
                    {/* <input type="text" onChange={TakeInput}  value={Input}/>
                    <button type="submit" onClick={AddKeys}>submit</button>
                    <ol>
                        {console.log("render")}
                        {keys.map((key) => <h1><li>{key}</li></h1>)}
                    </ol> */}
                </div>
            </div>
        </div>
        
       
		</div>
   
	)

                
}
export default FileUploadPage;
