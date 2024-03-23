// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import SideBar from "../components/SideBar";

// const CoursesPage = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/card/get");
//                 console.log("Fetched data:", response.data);
//                 setCourses(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//                 setError("Error fetching data. Please try again.");
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             window.alert("Are you sure want to delete ");
//             const response = await axios.delete(`http://localhost:8080/card/${id}`);
//             if (response.status === 200) {
//                 setCourses(courses.filter(course => course._id !== id));
//                 console.log("Course deleted successfully...");
//             }
//         } catch (error) {
//             console.error('Error deleting course:', error);
//         }
//     };

//     return (
//         <>
//             <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0 overflow-x-hidden">
//             <SideBar />
//                 <div className="ml-60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mr-20">
//                     {loading ? (
//                         <div className="flex justify-center items-start min-h-screen mt-20">
//                             <svg className="animate-spin h-10 w-10 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.472v3.728a4.002 4.002 0 00-4 4l.001.091H6zm1 6.207A8.003 8.003 0 014.472 12H.745a11.97 11.97 0 004.031 8.285l.678-.736zm12.592.74l.683.729A11.97 11.97 0 0023.255 12h-3.727a8.003 8.003 0 01-3.728 7.728zm1-6.208h3.182a4.002 4.002 0 00-3.101-5.897l-.681.729z"></path>
//                             </svg>
//                         </div>
//                     ) : error ? (
//                         <p className="text-xl font-bold text-red-500">{error}</p>
//                     ) : (
//                         courses.map((course) => (
//                             <div key={course._id} className="w-full m-8 max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105">
//                                 <img className="p-8 rounded-t-lg w-full h-40 object-cover" src={course.couseimage} alt="product image" />
//                                 <div className="px-5 pb-5">
//                                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Course : {course.coursename}</h5>
//                                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mentor : {course.mentorname}</h5>
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-3xl font-bold text-gray-900 dark:text-white">Course Price : ${course.courseprice}</span>
//                                         <button onClick={() => handleDelete(course._id)} className="text-white bg-red-700 hover:bg-red-800 btn btn-danger focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-900 dark:focus:ring-blue-800">
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default CoursesPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from "../components/SideBar";
import Head from '../../user/Components/Common/Heading/Head';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/card/get");
                console.log("Fetched data:", response.data);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data. Please try again.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            window.alert("Are you sure want to delete ");
            const response = await axios.delete(`http://localhost:8080/card/${id}`);
            if (response.status === 200) {
                setCourses(courses.filter(course => course._id !== id));
                console.log("Course deleted successfully...");
            }
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <>
            <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen w-screen'>
                <div className='top-0 ml-56'>
                    <Head />
                </div>
                <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium inset-x-0 overflow-x-hidden">
                    <SideBar />
                    <div className="ml-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-8 mr-20">
                        {loading ? (
                            <div className="flex justify-center items-start min-h-screen mt-20">
                                <svg className="animate-spin h-10 w-10 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.472v3.728a4.002 4.002 0 00-4 4l.001.091H6zm1 6.207A8.003 8.003 0 014.472 12H.745a11.97 11.97 0 004.031 8.285l.678-.736zm12.592.74l.683.729A11.97 11.97 0 0023.255 12h-3.727a8.003 8.003 0 01-3.728 7.728zm1-6.208h3.182a4.002 4.002 0 00-3.101-5.897l-.681.729z"></path>
                                </svg>
                            </div>
                        ) : error ? (
                            <p className="text-xl font-bold text-red-500">{error}</p>
                        ) : (
                            courses.map((course) => (
                                <div key={course._id} className="m-8 max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 transform hover:scale-105">
                                    <img className="p-8 rounded-t-lg w-full h-40 object-cover" src={course.couseimage} alt="product image" />
                                    <div className="px-5 pb-5">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Course : {course.coursename}</h5>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Mentor : {course.mentorname}</h5>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">Course Price : ${course.courseprice}</span>
                                            <button onClick={() => handleDelete(course._id)} className="text-white bg-red-700 hover:bg-red-800 btn btn-danger focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-900 dark:focus:ring-blue-800">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesPage;

