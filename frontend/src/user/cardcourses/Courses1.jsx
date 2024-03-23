import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Common/Heading/Header";
import Cardlayout from "../yourcourses/cardlayout";

const Courses1 = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/card/get");
        console.log("Fetched data:", response.data);
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.trim() === "") {
      setFilteredCourses(courses); // If search query is empty or contains only whitespace, display all courses
    } else {
      const filtered = courses.filter((course) =>
        course.coursename.toLowerCase().includes(query)
      );
      setFilteredCourses(filtered);
    }
  };


  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  return (
    <>
      <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen font-medium absolute inset-x-0 top-0 overflow-x-hidden'>
        <Header />
        <form onSubmit={handleSearch}>
          <div class="relative mx-auto max-w-md mt-4">
            <label for="default-search" class="mb-1 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2 ps-7 text-xs text-violet-900 border border-gray-300 rounded-lg bg-cyan-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-700 dark:border-cyan-600 dark:placeholder-cyan-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search courses..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
              <button type="submit" class="text-white bg-green-950 absolute end-1 bottom-1 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1 dark:bg-green-900 dark:hover:bg-green-950 dark:focus:ring-green-800">Search</button>
            </div>
          </div>
        </form>

        <div className="bg-gradient-to-r mx-auto mt-8 bottom-0 px-4 overflow-x-hidden">
          {loading ? (
            <div className="flex justify-center items-start min-h-screen mt-20">
              <svg className="animate-spin h-10 w-10 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 0112 4.472v3.728a4.002 4.002 0 00-4 4l.001.091H6zm1 6.207A8.003 8.003 0 014.472 12H.745a11.97 11.97 0 004.031 8.285l.678-.736zm12.592.74l.683.729A11.97 11.97 0 0023.255 12h-3.727a8.003 8.003 0 01-3.728 7.728zm1-6.208h3.182a4.002 4.002 0 00-3.101-5.897l-.681.729z"></path>
              </svg>
            </div>
          ) : error ? (
            <p className="text-xl font-bold text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <Cardlayout key={course._id} course={course} />
              ))}
            </div>
          )}




        </div>
      </div>
    </>
  );
};

export default Courses1;
