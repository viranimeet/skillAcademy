import React from 'react';
import './FooterCss.css';

const Footer = () => {
    return (
        <footer className="relative bg-gray-200 pt-8 pb-6 ">
            <div className="mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
    <button className="social" type="button">
       <a href='https://www.instagram.com/skill_acadamy'> <i className="fa-brands fa-instagram icon"></i></a>
    </button>
    <button className="social" type="button">
    <a href='https://www.facebook.com/share/djG5UKzfwGPEFSTg/?mibextid=qi2Omg'>  <i className="fa-brands fa-facebook icon"></i></a>
    </button>
    <button className="social" type="button">
    <a href='https://www.youtube.com/@SkillAcadamy-os2mq'> <i className="fa-brands fa-youtube icon"></i></a>
    </button>
    
</div>


                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-700" href="/home">About Skill Academy</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-700" href="/courses">Courses</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-700" href="/aboutus">Instructors</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-700" href="/help">Help Desk</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact Us</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-500" href="#">Email: info@skillacademy.com</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-500" href="#">Phone: +1 123 456 7890</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-teal-500" href="#">Address: 123 Main Street, City, Country</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            © {new Date().getFullYear()} Skill Academy. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;