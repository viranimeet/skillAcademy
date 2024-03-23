// // const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// // const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// // const { fromIni } = require("@aws-sdk/credential-provider-ini");
// import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { fromIni } from "@aws-sdk/credential-provider-ini";
// // require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();

// // require("dotenv")

// const s3Client = new S3Client({
//     region:'ap-south-1',
//     Credentials:fromIni({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
//     }),

// });


// const putObject = async function (filename, ContentType)  {
    
//     const command = new PutObjectCommand({
//         Bucket: "vala-dhruv-123",
//         Key:`/uploads/user-uploads/${filename}`,
//         ContentType: ContentType,
        
//     });
//     const url=await getSignedUrl(s3Client,command);
//     console.log('####',url)
//     return url;

    
// };

// // export default putObject;

// // module.exports = {
// //     putObject: putObject,
// // };
// module.exports = {
//     initialize: async () => {
//         const filename = `image-${Date.now()}.jpeg`;
//         const contentType = "image/jpeg";
//         console.log('URL for uploading', await putObject(filename, contentType));
//     },
//     putObject: putObject,
// };
// //module.exports = putObject;
// // export default putObject;




// ============================

// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { fromIni } = require("@aws-sdk/credential-provider-ini");
import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { fromIni } from "@aws-sdk/credential-provider-ini";
import dotenv from 'dotenv';
dotenv.config();


const s3Client = new S3Client({
    region:process.env.AWS_REGION,
    Credentials:({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
    }),

});


const putObject = async function (filename, ContentType)  {
    
    const command = new PutObjectCommand({
        Bucket: "vala-dhruv-123",
        Key:`/uploads/user-uploads/${filename}`,
        ContentType:ContentType,
        
    });
    const url=await getSignedUrl(s3Client,command);
    console.log('####',url)
    return url;

    
};

async function initialize() {
    const filename = `video-${Date.now()}.mp4`; // Change the filename extension if necessary
    const contentType = "video/mp4"; // Change the content type according to your video format
    console.log('URL for uploading', await putObject(filename, contentType));
}


export { initialize, putObject };