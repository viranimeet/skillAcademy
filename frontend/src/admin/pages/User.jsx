  // import React, { useEffect, useState } from "react";
  // import axios from "axios";
  // import Userdetails from "./Userdetails";

  // const User = () => {
  //   const [users, setUsers] = useState([]);

  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/users");
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log("Error fetching users:", error);
  //     }
  //   };

    

  //   useEffect(() => {
  //     fetchUsers();
  //   }, []);

  //   return (
  //     <div>
  //       <Userdetails users={users} fetchUsers={fetchUsers}/>
  //     </div>
  //   );
  // };

  // export default User;


  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import Userdetails from "./Userdetails";
  
  const User = () => {
    const [users, setUsers] = useState([]);
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
      <div>
        <Userdetails users={users} fetchUsers={fetchUsers} />
      </div>
    );
  };
  
  export default User;
  
  