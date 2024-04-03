import React, { useEffect, useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
import Header from "../Components/Common/Heading/Header";
import emailjs from '@emailjs/browser';
import './ContacUsCss.css'

const ContactUs = () => {

    const google_map="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3769632.614176731!2d68.00193786621098!3d22.680549388729805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sddu!5e0!3m2!1sen!2sin!4v1712137675137!5m2!1sen!2sin" ;

    useEffect(() => {
        document.title = "Contact";
    }, []);

    
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs
        .sendForm('service_eqja9if', 'template_ud8egg7', form.current, {
          publicKey: '48SKbWZjiyj4b-EV9',
        })
        .then(
          () => {
            
            toast.success("Email Send Sucessfully")
            e.target.reset();
          },
          (error) => {
            
            toast.error("Email Don't SEnd : "+ error.text)
          },
        );

     

        
    }

    return (
        <>
<div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0">
        <Header />

        <div className="contact-heading">
                    <h2>Contact Us</h2>
                </div>
            <div className="contact-section">
            
            
            <div className="contac-left">
            
                <iframe src={google_map}></iframe>

            </div>

            <div className="contac-right">
           

                <form ref={form} onSubmit={(e)=>sendEmail(e)} className="contact-form">
                    <input type="text" placeholder="Enter Full name" name="user_name" required/>
                    <input type="email" placeholder="Enter Email" name="user_email" required/>
                    <input type="text" placeholder="Enter Subject" name="subject" required/>
                    <textarea placeholder="Enter Message" name="message" cols="20" rows="2"></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

          </div>
        </div>
        </>
        
    );
};

export default ContactUs;
