import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import './HeaderCss.css';
import Head from './Head';

const Header = () => {

  const [click,setClick]=useState(false);

  return (
    <>
      <Head />
      <header className="bg-opacity-20 bg-white mx-8 relative">
        <nav className="flex items-center justify-between py-5 px-8">
          <ul className={`flex ${click ? "hidden" : ""} space-x-8`}>
            <li>
              <Link to="/home" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/yourcourses" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                YourCourses
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                AboutUs
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                ContacUs
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-white font-semibold hover:text-teal-500 transition duration-500">
                Help
              </Link>
            </li>
          </ul>

          <div className="start bg-teal-500 py-5 px-12 text-white">
            <div className="button">GET CERTIFICATE</div>
          </div>

          <button
            className="toggle block md:hidden text-white text-3xl"
            onClick={() => setClick(!click)}
          >
            {click ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-sliders"></i>
            )}
          </button>
        </nav>
      </header>
    </>
    // <>
    //   <Head/>
    //   <header>
    //     <nav className='flexSB'>
    //       <ul className={click?"mobile-nav":"flexSB"} >
    //       <li><Link to="/home">Home</Link></li>
          
    //       {/* <li><Link to="/homee">Home</Link></li> */}
    //       <li><Link to="/courses">Courses</Link></li>
    //       {/* <li><Link to="/about">About</Link></li> */}
    //       {/* <li><Link to="/team">Team</Link></li> */}
    //       <li><Link to="/yourcourses">YourCourses</Link></li>
    //       {/* <li><Link to="/journal">Journal</Link></li> */}
    //       <li><Link to="/aboutus">AboutUs</Link></li>
    //       <li><Link to="/contactus">ContacUs</Link></li>
    //       <li><Link to="/help">Help</Link></li>
    //       </ul>

    //       <div className='start'>

    //         <div className='button'>GET CERTIFICATE</div>
    //       </div>

          
    //       {/* <button className='toggle' onClick={()=>setClick(!click)}>
    //         {click?<i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-sliders"></i>}
    //       </button> */}
          
    //       <button className='toggle' onClick={()=>setClick(!click)}>
    //       {click?<i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-sliders"></i>}
    //       </button>

    //     </nav>
    //   </header>
    //   </>
  );
}

export default Header
