import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddCourse = () => {

    const [files, setFiles] = useState(null);
    const navigate = useNavigate();
    const initialCardData = {
        coursename: '',
        coursediscription: '',
        mentorname: '',
        courseprice: '',
        couseimage: '',
        courseUrls: [],
        
    };

    const [cardData, setCardData] = useState(initialCardData);
    const [mes, setMes] = useState("");
    const [multipleObjectUrls, setMultipleObjectUrls] = useState([]);



    const cardInputChange = (e) => {
        const { name, value } = e.target;
        setCardData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const [image, setImage] = useState('');
    const cardImageChange = async (e) => {
        const { name } = e.target;
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
            setCardData((prevData) => ({
                ...prevData,
                [name]: reader.result,
            }));
        }
    }


    const handleMultipleFileChange = async (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const onFinish = async (e) => {
        e.preventDefault();

        if (!files) {
            console.error("No files to upload");
            return;
        }

        try {
            const filesArray = files.map(file => ({
                filename: file.name,
                contentType: file.type
            }));
            const responseMultiple = await fetch('http://localhost:8080/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    files: filesArray
                }),
            });


            const responseDataMultiple = await responseMultiple.json();
            console.log('Server Response for multiple videos:', responseDataMultiple);
            const urls = responseDataMultiple.urls;
            console.log("suiiiiiiii=", urls)

            console.log("enter before for loop")

            var ar = [];

            for (let i = 0; i < urls.length; i++) {
                const { url, objectUrl } = urls[i];
                const file = files[i];

                ar.push(objectUrl)
                const uploadResponse = await fetch(url, {
                    method: 'PUT',
                    body: file,
                    headers: {
                        'Content-Type': file.type,
                    },
                });
                console.log('video uploaded successfully:', uploadResponse);
            }

            ar.reverse();
            console.log("arr=", ar)
            setMultipleObjectUrls(ar);

            console.log("multipleObjectUrls=", multipleObjectUrls)

            const cardDataWithUrls = {
                ...cardData,
                courseUrls: ar
            };

            console.log("carddata with urls=", cardDataWithUrls)

            const responseCardData = await axios.post("http://localhost:8080/card", cardDataWithUrls);
            setMes(responseCardData.data.mes);
            console.log("Course added successfully!");
            if (responseCardData.data.flag === null) {
                console.log("Success, navigate...");
                // navigate("/");
            }

            toast.success("Insert Successfully")
        }

        catch (error) {
            console.error("Error occurred:", error);
            toast.error("Fail Insert")
        }
    }
    console.log(cardData)
    return (


        <form className="max-w-sm mx-auto" onSubmit={onFinish}>
            <div className="mb-5">
                <label htmlFor="course_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                <input type="text" name="coursename" id="course_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={cardInputChange} required />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Description</label>
                <textarea id="message" name="coursediscription" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={cardInputChange} required></textarea>            </div>
            <div className="mb-5">
                <label htmlFor="mentor_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mentor Name</label>
                <input type="text" name="mentorname" id="mentor_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={cardInputChange} required />
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input type="number" name="courseprice" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={cardInputChange} required />
            </div>
            

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Thumbnail</label>
                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="couseimage" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={cardImageChange} required></input>
            </div>
            {/* aws cloud */}
            <div className='mb-5'>
                {/* <form> */}
                <input type='file' onChange={handleMultipleFileChange} multiple="multiple"></input>

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add Course</button>

        </form>

    )
}

export default AddCourse;