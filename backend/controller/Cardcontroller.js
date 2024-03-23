// // import express from 'express';
// // import CardModel from "../models/Cardmodel.js"
// // import Data from "../models/Usermodel.js"
// // import cors from 'cors';
// // // const mongoose = require("mongoose");
// // // const bcrypt = require("bcryptjs");
// // export const app = express();
// // import card from "../models/Cardmodel.js";
// // // const stripe = require("stripe")(process.env.sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K);
// // // const stripe = require("stripe")("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");
// // import stripe from "stripe";

// // const stripeInstance = stripe("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");



// // app.use(express.json());
// // app.use(cors());

// // const addcourse = async (req, res) => {
// //     const { coursename, coursediscription, mentorname, courseprice, courseimage } = req.body;


// //     try {
// //         console.log(req.body)
// //         const data = new CardModel();
// //         data.cousename = req.body.coursename;
// //         data.cousediscription = req.body.coursediscription;
// //         data.mentorname = req.body.mentorname;
// //         data.couseprice = req.body.courseprice;
// //         data.corseimage = req.body.couseimage;
// //         data.save();
// //         const data1 = { 'flag': null };
// //         res.send(data1);
// //     }
// //     catch (error) {
// //         console.log(error);
// //     }

// // }


// // const getCard = async (req, res) => {
// //     try {
// //         const cards = await CardModel.find({});
// //         res.status(200).json(cards);
// //     } catch (error) {
// //         console.error("Error getting cards:", error);
// //         res.status(500).json({ error: "Internal Server Error" });
// //     }
// // };

// // const doPayment = async (req, res) => {
// //     try {
// //         console.log("enter to try block....");
// //         const { carddatas, user } = req.body;
        
// //         const lineItems = [
// //             {
// //                 price_data: {
// //                     currency: "inr",
// //                     product_data: {
// //                         name: carddatas.cousename,
// //                         // images: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //                     },
// //                     unit_amount: carddatas.couseprice * 100,
// //                 },
// //                 quantity: 1,
// //             }
// //         ];


// //         const session = await stripeInstance.checkout.sessions.create({
// //             payment_method_types: ["card"],
// //             billing_address_collection: 'required',
// //             line_items: lineItems,
// //             mode: "payment",
// //             success_url: "http://localhost:5173/yourcourses",
// //             cancel_url: "http://localhost:5173/home",
// //         });
        
// //         let userdata = await Data.findById(user._id)
// //         userdata.subscripted_course.push(carddatas._id)
// //         await userdata.save()

// //         res.json({ id: session.id });
// //     } catch (error) {
// //         console.log("not payment enter to catch block");
// //         console.error("Error creating checkout session:", error);
// //         res.status(500).json({ error: "Internal Server Error" });
// //     }
// // };



     


// // const Cardcontroller = {
// //     getCard,
// //     addcourse,
// //     doPayment,
// // };

// // export default Cardcontroller;


// // ===============================================

// import express from 'express';
// import CardModel from "../models/Cardmodel.js"
// import Data from "../models/Usermodel.js"
// import cors from 'cors';

// import UserModel from "../models/Usermodel.js"
// import certificate from '../models/Certificatemodel.js';
// // const mongoose = require("mongoose");
// // const bcrypt = require("bcryptjs");
// export const app = express();
// // const stripe = require("stripe")(process.env.sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K);
// // const stripe = require("stripe")("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");
// import stripe from "stripe";

// import { sendEmailToUsers } from "../controller/SendEmailToUserscontroller.js";

// //for course..
// import {emalIdForCourse} from './Logincontroller.js';

// // for courseBuy by user ....



// const stripeInstance = stripe("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");

// //for certificate...

// import { PDFDocument } from 'pdf-lib';
// import {readFile,writeFile} from 'fs/promises';


// app.use(express.json());
// app.use(cors());



// export const addcourse = async (req, res) => {
//     const { coursename, coursediscription, mentorname, courseprice, couseimage, courseUrls } = req.body;
//     console.log("course url==="+courseUrls)     
//     console.log("request body===========",req.body);
    
//     try {
//         console.log("eneter to addcouses try block");
//         const data = new CardModel({
//             coursename,
//             coursediscription,
//             mentorname,
//             courseprice,
//             couseimage,
//             courseUrls, // Assign the array of URLs directly to the courseUrls field
//         });
//         await data.save();
//         await sendEmailToUsers(`New ${coursename} Course Added`, coursediscription);
//         const data1 = { 'flag': null };
//         res.send({ "mes":"sucessfull"});
//     } catch (error) {
//         console.log("eneter to addcouses catch block");
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

