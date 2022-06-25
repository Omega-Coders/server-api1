
import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious/dist/annotorious.min.css';



const axios = require('axios');

  const l = [];
  var ad = 0;
  async function postData(tempname, key, coord, totalH, totalW) {

    await axios.post('http://localhost:8000/cropper/add-details', {
              templateName: tempname,
              key: key,
              x: Number(coord[0])/Number(totalW),
              y: Number(coord[1])/Number(totalH),
              w: Number(coord[2])/Number(totalW),
              h: Number(coord[3])/Number(totalH),
              regex: "string"
          }).then(function (response){console.log(response); ad++;}).catch(function (response){console.log(response)});
    if(ad===l.length){
      alert("Successfully Submitted !!!!!!!!");
    }
}







function Annotation(props) {



  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('rect');

  const [keys, setKeys] = useState([]);

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state




  useEffect(() => {
    let annotorious = null;
    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
            widgets: ['TAG']
      });


      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
        console.log(keys);
        console.log(props.h, props.w, props.Name);
        // setKeys([...keys, {Key: annotation.body[0].value, Coordinates: "Coordiantes : "+annotation.target.selector.value}]);
        //setKeys([...keys, annotation.body[0].value]);
        var obj= {Key: annotation.body[0].value, Coordinates: annotation.target.selector.value.slice(11).split(",")}
        l.push(obj);

        // postData(props.Name, annotation.body[0].value, annotation.target.selector.value.slice(11).split(","), props.h, props.w);
      });


      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        var f = l.find(ele => ele.Key===annotation.body[0].value);
        var index = l.indexOf(f);
        console.log(index);
        l.splice(index, 1);
        console.log(l);
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);



    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  },[props.h, props.w, props.Name]);

  // Toggles current tool + button label
  const toggleTool = () => {
    if (tool === 'rect') {
      setTool('polygon');
      anno.setDrawingTool('polygon');
    } else {
      setTool('rect');
      anno.setDrawingTool('rect');
    }
  }

  return (
    <div>
      <div>
        <img
        ref={imgEl} 
        src={props.Image} 
        alt="" 
        width="500px"/>
        
        <ol>
            {l.map((key)=> <h3>{key.Key}</h3>)}
        </ol>
      </div>
      <div>
        <button onClick={()=>l.map((e)=>postData(props.Name, e.Key, e.Coordinates, props.h, props.w))}>Submit</button>
      </div>
      
    </div>
  );
}

export default Annotation;




