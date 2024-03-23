import React from 'react';
import { homeAbout } from '../../../dummydata';
import Title from '../Common/title/Title';

const AboutCard = () => {
  return (
    <>
      <div className="my-16 mx-auto md:px-4 lg:px-8 xl:px-16">

        <section className="mb-16 text-center lg:text-left">
          <div className="py-8 md:px-4 md:px-8 lg:px-12">
            <div className="mx-auto xl:px-24">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="mb-8 md:mb-0 lg:mb-0 lg:w-1/2">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-4 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[15px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-8 lg:-mr-8">
                    <h2 className="mb-2 text-2xl lg:text-3xl font-bold text-primary dark:text-primary-400">
                      Skill Academy
                    </h2>
                    {/* <p className="mb-4 text-sm lg:text-base font-semibold">Graphic designer</p> */}
                    <p className="mb-6 text-xs lg:text-sm text-neutral-500 dark:text-neutral-300">
                      Dive into our comprehensive online courses designed to enhance your skills and knowledge. From programming to design, marketing to finance, we've got courses tailored for every learning need.
                    </p>
                    <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                    Complete our courses and earn industry-recognized certificates. Showcase your expertise to employers and clients, and stay ahead in your career journey.
                    Benefit from our seasoned instructors who bring years of industry experience to the table. Learn from the best and gain practical insights that will propel your career forward.
                    </p>
                    <ul class="flex justify-center lg:justify-start">
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                          class="w-5 text-primary dark:text-primary-400">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                          class="w-5 text-primary dark:text-primary-400">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                          class="w-5 text-primary dark:text-primary-400">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                          class="w-5 text-primary dark:text-primary-400">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                          class="w-5 text-primary dark:text-primary-400">
                          <path fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/2 md:mb-12 lg:mb-0">
                  <img src="./images/about.webp"
                    class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutCard;