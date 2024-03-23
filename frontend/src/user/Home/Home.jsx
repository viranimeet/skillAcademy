
// import React from "react";

// import Header from "../Components/Common/Heading/Header";
// import Home11 from "../Components/home/Home11";
// import About from "../Components/about/About";
// import HAbout from "../Components/home/HAbout";
// import CompanyLogo from "../PageContainer/CompanyLogo";
// import Footer from "../PageContainer/Footer";
// import CourseHome from "../allCourses/CourseHome";


// const Home = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0">
//         <Header />
        
//         <Home11 />

        

//         <div className="about-page mt-vh-75">
//           <About />
//           <hr />
//         </div>

//         <div className="company-img mt-4">
//           <CompanyLogo />
//           <hr />
//         </div>

//         <div className="coursehome-style flex justify-center items-center flex-col mt-8">
//           <div className="coursehome-header">
//             <h3 className="text-center text-teal-500 text-2xl">COURSES</h3>
//             <h1 className="text-center text-2xl font-bold">Browse Our Online Courses</h1>
//           </div>
//           <CourseHome />
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;


import React from "react";
import Header from "../Components/Common/Heading/Header";
import Home11 from "../Components/home/Home11";
import About from "../Components/about/About";
import CompanyLogo from "../PageContainer/CompanyLogo";
import Footer from "../PageContainer/Footer";
import CourseHome from "../allCourses/CourseHome";
import Alert from "../PageContainer/Alert";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0">
        <Header />

        <Home11 />

        <div className="about-page mt-vh-75 bg-gradient-to-r from-sky-900 via-teal-300 to-sky-700 w-screen font-medium">
          <About />
          <hr />
        </div>

        <div className="company-img bg-emerald-50 from-sky-900 via-teal-700 to-sky-900 w-screen font-medium">
          <CompanyLogo />
          <hr />
        </div>

        <div className="coursehome-style flex justify-center items-center flex-col mt-8">
          <div className="coursehome-header">
            <h3 className="text-center text-teal-500 text-2xl">COURSES</h3>
            <h1 className="text-center text-2xl font-bold mb-10">Browse Our Online Courses</h1>
          </div>
         
          <CourseHome />
          
        </div>


        <Alert />
        <Footer />

      </div>
    </>
  );
};

export default Home;