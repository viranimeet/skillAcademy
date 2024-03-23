// import SideBar from '../components/SideBar'
// import React from 'react'

// const Admin = () => {
//     return (
//         <>
//             <div>
//                 <SideBar></SideBar>
//             </div>

//             <div style={{ fontFamily: 'Montserrat' }} className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex font-medium items-center justify-center">
//                 <section className="w-6/12 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg  bg-black bg-opacity-50 backdrop-blur-lg">
//                     <div className="text-white text-center">
//                         <h1 className="text-4xl font-bold mb-4">Welcome, Admin!</h1>
                       
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <span className="text-gray-400 text-sm">admin profile</span>
//                         <span className="text-emerald-400">
                          
//                         </span>
//                     </div>
//                     <div className="mt-6 w-fit mx-auto">
//                         <img src="./images/adminprofile/adminimage.jpg" className="rounded-full w-52" alt="profile picture" />
//                     </div>

//                     <div className="mt-8 ">
//                         <h2 className="text-white font-bold text-2xl tracking-wide">Virani <br /> Meetkumar</h2>
//                     </div>
//                     <p className="text-emerald-400 font-semibold mt-2.5" >
//                         Active
//                     </p>

//                     <div className="h-1 w-full bg-black mt-8 rounded-full">
//                         <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
//                     </div>
//                     <div className="mt-3 text-white text-sm">
//                         <span className="text-gray-400 font-semibold">Storage:</span>
//                         <span>40%</span>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// export default Admin


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from '../../user/Components/Common/Heading/Head';
import SideBar from '../components/SideBar';
import BarChart from '../components/chart/BarChart';
import UserCoursesChart from '../components/chart/UserCoursesChart';

const Admin = () => {
    const [coursePurchaseData, setCoursePurchaseData] = useState([]);
    console.log("inside admin function");
    useEffect(() => {
        console.log("inside useeffect od admin.jsx");
        const fetchCoursePurchaseData = async () => {
            try {
                console.log("inside try block of admin.jsx")
                const response = await axios.get('http://localhost:8080/card/purchase-data');
                console.log("purchase data", response.data);

                const extractedData = response.data.map(item => ({
                    coursename: item.coursename,
                    purchaseCount: item.purchaseCount
                }));

                setCoursePurchaseData(extractedData);
            } catch (error) {
                console.log("inside catch block of admin.jsx")
                console.error('Error fetching course purchase data:', error);
            }
        };

        fetchCoursePurchaseData();
    }, []);

    return (
        <>
            <div className=' h-screen w-screen'>
                {/* <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen w-screen'> */}

                <div className='top-0 ml-56'>
                    <Head />
                </div>
                <div>
                    <SideBar />
                </div>
                <div className='ml-72 mr-8 mt-4'>
                    {/* Render the BarChart component with the course purchase data */}
                    {coursePurchaseData.length > 0 ? (
                        <BarChart chartData={coursePurchaseData} />
                    ) : (
                        <p>No data available for chart</p>
                    )}
                </div>
                <div className='ml-72 mr-8 '>
                    <UserCoursesChart/>
                </div>
                <div style={{ fontFamily: 'Montserrat' }} className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-1/4 flex font-medium items-center justify-center">
                    
                </div>
            </div>
        </>
    );
};

export default Admin;