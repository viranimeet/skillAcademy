import React, { useState } from 'react';
import './SignupCss.css';

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Head from '../../user/Components/Common/Heading/Head';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';


const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        pwd: '',
        conpwd: '',
    });
    const [mes, setMes] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        axios
            .post("http://localhost:8080/registration", formData)
            .then((response) => {
                // console.log(response.data.mes);
                setMes(response.data.mes);
                toast.success("Sucessfully Sign-Up")
                

                if (response.data.flag === null) {
                    navigate("/");
                }
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    



    return (
        <section className="h-screen bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900">
        <Head/>
            <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen flex font-medium items-center justify-center">
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div
                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image" />
                    </div>

                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 text-white">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="mb-0 mr-4 text-lg">Sign up with : </p>
                                
                                {/* <GoogleOAuthProvider clientId="288931065809-3cg540n2q6ketuphi1eradtr5fqf0ld4.apps.googleusercontent.com">
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            const details = jwt_decode(credentialResponse.credential);
                                            console.log(details);
                                            console.log(credentialResponse);
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}

                                    />
                                </GoogleOAuthProvider> */}
                                
                            </div>

                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-950 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-950">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-black">
                                    Or
                                </p>
                            </div>

                            <div className=" signup-email relative mb-6" data-te-input-wrapper-init>
                                Email address
                                <input
                                    type="text"
                                    name="email"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary">
                                
                                </label>
                            </div>

                            <div className="signup-name relative mb-6" data-te-input-wrapper-init>
                                User Name
                                <input
                                    type="text"
                                    name="uname"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary">
                               
                                </label>
                            </div>

                            <div className="signup-pass relative mb-6" data-te-input-wrapper-init>
                                Password
                                <input
                                    type="password"
                                    name="pwd"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput22"
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label

                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>

                            <div className="signup-con-pass relative mb-6" data-te-input-wrapper-init>
                                Confirm Password
                                <input
                                    type="password"
                                    name="conpwd"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-950 dark:placeholder:text-neutral-950 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput222"
                                    placeholder="Confirm Password"
                                    onChange={handleInputChange}
                                    required
                                />
                                <label
                                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary"
                                >
                                </label>
                            </div>


                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block rounded bg-blue-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    SignUp
                                </button>

                                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                    Already have an account?
                                    <Link to="/" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;