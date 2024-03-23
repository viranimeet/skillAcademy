import React from 'react'
import OnlineCourses from '../../allCourses/OnlineCourses'
import '../../allCourses/courses.css'
import { coursesCard } from '../../../dummydata'

const HAbout = () => {
    return (
        <>
            <section className='homeAbout'>

                <div className='haabout-header'>
                    <h3>OUR COURSES</h3>
                    <h1>Explore Our popular Online</h1>
                </div>
                <div className='container1'>

                    {/* <Title  subtitle="our courses" title="explore our popular online courses"/> */}

                    <div className='coursesCard'>
                        <div className='grid2'>
                            {
                                coursesCard.slice(0, 3).map((val,index) => {
                                    return (
                                        <div key={index} className='items'>
                                            <div className='content flex'>
                                                {/* <div className='left'> */}
                                                <div className='img'>
                                                    <img src={val.cover} alt='' />
                                                </div>
                                                {/* </div> */}

                                                <div className='text'>
                                                    <h1>{val.coursesName}</h1>
                                                    <div className='rate'>

                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <i className='fa fa-star'></i>
                                                        <label htmlFor=''>(5.0)</label>
                                                    </div>

                                                    <div className='details'>
                                                        {/* // nested fetch from arrya of techer */}
                                                        {val.courTeacher.map((de) => {
                                                            return (
                                                                <>
                                                                    <div className='box'>
                                                                        <div className='dimg'>
                                                                            <img src={de.dcover} alt='' />
                                                                        </div>

                                                                        <div className='para'>
                                                                            <h4>{de.name}</h4>
                                                                        </div>
                                                                    </div>
                                                                    <span>{de.totalTime}</span>
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='price'>
                                                <h3>{val.priceAll}/{val.pricePer}</h3>
                                            </div>

                                            <button className='outline-btn'>ENROLL NOW</button>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default HAbout