// //======================Ckeck as Seen Urls===========================

// const chackUrl=async(req,res)=>{

//     // console.log("req=",req.body)

//     // const userEmailId=req.body.userEmailId;
//     // const coursObjId=req.body.coursObjId;
//     // const videoObjUrl=req.body.videoObjUrl;

    
    

//     // const userCertiDetails = await certificate.find({userEmail:userEmailId});
//     // console.log(userCertiDetails);


//     // console.log("perticuler course =",userCertiDetails.courseDetails);

//     // [userCertiDetails.courseDetails].map(cid=>{

//     //     if(cid._id === coursObjId)
//     //     {
//     //         console.log("oneCourseUrl= ",cid.courseUrls);

//     //         [cid.courseUrls].map(vid=>{

//     //             if(vid.videoUrls===videoObjUrl)
//     //             {
//     //                 // return vid.isComplited=true;
//     //                 return {...vid,isComplited:true};


//     //             }
//     //             else{
//     //                 return vid;

//     //             }
//     //         })
            
//     //     }
//     //     else{
//     //         return cid;
//     //     }
//     // })


//     // const hh= await userCertiDetails.save();
//     // console.log("is chamhe? ",hh)



//     //=============================================================================================================



//     // const { userEmailId, coursObjId, videoObjUrl } = req.body;

//     // // Find the certificate details for the given user email
//     // const userCertiDetails = await certificate.findOne({ userEmail: userEmailId });

//     // const courseDetails = userCertiDetails.courseDetails.find(course => course._id === coursObjId);
//     // const videoDetailsIndex = courseDetails.courseUrls.findIndex(video => video.videoUrls === videoObjUrl);
//     // courseDetails.courseUrls[videoDetailsIndex].isComplited = true;

//     // // Save the updated certificate details
//     // await userCertiDetails.save();



//     // res.send({"status":"sucess"});


//     console.log("req=", req.body);

//     // const userEmailId = req.body.userEmailId;
//     const coursObjId = req.body.coursObjId;
//     const videoObjUrl = req.body.videoObjUrl;

   
//     try {
//         // Find the certificate details for the user
//         const userCertiDetails = await certificate.findOne({ userEmail:emalIdForCourse  });
//         if (!userCertiDetails) {
//             return res.status(404).json({ message: 'Certificate details not found' });
//         }

//         // Find the specific course details
//         const courseDetails = userCertiDetails.courseDetails.find(course => course._id === coursObjId);
//         if (!courseDetails) {
//             return res.status(404).json({ message: 'Course details not found' });
//         }

//         // Find the specific video details
//         const videoDetails = courseDetails.courseUrls.find(video => video.videoUrls === videoObjUrl);
//         if (!videoDetails) {
//             return res.status(404).json({ message: 'Video details not found' });
//         }

//         // Update the completion status of the video
//         videoDetails.isComplited = true;

//         // Save the updated certificate details
//         const updatedOneCourse= await userCertiDetails.save();

//         // console.log("updated course =", updatedOneCourse);

//         const userCertiDetails1 = await certificate.findOne({ userEmail:updatedOneCourse.userEmail  });
      

//         // Find the specific course details
//         const courseDetails1 = userCertiDetails1.courseDetails.find(course => course._id === coursObjId);
        

//         // Find the specific video details
//         const videoDetails1 = courseDetails1.courseUrls;

        
        
//         return res.status(200).json({ curls: videoDetails1 });
//     } catch (error) {
//         console.error('Error:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }

// }


// //==================certificate==================

// const getCerti=async(req,res)=>{



//     const {uname,cid}=req.body;
//     console.log(uname,cid);

//     const card = await CardModel.find({_id:cid});
    
//     console.log(card[0].coursename)
//     const courseNmae=card[0].coursename;

//     createPdf("controller/pdf/certificate1.pdf",`${uname}'s Certificate.pdf`,uname,courseNmae);
//                                                 // result.pdf

//         res.send({"msg":"sucess"})
// }

// const createPdf=async(input,output,uname,courseNmae)=>{

//     try{
//             const pdfDoc=await PDFDocument.load(await readFile(input))
//             console.log(pdfDoc);

//             let fileName=pdfDoc.getForm().getFields()
//         console.log(fileName)

//         fileName=fileName.map((f)=>f.getName())
        
//         const form=pdfDoc.getForm()

