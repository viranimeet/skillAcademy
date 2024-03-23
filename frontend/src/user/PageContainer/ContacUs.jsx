// import React, { useEffect} from "react";
// import './ContacUsCss.css';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer,toast } from 'react-toastify';
// import Footer from "./Footer";
// import Header from "../Components/Common/Heading/Header";


// const ContacUs=()=>{

//     useEffect(()=>{
//         document.title="Contact";

//     },[]);

//     const conDetails=(event)=>{

//         event.preventDefault();

//         var tmp={
//             contacname:document.getElementById("contacname").value,
//             contacemail:document.getElementById("contacemail").value,
//             contacarea:document.getElementById("contacarea").value,
//             contacsub:document.getElementById("contacsub").value
//         };


//         axios.post("http://localhost:8080/contacUs",tmp).then((response)=>{

//         toast.success("Sucessfully Send Your Responce...",{position:"top-center"});             

//         }).catch((error)=>{
//             console.log(error);
//         });

//     };

//     return (
//         <>

//         <Header/>

//         <div className="sec">
//             <div className="Contac " >
//                 <div className="Container shadow flexSB">
//                     <div className="left row">
//                     {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3681.2413481578815!2d72.87986237481459!3d22.68205772895053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704886857800!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
//                     {/* <img src="https://fanatic.co.uk/wp-content/uploads/2022/02/92812-business-presentation.gif" alt="GIF" placeholder="Contact Us"/> */}
//                     {/* <img src="https://i.gifer.com/origin/1b/1b5ffe368345a184de8328b85c8a8d2c_w200.webp " alt="GIF" placeholder="Contact Us"/> */}
//                     <img src="https://fanatic.co.uk/wp-content/uploads/2022/02/92812-business-presentation.gif " alt="GIF" placeholder="Contact Us"/>

//                     </div>

//                     <div className="right row">
//                         <h1>Contac Us</h1>
//                         {/* <p id="rightpera">Feel Free To Contac Us 😊 </p> */}

//                         <div className="item grid2">
//                             <div className="box">
//                                 <h2>ADDRESS:</h2>
//                                 <p>Near Ddu boys Hostel , dev-prem park kisan samosa- khacho vaniyavad -NADIAD</p>

//                             </div>

//                             <div className="box">
//                                 <h2>PHONE:</h2>
//                                 <p>+123 456 7890</p>

//                             </div>

//                         </div>

//                         <form action="">
//                             <div className="flexSB">
//                                 <input type="text" placeholder="Enter Name"  id="contacname"></input>
//                                 <input type="email" placeholder="Enter Enail" id="contacemail" ></input>
//                             </div>
//                             <input type="text" placeholder="Subject"  id="contacsub"></input>
//                             <textarea cols={30} rows={7} id="contacarea">
//                                 Create Message Here...
//                             </textarea>

//                             <input type="button" name="Submit"  value="Submit" onClick={conDetails}></input>
//                             <ToastContainer limit={1}></ToastContainer>

//                         </form>



//                     </div>
//                 </div>


//             </div>
//             </div>

//         </>
//     );
// };

// export default  ContacUs;


import React, { useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import Header from "../Components/Common/Heading/Header";

const ContactUs = () => {

    useEffect(() => {
        document.title = "Contact";
    }, []);

    const conDetails = (event) => {
        event.preventDefault();
        var tmp = {
            contacname: document.getElementById("contacname").value,
            contacemail: document.getElementById("contacemail").value,
            contacarea: document.getElementById("contacarea").value,
            contacsub: document.getElementById("contacsub").value
        };

        axios.post("http://localhost:8080/contactUs", tmp)
            .then((response) => {
                toast.success("Successfully Send Your Response", { position: "top-center" });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0'>
                <Header />
                <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900  flex items-center justify-center font-medium">
                    <div className="sec">
                        <div className="Contact">
                            <div className="Container shadow flexSB m-16 bg-cyan-950 relative">

                                <div className="left row">
                                    <img src="https://fanatic.co.uk/wp-content/uploads/2022/02/92812-business-presentation.gif" alt="GIF" className="w-90 h-450 rounded-8" />
                                </div>

                                <div className="right w-2/3 relative bg-cyan-900 p-8">
                                    <form className="mt-4">
                                            <section class="mb-32">
                                                <div class="flex justify-center">
                                                    <div class="text-center md:max-w-xl lg:max-w-3xl">
                                                        <h2 class="mb-12 px-6 text-3xl font-bold">Contact us</h2>
                                                    </div>
                                                </div>

                                                <div class="flex flex-wrap">
                                                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                                        <form>
                                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                                <p className="text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                                                Name</p>
                                                                <input type="text"
                                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                                    id="exampleInput90" placeholder="Name" />
                                                                
                                                            </div>
                                                            
                                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                                
                                                                <p className="text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                                                Email address</p>

                                                                <input type="email"
                                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                                    id="exampleInput91" placeholder="Email address" />
                                                            </div>
                                                            <div class="relative mb-6" data-te-input-wrapper-init>
                                                            <p className="text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                                                Message</p>
                                                                <textarea
                                                                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                                    id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>

                                                            </div>
                                                            <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                                                <input
                                                                    class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                                    type="checkbox" value="" id="exampleCheck96" checked />
                                                                <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                                                                    Send me a copy of this message
                                                                </label>
                                                            </div>
                                                            <button type="button" data-te-ripple-init data-te-ripple-color="light"
                                                                class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-950 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.9)]">
                                                                Send
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12 ">
                                                        <div class="flex flex-wrap">
                                                            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                                                <div class="flex items-start ">
                                                                    <div class="shrink-0">
                                                                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                                stroke="currentColor" class="h-6 w-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div class="ml-6 grow">
                                                                        <p class="mb-2 font-bold dark:text-white">
                                                                            Technical support
                                                                        </p>
                                                                        <p class="text-neutral-500 dark:text-neutral-200">
                                                                            support@example.com
                                                                        </p>
                                                                        <p class="text-neutral-500 dark:text-neutral-200">
                                                                            +1 234-567-89
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                
                                                            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-8/12 md:px-3 lg:px-6">
                                                                <div class=" flex">
                                                                    <div class="shrink-0">
                                                                        <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                                                stroke="currentColor" class="h-6 w-6">
                                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                                    d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div class="ml-6 grow">
                                                                        <p class="mb-2 font-bold dark:text-white">Bug report</p>
                                                                        <p class="text-neutral-500 dark:text-neutral-200">
                                                                            bugs@example.com
                                                                        </p>
                                                                        <p class="text-neutral-500 dark:text-neutral-200">
                                                                            +1 234-567-89
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        {/* </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;


