
import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import '@recogito/annotorious/dist/annotorious.min.css';


const axios = require('axios');


  async function postData(tempname, key, coord, totalH, totalW) {
    await axios.post('http://localhost:8000/cropper/add-details', {
              templateName: tempname,
              key: key,
              x: Number(coord[0])/Number(totalW),
              y: Number(coord[1])/Number(totalH),
              w: Number(coord[2])/Number(totalW),
              h: Number(coord[3])/Number(totalH),
              regex: "string"
          }).then(function (response){console.log(response)}).catch(function (response){console.log(response)})
  }



function Annotation(props) {



  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('rect');

  const [keys, setKeys] = useState([{}]);

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
        setKeys([...keys, {Key: annotation.body[0].value, Coordinates: "Coordiantes : "+annotation.target.selector.value}]);
        postData(props.Name, annotation.body[0].value, annotation.target.selector.value.slice(11).split(","), props.h, props.w);
      });


      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
        keys.pop();
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);



    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  },[keys]);

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
        {/* <button
          onClick={toggleTool}>
            { tool === 'rect' ? 'RECTANGLE' : 'POLYGON' }
        </button> */}
      </div>

      <img
        ref={imgEl} 
        src={props.Image} 
        alt="" 
        width="500px"/>
        
        <ol>
            {keys.map((key)=> <h3>{key.Key}<h5>{key.Coordinates}</h5></h3>)}
        </ol>
    </div>
  );
}

export default Annotation;