//         console.log(uname)
//         console.log(courseNmae)
//         form.getTextField(fileName[0]).setText(uname)
//         form.getTextField(fileName[1]).setText(courseNmae)
//         const pdfBytes=await pdfDoc.save()
//         await writeFile(output,pdfBytes)

        
//     }
//     catch(e){

//             console.log("error=",e);
//     }
// }


// //=======================================


// const getCard = async (req, res) => {
//     try {
//         const cards = await CardModel.find({});
//         res.status(200).json(cards);
//     } catch (error) {
//         console.error("Error getting cards:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// const doPayment = async (req, res) => {
//     try {
//         console.log("enter to try block....");
//         const { carddatas, user } = req.body;
        
//         const lineItems = [
//             {
//                 price_data: {
//                     currency: "inr",
//                     product_data: {
//                         name: carddatas.coursename,
//                         // images: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//                     },
//                     unit_amount: carddatas.courseprice * 100,
//                 },
//                 quantity: 1,
//             }
//         ];


//         const session = await stripeInstance.checkout.sessions.create({
//             payment_method_types: ["card"],
//             billing_address_collection: 'required',
//             line_items: lineItems,
//             mode: "payment",
//             success_url: "http://localhost:5173/yourcourses",
//             cancel_url: "http://localhost:5173/home",
//         });
        
//         let userdata = await Data.findById(user._id)
//         userdata.subscripted_course.push(carddatas._id)
//         await userdata.save()

//         console.log(user._id);

       

//         let certiForUser= await certificate.findOne({ userId: user._id })
//             console.log(certiForUser);
//             console.log("course id= ", carddatas._id);

//             const temp1=carddatas._id;
//             const arr=carddatas.courseUrls

//             console.log("temp1===========", temp1);

//         const temp={
//             _id:temp1,
//             couseimage:carddatas.couseimage,
//             coursename:carddatas.coursename,
//             mentorname:carddatas.mentorname,

//             courseUrls:arr.map(video_Url => ({ videoUrls:video_Url, isComplited: false }))
//         }
        
//         const courseUrlsArray = certiForUser.courseDetails.map(course => course.courseUrls).flat();
//         console.log(courseUrlsArray);

//         console.log("certiForUser.courseUrls= ", certiForUser.courseDetails);

//         certiForUser.courseDetails.push(temp);
//         const xyz=await certiForUser.save();

    
//         console.log("&&&&&&&&&&&&&&&&&&&")
//             console.log(xyz);

//         console.log("&&&&&&&&&&&&&&&&")

//         res.json({ id: session.id });
//     } catch (error) {
//         console.log("not payment enter to catch block");
//         console.error("Error creating checkout session:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


// // =-=============================

// const getCourseUrl=async(req,res)=>{

//     try {
        

//         console.log(emalIdForCourse);

//         // const user = await UserModel.findOne({ email:emalIdForCourse });
//         //  console.log(" user found :"  ,user)

//         // var tmpp="21ituos033@ddu.ac.in";
//         const user = await certificate.findOne({ userEmail:emalIdForCourse});
//         //  console.log(" user found :"  ,user)

      
       
//         // const subscripted_course_IdArr=user.subscripted_course;
//         // console.log("course id : ", subscripted_course_IdArr);

//         const subscripted_course_IdArr=user.courseDetails;
//         // console.log("course id : ", subscripted_course_IdArr);



//         // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//           // Fetch the details of the subscribed courses whose ids are in subscribedCourseIds array
//           //const subscribedCourses = await CardModel.find({ _id: { $in: subscripted_course_IdArr } });

//              // Fetch the details of all courses whose ids are in subscribedCourseIds array
//         // const subscribedCourses = await Promise.all(subscripted_course_IdArr.map(async courseId => {
//         //     try {
//         //         const course = await CardModel.findById(courseId);
//         //         return course;
//         //     } catch (error) {
//         //         console.error(`Error fetching course with id ${courseId}:`, error);
//         //         return null; // If the course is not found, return null
//         //     }
//         // }));


        

//         // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//         if(subscripted_course_IdArr.length==0)
//         {
//             res.send([]);
                

            

//         }
//         else{
            
//             console.log("***********************************************************")
//             // console.log("all course card res: " ,AllCoursesCardResponce);
//             // console.log("whoho  i find this : " ,subscribedCourses);
//             console.log("***********************************************************")
            
//             // console.log("length1= " ,subscribedCourses.length)
//             console.log("length2= " ,subscripted_course_IdArr.length)
        
     
//     //     res.send({"coursename":"dhruv",
//     //     "coursediscription":"dhruv",
//     //     "mentorname":"dhruv",
//     //     "couseimage":"dhruv",
//     //     "couseUrls":"dhruv",

