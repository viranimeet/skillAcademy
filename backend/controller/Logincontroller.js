// Example in Formcontroller.js
import UserModel from '../models/Usermodel.js';

// Rest of your code



import jwt, { decode } from 'jsonwebtoken'
var emalIdForCourse='';



const loginController = async (req, res) => {
    const { email, pwd } = req.body;
    console.log("Email:", email);
  
    const data = { mes: null, key: null };
  
    try {
      const user = await UserModel.findOne({ email });
      //for course fetch.......
      emalIdForCourse=email;
      // over..


      console.log("User:", user);
      if (!user) {
        data.mes = "User not Found";
        return res.send(data);
      }
  
      //const isPasswordValid = await bcrypt.compare(pwd, user.password);
  
      if (pwd != user.password) {
        data.mes = "Password is incorrect.";
        return res.send(data);
      }
  
      else{
          const token = jwt.sign({ userId: user._id }, "your-secret-key", {
              expiresIn: "1h",
          });
          // data.mes = "Login successfully..";
          const decodedToken = jwt.verify(token, "your-secret-key");
          data.mes = "Login Successfully";
          data.key = decodedToken.userId;
          data.user = user;
          console.log(data.key);
          console.log(token.userId);
          return res.send(data);
      }
  
  
      // res.status(200).json({ token });
    } 
    catch (error) {
        // res.status(500).json({ message: 'Internal server error' });/
      console.log(error);
    }
  };
  
  export default loginController
  export {emalIdForCourse};