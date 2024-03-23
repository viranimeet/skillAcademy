// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import SideBar from '../components/SideBar'

// const Userdetails = ({ users }) => {

//     const [userList, setUserList] = useState(users);
//     const fetchUsers = useEffect(() => {
//         fetch("http://localhost:8080/users")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setUserList(data);
//             })
//             .catch((error) => {
//                 console.log("Error fetching user data:", error);
//             });
//     }, [userList]);


//     useEffect(() => {
//         setUserList(users);
//     }, [users]);


//     const deleteUser = async (id, email, name) => {
//         if (window.confirm(`Are you sure you want to delete ${name}`)) {
//             try {
//                 const response = await fetch("http://localhost:8080/users/delete", {
//                     method: "DELETE",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         userId: id,
//                     }),
//                 });
//                 const data = await response.json();
//                 console.log(data);
//                 alert(data.message);
//                 fetchUsers();
//             } catch (error) {
//                 console.log("Error deleting user:", error);
//             }
//         }
//     };

//     return (
//         <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex overflow-hidden font-medium items-center justify-center'>
//             <SideBar />
//             <div className="user-list-container overflow-y-auto overflow-x-hidden h-screen ">
//                 <ul role="list" className=" divide-y divide-gray-100 ">
//                     {userList?.map((user) => (
//                         <li key={user._id} className="flex justify-between gap-x-6 py-5">
//                             <div className="flex min-w-0 gap-x-4">
//                                 <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user.imageUrl} alt="" />
//                                 <div className="min-w-0 flex-auto">
//                                     <p className="text-sm font-semibold leading-6 text-gray-950">{user.user_name}</p>
//                                     <p className="mt-1 truncate text-xs leading-5 text-amber-950">{user.email}</p>
//                                 </div>
//                             </div>

//                             <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
//                                 <p className="text-sm leading-6 text-gray-900">{user.role}</p>
//                                 {user.lastSeen ? (
//                                     <p className="mt-1 text-xs leading-5 text-gray-500">
//                                         Last seen: <time dateTime={user.lastSeen}>{formatLastSeen(user.lastSeen)}</time>
//                                     </p>
//                                 ) : (
//                                     <div className="mt-1 flex items-center gap-x-1.5">
//                                         <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                                             <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                                         </div>
//                                         <p className="text-xs leading-5 text-lime-100">Online</p>
//                                     </div>
//                                 )}
//                             </div>
//                             <div>
//                                 <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user._id, user.email, user.user_name)} />
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };
// const formatLastSeen = (lastSeen) => {
//     const date = new Date(lastSeen);
//     return date.toLocaleString();
// };
// export default Userdetails;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../components/SideBar'
import Head from "../../user/Components/Common/Heading/Head";
import "./Userdetails.css"

const Userdetails = ({ users }) => {

    const [userList, setUserList] = useState(users);
    const fetchUsers = useEffect(() => {
        fetch("http://localhost:8080/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setUserList(data);
            })
            .catch((error) => {
                console.log("Error fetching user data:", error);
            });
    }, [userList]);


    useEffect(() => {
        setUserList(users);
    }, [users]);


    const deleteUser = async (id, email, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)) {
            try {
                const response = await fetch("http://localhost:8080/users/delete", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: id,
                    }),
                });
                const data = await response.json();
                console.log(data);
                alert(data.message);
                fetchUsers();
            } catch (error) {
                console.log("Error deleting user:", error);
            }
        }
    };

    return (
        <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 h-screen w-screen'>
            <div className='top-0 ml-56'>
                <Head />
            </div>
            <div className='bg-gradient-to-r from-sky-900 via-teal-700 to-sky-900 w-screen h-screen flex overflow-hidden font-medium items-center justify-center'>
                <SideBar />
                <div className="user-list-container overflow-y-auto overflow-x-hidden h-screen w-1/2 ">
                    <ul role="list" className=" divide-y divide-gray-100 ">
                        {userList?.map((user) => (
                            <li key={user._id} className="flex justify-between gap-x-6 py-5 grid-cols-3">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-950">{user.user_name}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-amber-950">{user.email}</p>
                                    </div>
                                </div>

                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{user.role}</p>
                                    {user.lastSeen ? (
                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Last seen: <time dateTime={user.lastSeen}>{formatLastSeen(user.lastSeen)}</time>
                                        </p>
                                    ) : (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <p className="text-xs leading-5 text-lime-100">Online</p>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(user._id, user.email, user.user_name)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
const formatLastSeen = (lastSeen) => {
    const date = new Date(lastSeen);
    return date.toLocaleString();
};
export default Userdetails;