//     // });
    
//     console.log()
//     // res.send(subscribedCourses)
//             res.send(subscripted_course_IdArr);

//         }
            


//     }
//     catch(e){
//         console.log(e);

//     }



// }
     
// // for deleleteting.. course admin side...


// const deleteCourse = async (req, res) => {
//     const courseId = req.params.id;

//   try {
//     // Find the course by ID
//     const course = await CardModel.findById(courseId);
    
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     // Delete the course
//     await course.deleteOne();

//     return res.status(200).json({ message: 'Course deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting course:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// };




// const Cardcontroller = {
//     getCard,
//     addcourse,
//     doPayment,
//     getCourseUrl,
//     deleteCourse,
//     chackUrl,
//     getCerti,
// };

// export default Cardcontroller;

import express from 'express';
import CardModel from "../models/Cardmodel.js"
import Data from "../models/Usermodel.js"
import cors from 'cors';

import UserModel from "../models/Usermodel.js"
import certificate from '../models/Certificatemodel.js';
export const app = express();

import stripe from "stripe";

import { sendEmailToUsers } from "../controller/SendEmailToUserscontroller.js";

//for course..
import { emalIdForCourse } from './Logincontroller.js';
const stripeInstance = stripe("sk_test_51OchNgSFA7o5v3rGzE68rauD2QUHGwc3AWnMp5Zip64GC97GFbubAC2valZI89HTZyIVk78DP1euCwnz8jeoqozK00pXK6aC8K");

//for certificate...

import { PDFDocument } from 'pdf-lib';
import { readFile, writeFile } from 'fs/promises';


app.use(express.json());
app.use(cors());



