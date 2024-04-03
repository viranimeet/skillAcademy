
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Common/title/Title';
import './HomeCss.css';

const Home11 = () => {
  return (
    <>
      <section className='mainhero bg-cover w-full h-max bg-fixed' >
      <div className='hero-container mx-auto px-4'>
          <div className='left-pannel row1'>
            <Title title='WELCOME TO SKILL ACADAMY' subtitle='"Explore Your Career Options with Us" - This version suggests that visitors can explore various career options on your platform. ' />
            <p className='text-white'>
              {/* My name is Dhruv. I am from Surat. I study in DDU. I am working on an SDP project right now and try to avoid it. */}

              <div class="container11">
                  <div class="left-panel">
                    <div class="animated-text">
                      Want To Learn  &nbsp;<span></span>
                    </div>
                  </div>
              </div>

           
            </p>
            <div className='btn-container button mt-4'>
              <button className='primary-btn'>
                GET STARTED NOW <i className="fa-solid fa-arrow-right"></i>
              </button>
              <Link to="/courses">
                <button>
                  VIEW COURSE <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
            <div className='rightpannel'>
              <div className='rightpannelimg'>
                <img src='../../../../public/images/rightImg2.jpg'></img>
              </div>
            </div>
        </div>
      </section>
{/* 

      <section className="mb-40">
        <div className="bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 ">
          <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0 text-left">
                <div id="heading">
                  <h3>WELCOME TO SKILL ACADAMY</h3>
                  <h1>BEST ONLINE LEARNING COURSE</h1>
                </div>
     
                <p className='text-white mb-6'>
                  My name is Dhruv. I am from Surat. I study in DDU. I am working on an SDP project right now and try to avoid it.
                </p>
                <a className="mb-2 inline-block rounded bg-teal-950 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                <a className="inline-block rounded px-12 pt-4 pb-3.5 bg-slate-800	 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-slate-950	 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-slate-950	 dark:hover:bg-opacity-60"
                  data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
              </div>

              <div className="mb-12 lg:mb-0 py-10">
                <img src="../../../../public/images/bg.webp"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
              </div>
            </div>
          </div>
        </div>

      </section> */}

    </>
  );
}

export default Home11;



