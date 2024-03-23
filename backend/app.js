// // import express from 'express';
// // // import connectDB = require('./config/db.js');
// // import connectDB from './config/db.js';
// // import cors from "cors";


// // // const { initialize, putObject } = require('./S3.jsx');
// // connectDB();

// // export const app = express();
// // app.use(express.json({ limit: '10mb' }));
// // app.use(express.urlencoded({ limit: '10mb', extended: true }));

// // const corsOptions ={
// //     origin:'http://localhost:5173', 
// //     credentials:true,            //access-control-allow-credentials:true
// //     optionSuccessStatus:200,
// // }

// // app.use(cors(corsOptions));

// // import formRoute from './routes/formRoute.js';
// // app.use("/", formRoute);


// // import cardRoutes from './routes/cardRoute.js';

// // // import bodyParser from 'body-parser';
// // app.use("/card", cardRoutes);

// // //import purchaseRoute from "./routes/purchaseRoute.js"

// // // for multipleimg////////////////////

// // app.post("/api/upload", async (req, res) => {
// //     try {
// //         const filesArray = req.body.files; // Accessing filesArray from the request body
// //         console.log("Received files:", filesArray);

// //         // Array to store URLs for each uploaded image
// //         const urls = [];

// //         // Upload each image and store the URLs
// //         for (const { filename, contentType } of filesArray) {
// //             console.log("Uploading file:", filename);
// //             const url = await putObject(filename, contentType);
// //             console.log("Uploaded successfully:", url);

// //             // Construct object URL based on the uploaded filename
// //             const objectUrl = `https://framefusion-art.s3.ap-south-1.amazonaws.com//uploads/user-uploads/${encodeURIComponent(filename)}`;

// //             // Push the URL and object URL to the array
// //             urls.push({ url, objectUrl });
// //         }

// //         // Send the URLs as a response
// //         res.json({ urls });
// //         console.log("Uploaded URLs:", urls);
        
// //     } catch (error) {
// //         console.error("Error occurred during file upload:", error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });

// // app.listen(8080, (err) => {
// //     // console.log(err);
// // })





// // =============================================================

// import express from 'express';
// import connectDB from './config/db.js';
// import cors from "cors";
// import formRoute from './routes/formRoute.js';
// import cardRoutes from './routes/cardRoute.js';
// connectDB();

// export const app = express();
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// import bodyParser from 'body-parser';
// app.use(bodyParser.json());


// const corsOptions = {
//     origin: 'http://localhost:5173',
//     credentials: true,      
//     optionSuccessStatus: 200,
// }

// import { addcourse } from '../backend/controller/Cardcontroller.js';

// app.post('/courses', addcourse);

// app.use(cors(corsOptions));

// app.use("/", formRoute);
// app.use("/card", cardRoutes);
// // app.use("/video",videourlRoute);

// // app.use('/course', yourCoursesRoutes);


// import { initialize, putObject } from  './S3.mjs'
// // const { initialize, putObject } = require('./S3.jsx');
// app.post("/api/upload", async (req, res) => {
//     try {
//         const filesArray = req.body.files;
//         console.log("Received files:", filesArray);
//         const urls = [];
//         for (const { filename, contentType } of filesArray) {
//             console.log("Uploading file:", filename);
//             const url = await putObject(filename, contentType);
//             console.log("Uploaded successfully:", url);


//             const objectUrl = `https://vala-dhruv-123.s3.ap-south-1.amazonaws.com//uploads/user-uploads/${encodeURIComponent(filename)}`;


//             urls.push({ url, objectUrl });
//         }
//         console.log("Uploaded URLs:", urls);
//         res.json( {urls});


//     } catch (error) {
//         console.error("Error occurred during file upload:", error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// const PORT = 8080;
// app.listen(PORT, (err) => {
//     if (err) {
//         console.error("Error occurred while starting the server:", err);
//     } else {
//         console.log(`Server is running on port ${PORT}`);
//     }
// });


import express from 'express';
import connectDB from './config/db.js';
import cors from "cors";
import formRoute from './routes/formRoute.js';
import cardRoutes from './routes/cardRoute.js';
connectDB();

export const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

import bodyParser from 'body-parser';
app.use(bodyParser.json());


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200,
}

import { addcourse } from '../backend/controller/Cardcontroller.js';

app.post('/courses', addcourse);

app.use(cors(corsOptions));

app.use("/", formRoute);
app.use("/card", cardRoutes);

app.use("/user", formRoute);

import { initialize, putObject } from './S3.mjs'
app.post("/api/upload", async (req, res) => {
    try {
        const filesArray = req.body.files;
        console.log("Received files:", filesArray);
        const urls = [];
        for (const { filename, contentType } of filesArray) {
            console.log("Uploading file:", filename);
            const url = await putObject(filename, contentType);
            console.log("Uploaded successfully:", url);


            const objectUrl = `https://vala-dhruv-123.s3.ap-south-1.amazonaws.com//uploads/user-uploads/${encodeURIComponent(filename)}`;


            urls.push({ url, objectUrl });
        }
        console.log("Uploaded URLs:", urls);
        res.json({ urls });


    } catch (error) {
        console.error("Error occurred during file upload:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


const PORT = 8080;
app.listen(PORT, (err) => {
    if (err) {
        console.error("Error occurred while starting the server:", err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});