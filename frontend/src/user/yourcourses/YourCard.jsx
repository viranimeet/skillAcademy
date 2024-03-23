import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

  
const YourCard = ({courseUrls, coursename,couseimage,mentorname,coursediscription}) => {
  return (
    <div>
        <div className='flex justify-center items-center h-screen'>

        <div class="max-w-sm bg-white border  m-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={couseimage} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{coursename}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{coursediscription}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            
            Explore
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>

    {
        courseUrls.map(url=>{
            return(<iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>)
        })
    }
</div>
</div>
     
</div>
      
  )
}

export default YourCard
