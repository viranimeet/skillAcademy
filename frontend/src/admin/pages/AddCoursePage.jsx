// import React from 'react'
// import SideBar from '../components/SideBar'
// import AddCourse from '../components/AddCourse'

// const AddCoursePage = () => {
//   return (
//     <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex font-medium items-center justify-center'>
        
//         <SideBar/>
//         <div className='w-auto p-10 shadow-lg bg-black bg-opacity-50 backdrop-blur-lg'><AddCourse/></div>
        
//     </div>
//   )
// }

// export default AddCoursePage

import React from 'react'
import SideBar from '../components/SideBar'
import AddCourse from '../components/AddCourse'
import Head from '../../user/Components/Common/Heading/Head'

const AddCoursePage = () => {
  return (<>
    <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen w-screen'>


      <div className='top-0 ml-56'>
        <Head />
      </div>

      <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 flex font-medium items-center justify-center'>


        <SideBar />


        <div className='w-auto p-10 shadow-lg bg-black bg-opacity-50 mb-8 backdrop-blur-lg'>
          <h2 className="text-white text-3xl mb-4">Add Course</h2>
          <AddCourse />
        </div>

      </div>
    </div>
  </>
  )
}

export default AddCoursePage