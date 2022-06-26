
import 'bootstrap/dist/css/bootstrap.css';
import msg_icon from '../icons8-mail-24.png';
import { useState, React } from 'react';
import logo from '../undraw_secure_login_pdn4.svg';
import { Container,Navbar,Nav ,Button} from 'react-bootstrap';
import Annotation from './Annotation';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Resizer from "react-image-file-resizer";
import axios from 'axios';

import { useLocation } from 'react-router-dom';


    async function postTemplateImage(tempName, img){
        // await axios.post('http://textextraction-api.herokuapp.com/cropper/add-template-image', {
        //     templateName: tempName,
        //     templateImage: img,
        // }).then(response => { 
	    // console.log(response)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });
            }



function FileUploadPage(){

    // const [Input, setInput] = useState("");
    // const [keys, setKey] = useState([]);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [hw, sethw] = useState({h: null, w: null});
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState(null);

    const {state} = useLocation();


    const resizeFile = (file) =>
    new Promise((resolve) => {
    Resizer.imageFileResizer(
            file,
            300,300,
                "JPEG",
                95,
                0,
                (uri) => {
                    resolve(uri);
                    },
                    "base64"
                );
                });




    var img = new Image();
    img.src=cropData;
    img.onload = function(){
        var height = img.height;
        var width = img.width;
        sethw({h: height, w: width});
    }




    const TakeInputImage = (event) => {
        if (event.target.files[0]) {
        setPicture(event.target.files[0]);
        };
        console.log('taken picture');
    }

    const Preview = async () =>{
        const image = await resizeFile(picture);
        setImgData(image);
        console.log('preview');
        setCropData("");
        return image;
    }





    const getCropData = () => {
    if (typeof cropper !== "undefined") {
        setCropData(cropper.getCroppedCanvas().toDataURL());
        postTemplateImage(state.tempname, cropper.getCroppedCanvas().toDataURL());
        }
    }


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
                        <input  type="file" onChange={TakeInputImage}/>
                        <button style={{margin: "50px"}} onClick={Preview}>Preview</button>
                        { (cropData === "" || cropData===null) ?
                        <div>
                            
                        <Cropper
                            style={{ height: 600, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            src={imgData}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false}
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                            guides={true}
                        /> <button onClick={getCropData} >
                            Crop Image
                        </button>
                        </div> : 
                        <Annotation Image={cropData} Name={state.tempname} w={hw.w} h={hw.h}/> 
                        }
                        
                </div>
                </div>

                <div className='col-sm'>

                </div>
            </div>
        </div>
        
		</div>
	)

}
export default FileUploadPage;
