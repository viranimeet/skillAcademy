import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const UserCoursesChart = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetchUserData();
    }, []);

    //  fetch perticuler user but how many courses
    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/user/chartforuser');
            const userData1 = response.data.map(user => ({
                user_name: user.userEmail,
                subscribedCoursesCount: user.courseDetails.length
            }));
            setUserData(userData1);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className="w-1/2 h-1/2 ml-52">
            <h2>User Subscribed Courses Chart</h2>
            <Pie
                data={{
                    labels: userData.map(user => user.user_name),
                    datasets: [{
                        label: 'Subscribed Courses',
                        data: userData.map(user => user.subscribedCoursesCount),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            
                        ],
                        borderWidth: 1,
                    }],
                }}
            />
        </div>
    );
};

export default UserCoursesChart;