
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Screens/login.js';
import Intro from './Screens/Intro';
import Form from './Screens/form';
import Spinner from './Screens/loading';
import FileUploadPage from './Screens/cropper';
import SignUp from './Screens/signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const user=JSON.parse(localStorage.getItem('user'));

function App() {

 
  return (
    <>
      <Router>
        <div className='App'>
       
          <Routes>
          
             <Route path="/" element={user?<Form />:<Intro />} />
             <Route path="/login" element={user?<Form />:<Login />} />
             <Route path="/form" element={user?<Form />:<Intro />} />
             <Route path="/cropper" element={user?<FileUploadPage />:<Intro/>} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/spinner" element={<Spinner/>} />
           </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App



  
       
        
          



