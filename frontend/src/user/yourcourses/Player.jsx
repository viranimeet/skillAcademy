import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Heading/Header'
import './PlayerCss.css';
import { useLocation, useNavigate } from 'react-router-dom';
import e from 'cors';
import axios from 'axios';

import { emailOfUser } from '../../admin/pages/Login';

const Player = () => {

    const [uurl,setUurl]=useState("");

    const [url,setUrl]=useState([]);
    

    const [allDetails,setAllDetails]=useState([])
    const location=useLocation();
    const nav=useNavigate();

    useEffect(()=>{
        console.log(location);

        console.log("urlsss==",location.state.id.courseUrls)
        setUrl(location.state.id.courseUrls)
        setAllDetails(location.state.id._id)


    },[])

  
    const playOnevideo=async(id)=>{

        


        if(!id.isComplited)
        {


            // alert("false")
            console.log("iddd=",id)

            
            const tmpVar={

              
                coursObjId:allDetails,
                videoObjUrl:id.videoUrls

            }
            console.log("tmpvar=",tmpVar)
            const responce=await axios.post("http://localhost:8080/card/markCheckedUrl",tmpVar)

            console.log("check responce=",responce);
            setUrl(responce.data.curls);
       

        }   

        //  nav("/playVideo" ,{state:{id:id}} )
        //  console.log("url=",allDetails)
        // console.log("id=",id);
             
       setUurl(id.videoUrls)
       
    }

    const getCertificate=()=>
    {
        
         var flag=true;

         url.forEach(u=>{

            console.log("is complite==",u.isComplited)
            if(!u.isComplited)
            {
                flag= false;
                return;
            }
           

        })

        console.log("falg=",flag)

        if(flag)
        {

         console.log("alldetails= ",allDetails)  
         nav("/certificate",{state:{id:allDetails}})
        alert("sucessfull")

        
        }
        else
        {
            alert("complite course")
        }
    }




  return (
    <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen font-medium absolute inset-x-0 top-0'>

    <Header />  
   
   <div className='outer-player'>
     <div className='player-component'>
    {
        url.map((curl)=>(


            <div className={curl.isComplited ?'player-card1-complite':'player-card1' }  key={curl.id}  onClick={()=>{playOnevideo(curl)}} >

                {/* <p className='player-index'>{id}</p>  onClick={playOnevideo(curl)}  */}
                <p className='player-url'  >{decodeURIComponent(curl.videoUrls.match(/\/([^\/?#]+)\.mp4/i)[1])}</p>
                
            </div>  

      
        ))


        


    }

        <div>
        <button className='player-url' onClick={getCertificate} >Get Certificate</button>
        </div>
     </div>


    <div className='extra'>
        
        <div className='play-Video'>
     <iframe
        src={uurl}
        width="100%"
        height="400"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>

    
     </div>


    </div>

     </div>

    </div>
  )
}

export default Player
