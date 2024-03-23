import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Certificate.css';
// import './FileSaver.js';
import { PDFDocument } from 'pdf-lib';


const Certificate = () => {

  

  const [name,setName]=useState('');
  const [courseId,setCourseId]=useState('');
  const location=useLocation();

  useEffect(()=>{

    
    console.log("all details.==",location.state.id)
    const cid=location.state.id;
    setCourseId(cid);
    // const responce= await axios.get("",cid);

  },[])

  const handleSubmit=async()=>{

    console.log(name)

    const obj1={
      "uname":name,
      "cid":courseId
    }

    if (name.trim() !== "") {
      console.log(name);

      const responce= await axios.post("http://localhost:8080/card/getcerti",obj1);
      
      console.log(responce)
      alert("sucessfully downlode")

      
    } else {
      alert("enetr valid name")
    }
  }
 

  

  return (
    
    <div className="containerrr">
    <div className="header">
        <img src="https://imgs.search.brave.com/6s1rC0rs-ka9D3Eku7DC47CFwIrwaJP3lW2ND7AC7Gs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/OTg3NDk3MC9waG90/by8zZC1iYWRnZS13/aXRoLWNoZWNrLW1h/cmsud2VicD9iPTEm/cz0xNzA2NjdhJnc9/MCZrPTIwJmM9ZTJZ/Ny1haDhXQzZ5TUk0/Z3JaUUx4SlNPZG1U/ZUZ4dkxRWHRWZm5l/QnhJZz0" alt="Padhega India Logo" className="logo" />
        <h4>Get your certificate</h4>
        
    </div>
    <div className="content">
        <label htmlFor="name">Type Your Name</label>
        <input
            required
            type="text"
            name="Name"
            autoComplete="name"
            placeholder="Enter Your Name"
            id="name"
            className="input"
            minLength="3"
            maxLength="16"
            onChange={(e)=>setName(e.target.value)}
        />
        <button id="submitBtn" className="button" onClick={handleSubmit}>Get Certificate</button>
    </div>

    
</div>
   
  )
}

export default Certificate
