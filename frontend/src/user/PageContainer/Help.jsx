// import React from 'react'
// import './HelpCss.css';
// import Header from '../Components/Common/Heading/Header';
// const Help = () => {

//   const showAns1Fun = () => {

//     const x = document.querySelector(".answer1");

//     x.style.visibility = "visible";
//   }

//   const showAns2Fun = () => {
//     const y = document.querySelector(".answer2");

//     y.style.visibility = "visible";
//   }

//   const showAns3Fun = () => {
//     const z = document.querySelector(".answer3");

//     z.style.visibility = "visible";
//   }
//   return (
//     <>
//       <div className='help-main'>
//         <Header />
//         <div className="help-container">
//           <div className="header">
//             <h1 className="main-title">Help Center</h1>
//           </div>

//           <div className="faq-section">
//             <h2 className="section-title" >➤ Frequently Asked Questions</h2>
//             <p className="section-content">

//               <div className="question-container">
//                 <div className="question">
//                   <h3 className="question-title">1) How To Buy Course</h3>
//                   <p className="answer1">➭ You can buy course using upi / creditcard payment  .</p>
//                   <button className="show-answer-button" onClick={showAns1Fun}>Show Answer</button>

//                 </div>

//                 <div className="question">
//                   <h3 className="question-title">2)Is It Accesible for Life Time ?</h3>
//                   <p className="answer2">➭ It is Depending on Course you are buying ...</p>
//                   <button className="show-answer-button" onClick={showAns2Fun}>Show Answer</button>
//                 </div>

//                 <div className="question">
//                   <h3 className="question-title">3)Can we get refund if we don't like course?</h3>
//                   <p className="answer3">➭ Yes you definitly get refund but within one week ...</p>
//                   <button className="show-answer-button" onClick={showAns3Fun}>Show Answer</button>
//                 </div>
//               </div>
//             </p>
//           </div>
//           <div className="contact-section">
//             <h2 className="section-title">Contact Support</h2>
//             <p className="section-content">
//               If you have any questions or issues, please feel free to contact our support team at <a className="contact-link" href="mailto:killacadamysupport@gmail.com">skillacadamysupport@gmail.com</a>.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Help






import React, { useState } from 'react';
import Header from '../Components/Common/Heading/Header';

const Help = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  const toggleAnswer = (answer) => {
    switch (answer) {
      case 1:
        setShowAnswer1(!showAnswer1);
        break;
      case 2:
        setShowAnswer2(!showAnswer2);
        break;
      case 3:
        setShowAnswer3(!showAnswer3);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>
        <Header />
        <div className="max-w-screen-md mt-10 mb-10 mx-auto bg-cyan-950 p-8 text-gray-800 rounded">
          <div className="text-center">
            <h1 className="text-fuchsia-50 text-4xl">Help Center</h1>
          </div>

          <div className="mt-8">
            <h2 className="text-violet-300 text-2xl mt-4">➤ Frequently Asked Questions</h2>
            <div className="leading-6 text-gray-500">
              <div className="max-w-md mx-auto mt-4 p-4 bg-slate-300 rounded">


                <div className="mb-4">
                  <h3 className="text-teal-900 text-lg">1) How To Buy Course</h3>
                  {showAnswer1 && <p className="text-cyan-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-cyan-900 dark:peer-focus:text-primary">
                    ➭ You can buy the course using credit card payment.
                  </p>}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition-bg duration-300 hover:bg-blue-700" onClick={() => toggleAnswer(1)}>Show Answer</button>
                </div>

                <div className="mb-4">
                  <h3 className="text-teal-900 text-lg">2) Is It Accessible for Lifetime?</h3>
                  {showAnswer2 && <p className="text-cyan-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-cyan-900 dark:peer-focus:text-primary">
                    ➭ It depends on the course you are buying...
                  </p>}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition-bg duration-300 hover:bg-blue-700" onClick={() => toggleAnswer(2)}>Show Answer</button>
                </div>
                <div className="mb-4">
                  <h3 className="text-teal-900 text-lg">3) Can we get a refund if we don't like the course?</h3>
                  {showAnswer3 && <p className="text-cyan-900 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-cyan-900 dark:peer-focus:text-primary">
                    ➭ Yes, you definitely get a refund but within one week...
                  </p>}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer transition-bg duration-300 hover:bg-blue-700" onClick={() => toggleAnswer(3)}>Show Answer</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-violet-300 text-2xl">Contact Support</h2>
            <p className="text-gray-500">
              If you have any questions or issues, please feel free to contact our support team at <a className="text-blue-500" href="mailto:skillacademysupport@gmail.com">skillacademysupport@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;