export const addcourse = async (req, res) => {
    const { coursename, coursediscription, mentorname, courseprice, couseimage, courseUrls } = req.body;
    console.log("course url===" + courseUrls)
    console.log("request body===========", req.body);

    try {
        console.log("eneter to addcouses try block");
        const data = new CardModel({
            coursename,
            coursediscription,
            mentorname,
            courseprice,
            couseimage,
            courseUrls,
        });
        await data.save();
        await sendEmailToUsers(`New ${coursename} Course Added`, coursediscription);
        const data1 = { 'flag': null };
        res.send({ "mes": "sucessfull" });
    } catch (error) {
        console.log("eneter to addcouses catch block");
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//======================Ckeck as Seen Urls===========================

const chackUrl = async (req, res) => {


    console.log("req=", req.body);
    const coursObjId = req.body.coursObjId;
    const videoObjUrl = req.body.videoObjUrl;


    try {
        console.log("inside try block")
        // Find the certificate details for the user
        const userCertiDetails = await certificate.findOne({ userEmail: emalIdForCourse });
        if (!userCertiDetails) {
            return res.status(404).json({ message: 'Certificate details not found' });
        }
        console.log("userdetails " + userCertiDetails);
        // Find the specific course details
        const courseDetails = userCertiDetails.courseDetails.find(course => course._id === coursObjId);
        if (!courseDetails) {
            return res.status(404).json({ message: 'Course details not found' });
        }
        console.log("coursedetails  :  " + courseDetails)
        // Find the specific video details
        const videoDetails = courseDetails.courseUrls.find(video => video.videoUrls === videoObjUrl);
        if (!videoDetails) {
            return res.status(404).json({ message: 'Video details not found' });
        }
        console.log("viedodetails :  ", videoDetails)
        videoDetails.isComplited = true;
        const updatedOneCourse = await userCertiDetails.save();
        const userCertiDetails1 = await certificate.findOne({ userEmail: updatedOneCourse.userEmail });
        const courseDetails1 = userCertiDetails1.courseDetails.find(course => course._id === coursObjId);
        const videoDetails1 = courseDetails1.courseUrls;



        return res.status(200).json({ curls: videoDetails1 });
    } catch (error) {
        console.log("inside catch block")
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}


//==================certificate==================

const getCerti = async (req, res) => {



    const { uname, cid } = req.body;
    console.log(uname, cid);

    const card = await CardModel.find({ _id: cid });

    console.log(card[0].coursename)
    const courseNmae = card[0].coursename;      

    createPdf("controller/pdf/certificate1.pdf", `${uname}'s Certificate.pdf`, uname, courseNmae);
    // result.pdf

    res.send({ "msg": "sucess" })
}

const createPdf = async (input, output, uname, courseNmae) => {

    try {
        const pdfDoc = await PDFDocument.load(await readFile(input))
        console.log(pdfDoc);

        let fileName = pdfDoc.getForm().getFields()
        console.log(fileName)

        fileName = fileName.map((f) => f.getName())

        const form = pdfDoc.getForm()

        console.log(uname)
        console.log(courseNmae)
        form.getTextField(fileName[0]).setText(uname)
        form.getTextField(fileName[1]).setText(courseNmae)
        const pdfBytes = await pdfDoc.save()
        await writeFile(output, pdfBytes)


    }
    catch (e) {

        console.log("error=", e);
    }
}


//=======================================


const getCard = async (req, res) => {
    try {
        const cards = await CardModel.find({});
        res.status(200).json(cards);
    } catch (error) {
        console.error("Error getting cards:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const doPayment = async (req, res) => {
    try {
        console.log("enter to try block....");
        const { carddatas, user, } = req.body;

        const lineItems = [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: carddatas.coursename,
                        // images: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    },
                    unit_amount: carddatas.courseprice * 100,
                },
                quantity: 1,
            }
        ];


        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ["card"],
            billing_address_collection: 'required',
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/yourcourses",
            cancel_url: "http://localhost:5173/home",
        });

        let userdata = await Data.findById(user._id)
        userdata.subscripted_course.push(carddatas._id)
        await userdata.save()

        console.log("user id" + user._id);
        //================================
        // const course = await CardModel.findById(carddatas._id);

        // if (!course) {
        //     return res.status(404).json({ error: 'Course not found.' });
        // }

        // // Increment the purchase count
        // course.purchaseCount += 1;

        // // Save the updated course
        // await course.save();
        //==============================
        const course = await CardModel.findById(carddatas._id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found.' });
        }
        course.purchaseCount += 1;
        await course.save();
        //============================================
        let certiForUser = await certificate.findOne({ userId: user._id })
        if (!certiForUser) {
            console.log("Certificate not found for user");
            return res.status(404).json({ error: "Certificate not found for user" });
        }

        // Add a null check before accessing courseDetails property
        if (certiForUser.courseDetails === null) {
            console.log("Course details not found for user");
            return res.status(404).json({ error: "Course details not found for user" });
        }
        console.log(certiForUser);
        console.log("course id= ", carddatas._id);

        const temp1 = carddatas._id;
        const arr = carddatas.courseUrls

        console.log("temp1===========", temp1);

        const temp = {
            _id: temp1,
            couseimage: carddatas.couseimage,
            coursename: carddatas.coursename,
            mentorname: carddatas.mentorname,

            courseUrls: arr.map(video_Url => ({ videoUrls: video_Url, isComplited: false }))
        }

        const courseUrlsArray = certiForUser.courseDetails.map(course => course.courseUrls).flat();
        console.log(courseUrlsArray);

        console.log("certiForUser.courseUrls= ", certiForUser.courseDetails);

        certiForUser.courseDetails.push(temp);
        const xyz = await certiForUser.save();


        console.log("&&&&&&&&&&&&&&&&&&&")
        console.log(xyz);

        console.log("&&&&&&&&&&&&&&&&")

        res.json({ id: session.id });
    } catch (error) {
        console.log("not payment enter to catch block");
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// =-=============================

const getCourseUrl = async (req, res) => {

    try {


        console.log(emalIdForCourse);
        const user = await certificate.findOne({ userEmail: emalIdForCourse });
        const subscripted_course_IdArr = user.courseDetails;
        console.log("course id : ", subscripted_course_IdArr);
        if (subscripted_course_IdArr.length == 0) {
            res.send([]);
        }
        else {
            console.log("*")
            console.log("*")
            console.log("length2= ", subscripted_course_IdArr.length)
            console.log()
            res.send(subscripted_course_IdArr);

        }



    }
    catch (e) {
        console.log(e);

    }



}

const deleteCourse = async (req, res) => {
    const courseId = req.params.id;

    try {

        const course = await CardModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        await course.deleteOne();
        return res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


const purchasecount = async (req, res) => {
    try {
        // Retrieve all card data along with purchase count
        const cardDataWithPurchaseCount = await CardModel.find({});
        // console.log(cardDataWithPurchaseCount);
        // Send the data as response
        res.status(200).json(cardDataWithPurchaseCount);
    } catch (error) {
        console.error('Error fetching card data with purchase count:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const Cardcontroller = {
    getCard,
    addcourse,
    doPayment,
    getCourseUrl,
    deleteCourse,
    chackUrl,
    getCerti,
    purchasecount,
};

export default Cardcontroller;