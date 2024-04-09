import './App.css'
import Admin from './admin/pages/Admin'
import AddCoursePage from './admin/pages/AddCoursePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './admin/pages/Login';
import SignUp from './admin/pages/SignUp';

import ContacUs from './user/PageContainer/ContacUs';
import AboutUs from './user/PageContainer/AboutUs';
import Footer from './user/PageContainer/Footer';
import Home from './user/Home/Home';
import About from './user/Components/about/About';
import './App.css';
import Home11 from './user/Components/home/Home11';
import YourCourses from './user/yourcourses/YourCourses';
import Help from './user/PageContainer/Help';
import Courses1 from "./user/cardcourses/Courses1";
import Userdetails from './admin/pages/User';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './user/yourcourses/Player';
import PlayVideo from './user/yourcourses/PlayVideo';

import CoursesPage from './admin/pages/CoursesPage';
import Certificate from './user/yourcourses/Certificate';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin_dashboard" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add_course" element={<AddCoursePage />} />


        <Route path='/home' element={<Home/>}/>
        <Route path='/courses' element={<Courses1/>}/>
        <Route path='/contactus' element={<ContacUs />} /> 
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/yourcourses' element={<YourCourses/>} /> 
        <Route path='/footer' element={<Footer />} /> 
        <Route path='/help' element={<Help />} />
        <Route path='/users' element={<Userdetails />} />

        <Route path='/player' element={<Player/>}/>
        <Route path='/playVideo' element={<PlayVideo/>}/>
        
        <Route path='/delete_courses' element={<CoursesPage/>}/>
    <Route path='/certificate' element={<Certificate/>}/>
      </Routes>

      
    </BrowserRouter>
    <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition: Bounce/>

    </>
  )
}

export default App

