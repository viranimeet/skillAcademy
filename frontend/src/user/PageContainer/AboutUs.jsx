
// import React from "react";
// import Header from "../Components/Common/Heading/Header";

// const AboutUs = () => {
//     return (
//         <>
//             <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>
//                 <Header />

//                 <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen flex items-center justify-center font-medium">
//                     <div className="about-main">
//                         <div className="about-outer bg-cyan-950 p-20 shadow-2xl">
//                             <div className="about-container flex justify-between items-center max-w-5xl mx-auto">
//                                 <div className="about-left flex-1">
//                                     <img
//                                         src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20165.jpg?w=740&t=st=1704906975~exp=1704907575~hmac=8a460b550de649ca36eb14c8b57be423600dafe05336ba718675f0ff5b2428fe"
//                                         alt="About us Image"
//                                         className="w-full h-full rounded-8"
//                                     />
//                                 </div>

//                                 <div className="about-right flex-1 ml-12">
//                                     <h1 className="text-3xl text-yellow-50 font-bold mb-4">About Us</h1>
//                                     <h2 className="text-2xl text-cyan-300 font-bold mb-4">Welcome to Skill Academy!</h2>
//                                     <p className="text-lg text-sky-100">
//                                         ➢ Our Mission At Skill Academy is to empower college students like you to reach new heights through accessible, high-quality education. We believe that learning should be flexible, engaging, and tailored to your unique needs.
//                                     </p>

//                                     <div className="about-foot mt-4">
//                                         <h3 className="text-2xl font-bold mb-2 text-blue-400">Follow Us On...</h3>
//                                         <a href="#" className="text-blue-500 text-lg underline">
//                                             Instagram
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AboutUs;

import React from "react";
import { Link } from "react-router-dom";
import Meetkumar from "../../../public/images/adminprofile/adminimage.jpg";
import Dhruv from "../../../public/images/adminprofile/dhruv.jpg";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Header from "../Components/Common/Heading/Header";

const AboutUs = () => {
  return (
    <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>
      <Header />
      <div className="md:my-12">
        <section className="text-gray-600 body-font">
          <div className="px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-3xl font-medium title-font my-1 text-white">
                OUR TEAM
              </h1>
            </div>
            <div className="flex flex-wrap justify-center -mt-12">
              <div className="p-4 bg-[#c5c5c5bd] md:mx-6 md:w-[40%] my-3 rounded-md shadow-lg shadow-[#6a7185] ">
                <div className="h-full flex flex-col items-center text-center">
                  <div className="max-[360px]:w-40 max-[360px]:h-40 w-60 h-60 lg:w-80 lg:h-80 md:w-60 md:h-60 rounded-full overflow-hidden mb-4 ring-1 ring-gray-600">
                    <img
                      alt="team"
                      className="w-full h-full object-cover object-center backdrop-blur-lg"
                      src={Meetkumar}
                    />
                  </div>
                  <div className="w-[70%] ">
                    <h2 className="title-font font-medium text-2xl md:text-xl lg:text-2xl text-gray-900">
                      Virani Meetkumar
                    </h2>
                    <h3 className="text-gray-800 font-semibold mb-3">
                      Software Developer
                    </h3>
                    <p className="mb-4 text-gray-900 text-md ">
                      {/* Specialist (1520) @Codeforces | Ex - SDE Intern @Trakky | 4
                      star @Codechef (1813) | React Js | Java | Spring Boot | C++ */}
                      Top 4.2% of Leetcoders | 4 star @Hackerrank (Problem 
                      Solving) |  React Js | Java | Spring Boot | C++
                    </p>
                    <span className="inline-flex mt-4">
                      <Link
                        to="https://www.linkedin.com/in/meet-virani-616671238/"
                        className="ml-2 text-blue-800 text-3xl"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </Link>
                      <Link
                        to="https://github.com/viranimeet/"
                        className="ml-2 text-black text-3xl"
                        target="_blank"
                      >
                        <FaGithub />
                      </Link>
                      <a
                        href="mailto:viranimeetkumar@gmail.com"
                        className="ml-2 text-red-700 text-3xl"
                        target="_blank"
                      >
                        <SiGmail />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#c5c5c5bd] md:mx-6 md:w-[40%] my-3 rounded-md shadow-lg shadow-[#6a7185] ">
                <div className="h-full flex flex-col items-center text-center">
                  <div className="max-[360px]:w-40 max-[360px]:h-40 w-60 h-60 lg:w-80 lg:h-80 md:w-60 md:h-60 rounded-full overflow-hidden mb-4 ring-1 ring-gray-600">
                    <img
                      alt="team"
                      className="w-full h-full object-cover object-center backdrop-blur-lg"
                      src={Dhruv}
                    />
                  </div>
                  <div className="w-[70%]">
                    <h2 className="title-font font-medium text-2xl md:text-xl lg:text-2xl text-gray-900">
                      Dhruv Vala
                    </h2>
                    <h3 className="text-gray-800 font-semibold mb-3">
                      Software Developer
                    </h3>
                    <p className="mb-4 text-gray-900 text-md">
                      4 star @Hackerrank (C++) | 5 star @Hackerrank (Problem
                      Solving) | Python | React Js | Java | Spring Boot | C++
                    </p>
                    <span className="inline-flex mt-4">
                      <Link
                        to="https://www.linkedin.com/in/dhruv-vala-44526224a/"
                        className="ml-2 text-blue-800 text-3xl"
                        target="_blank"
                      >
                        <FaLinkedin />
                      </Link>
                      <Link
                        to="https://github.com/dhruvvala2003/"
                        className="ml-2 text-black text-3xl"
                        target="_blank"
                      >
                        <FaGithub />
                      </Link>
                      <a
                        href="mailto:dkvala2003@gmail.com"
                        className="ml-2 text-red-700 text-3xl"
                        target="_blank"
                      >
                        <SiGmail />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;