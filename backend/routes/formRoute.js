// import Formcontroller  from '../controller/Formcontroller.js';
// import loginController  from '../controller/Logincontroller.js';

// import express from "express";
// const router = express.Router();
// router.route("/registration").post(Formcontroller.setUser);
// router.route("/users").get(Formcontroller.getUser);
// router.route("/lastseen").post(Formcontroller.lastseen);
// router.route("/users/delete").delete(Formcontroller.deleteuser);

// router.route("/login").post(loginController);

// export default router;

import Formcontroller from '../controller/Formcontroller.js';
import loginController from '../controller/Logincontroller.js';

import express from "express";
const router = express.Router();
router.route("/registration").post(Formcontroller.setUser);
router.route("/users").get(Formcontroller.getUser);
router.route("/lastseen").post(Formcontroller.lastseen);
router.route("/users/delete").delete(Formcontroller.deleteuser);

router.route("/login").post(loginController);

router.route("/chartforuser").get(Formcontroller.chartforuser);

export default router;