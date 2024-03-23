// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';

// const Cardlayout = ({ course }) => {
//   const { coursename, couseimage, mentorname, courseprice } = course;


//   const makePayment = async () => {
//     console.log("In makepayment")
//     const stripe = await loadStripe("pk_test_51OchNgSFA7o5v3rGASDL20XI3Dx7tGZIu2u0mtdJ9CbTogbRWbdyl98jyZKbDy8iFPrTrK1XhTiFcc3Z0XPqalOq00HhdE5Nb2");
//     console.log(course);
//     const headers = {
//       "Content-Type": "application/json"
//     }
//     const user = JSON.parse(localStorage.getItem('user'))
//     const body = {
//       carddatas: course,
//       user: user
//     }
//     const response = await fetch("http://localhost:8080/card/payment-session", {
//       method:"POST",
//       headers: headers,
//       body: JSON.stringify(body), 
//     });

//     // if (!response.ok) {
//     //   console.log("result is not ok")
//     //   console.error(`Error: ${response.status} - ${response.statusText}`);
//     //   return;
//     // }

//     const session = await response.json();
//     console.log("Session ID from response:", session.id);
//     const result = stripe.redirectToCheckout({
//       sessionId: session.id
//     });

//     if (result.error) {
//       console.log(result.error);
//     }
//   }

//   // const makePayment = async () => {
//   //   try {
//   //     // Make a request to your server to create a Checkout Session
//   //     const response = await fetch('http://localhost:8080/card/payment-session', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ /* Include any required data */ }),
//   //     });
  
//   //     // Check if the request was successful (status code 2xx)
//   //     if (!response.ok) {
//   //       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//   //     }
  
//   //     // Parse the response JSON
//   //     const sessionData = await response.json();
  
//   //     // Log the entire response for inspection
//   //     console.log('Server Response:', sessionData);
  
//   //     // Extract sessionId from the response
//   //     const sessionId = sessionData.sessionId;
  
//   //     // Log the sessionId for inspection
//   //     console.log('Session ID from response:', sessionId);
  
//   //     // Check if sessionId is defined
//   //     if (!sessionId) {
//   //       throw new Error('Error: Session ID is undefined in the response.');
//   //     }
  
//   //     // Redirect to Checkout
//   //     const { error } = await stripe.redirectToCheckout({
//   //       sessionId: sessionId,
//   //     });
  
//   //     if (error) {
//   //       console.error('Error redirecting to Checkout:', error);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error making payment:', error);
//   //   }
//   // };
  

//   return (
//     <div className="w-full m-8 max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105">
//       <a href="#">
//         <img className="p-8 rounded-t-lg w-full h-40 object-cover" src={couseimage} alt="product image" />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="#">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Course : {coursename}</h5>
//         </a>
//         <a href="#">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mentor : {mentorname}</h5>
//         </a>
//         <div className="flex items-center justify-between">
//           <span className="text-3xl font-bold text-gray-900 dark:text-white">Course Price : ${courseprice}</span>
//           {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-900 dark:focus:ring-blue-800">BUY NOW</a> */}
//           <a
//             href="#"
//             onClick={makePayment}
//             className="text-white bg-blue-700 hover:bg-blue-800 btn btn-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-900 dark:focus:ring-blue-800"
//           >
//             BUY NOW
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cardlayout;


import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const Cardlayout = ({ course }) => {
  const { coursename, couseimage, mentorname, courseprice } = course;


  const makePayment = async () => {
    console.log("In makepayment")
    const stripe = await loadStripe("pk_test_51OchNgSFA7o5v3rGASDL20XI3Dx7tGZIu2u0mtdJ9CbTogbRWbdyl98jyZKbDy8iFPrTrK1XhTiFcc3Z0XPqalOq00HhdE5Nb2");
    console.log(course);
    const headers = {
      "Content-Type": "application/json"
    }
    const user = JSON.parse(localStorage.getItem('user'))
    const body = {
      carddatas: course,
      user: user
    }
    const response = await fetch("http://localhost:8080/card/payment-session", {
      method:"POST",
      headers: headers,
      body: JSON.stringify(body), 
    });

    // if (!response.ok) {
    //   console.log("result is not ok")
    //   console.error(Error: ${response.status} - ${response.statusText});
    //   return;
    // }

    const session = await response.json();
    console.log("Session ID from response:", session.id);
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  }
  return (
    <div className="w-full m-8 max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105">
      <a href="#">
        <img className="p-8 rounded-t-lg w-full h-40 object-cover" src={couseimage} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Course : {coursename}</h5>
        </a>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mentor : {mentorname}</h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">Course Price : ₹{courseprice}</span>
          {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-900 dark:focus:ring-blue-800">BUY NOW</a> */}
          <a
            href="#"
            onClick={makePayment}
            className="text-white bg-blue-700 hover:bg-blue-800 btn btn-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-900 dark:focus:ring-blue-800"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cardlayout;