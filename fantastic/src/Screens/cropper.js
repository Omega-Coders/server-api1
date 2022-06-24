
import 'bootstrap/dist/css/bootstrap.css';

import { useState, React } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Annotation from './Annotation';

import './cropper.css';
import axios from 'axios';

import { useLocation } from 'react-router-dom'


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




function FileUploadPage(){

    // const [Input, setInput] = useState("");
    // const [keys, setKey] = useState([]);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [hw, sethw] = useState({h: null, w: null});
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState(null);

    const {state} = useLocation();






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




    const Preview = () =>{
        const reader = new FileReader();
        reader.addEventListener("load", () => {
        setImgData(reader.result);
        });
        return reader.readAsDataURL(picture);
    }





    const getCropData = () => {
    if (typeof cropper !== "undefined") {
        setCropData(cropper.getCroppedCanvas().toDataURL());
        postTemplateImage(state.tempname, cropper.getCroppedCanvas().toDataURL());
        }
    };


    return(
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <div>
                        <input  type="file" onChange={TakeInputImage}/>

                        <button style={{margin: "50px"}} onClick={Preview}>Preview</button>
                        {/* <img src={imgData} alt="" width="100%"></img> */}
                        { cropData === "" ?
                        <div>
                        <Cropper
                            style={{ height: 600, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={imgData}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                            guides={true}
                        /> <button onClick={getCropData} >
                            Crop Image
                        </button> </div> :<Annotation Image={cropData} Name={state.tempname} w={hw.w} h={hw.h}/> }
                        
                        
                        

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
