import React from 'react'

const Alert = () => {
  return (
    <div>
        <div class="mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            Limited Seats Available!
          </h2>
          <h3 class="my-4 text-2xl text-white">
            Enroll now for our upcoming courses!
          </h3>
          <a href="/courses">
            <button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
              Enroll Now
            </button>
          </a>
        </div>
    </div>
  )
}

export default Alert