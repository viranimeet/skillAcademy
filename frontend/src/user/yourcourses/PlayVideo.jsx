import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Heading/Header'
import "./PlayVideoCss.css";
import { useLocation } from 'react-router-dom';

const PlayVideo = () => {

    const location=useLocation();
    const [urll,videoUrl]=useState();
    

    useEffect(()=>{

        console.log(location);
        videoUrl(location.state.id.videoUrls)
    },[]);

  return (
         
      <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>

      <Header />  
     
     <div className='play-Video'>
     <iframe
        src={urll}
        width="100%"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>

    
     </div>

        </div>
  )
}

export default PlayVideo
