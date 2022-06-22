
import 'bootstrap/dist/css/bootstrap.css';

import { useState, React, useEffect } from 'react';


import Annotation from './Annotation';


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


    const {state} = useLocation();




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
        postTemplateImage(state.tempname, reader.result);
        });

        
        return (
            reader.readAsDataURL(picture)
        );
    }

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
