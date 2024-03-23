import React, { useEffect, useState } from 'react'
import Header from '../Components/Common/Heading/Header'
import axios from 'axios'
import YourCard from './YourCard';

import './YourCourseCss.css';
import { useNavigate } from 'react-router-dom';


const YourCourses = () => {

    const [courseDetails1, setCourseDetails1] = useState([]);
    
    // const [courseFlag,setCourseFlage]=useState(true);
    // var x=[];

    // const [courseDetails,setcourseDetails]=useState([{
    //     'coursename':'',
    //     'coursediscription':'',
    //     'mentorname':'',
    //     'couseimage':'',
       
    
    // }]);

    // const [courseUrls,setCourseUrls]=useState([]);

    
    // const [courseVideoUrls,setcourseVideoUrls]=useState([]);

    
  useEffect(()=>{

    axios.get("http://localhost:8080/card/getCourseUrl")
    .then((res) => {

     
      console.log(res);

      // if(res.)
      console.log("=======================")
      console.log("res data=", res.data);
    
      const resData=res.data;

      setCourseDetails1(resData);
      // resData.forEach((element) => {
        
      //   console.log(element);
      //   // x.push(element);
      //   setCourseDetails([...courseDetails,{
      //               data:element,
      //     }])

      // });
      
      
    //   resData.forEach((ress) => {

    //     setcourseDetails(prevState => ({
    //         ...prevState,
    //         ['coursename']:ress.coursename,
    //         ['coursediscription']:ress.coursediscription,
    //         ['mentorname']:ress.mentorname,
    //         ['couseimage']:ress.couseimage,


    //       }));

    //   });
      

    alert("sucesfull")
    // console.log(x);




    })
    .catch((error) => {
      console.log("error:", error);
    });
  
  },[])

  const nav=useNavigate();

  
  const playVideo=(id)=>{
    console.log("yourcourse:",id)
      nav("/player",{state:{id:id}});

  }

  return (
    <>
      
      <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>

        <Header />  
       

        {/* <div className='flex justify-center items-center h-screen'>
        {
        
          courseDetails1.map(cd=>{
            return (<YourCard courseUrls={cd.courseUrls} coursename={cd.coursename} couseimage={cd.couseimage} mentorname={cd.mentorname} coursediscription={cd.coursediscription}    />)

          })
          
        }
        </div> */}


            {/* {
            return (<YourCard courseUrls={cd.courseUrls} coursename={cd.coursename} couseimage={cd.couseimage} mentorname={cd.mentorname} coursediscription={cd.coursediscription}    />)
            } */}

        <div className='course-body'>

        {
          courseDetails1.map((cd)=>(
          
            
            <div className='course-card' key={cd.id} onClick={()=>playVideo(cd)}>
            <img src={cd.couseimage} className='course-image'/>
            
            <p className='course-text'>{cd.coursename}</p>
            <p className='course-text'>{cd.mentorname}</p>
           
            
            </div>
          ))
        }
          
        

        </div>

          

      
        </div>
        
      
     </>
  )
}

export default YourCourses
