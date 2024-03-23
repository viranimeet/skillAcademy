// import Cardcontroller from "../controller/Cardcontroller.js";
// import express from "express";
// const router = express.Router();

// // GET all workouts
// router.post('/', Cardcontroller.addcourse)

// // GET a single workout
// router.get('/get', Cardcontroller.getCard)
// router.post('/getcerti', Cardcontroller.getCerti)
// router.post('/payment-session', Cardcontroller.doPayment);
// router.post("/markCheckedUrl",Cardcontroller.chackUrl);
// router.get("/getCourseUrl",Cardcontroller.getCourseUrl);
// router.delete('/:id',Cardcontroller.deleteCourse);

// export default router;

import Cardcontroller from "../controller/Cardcontroller.js";
import express from "express";
const router = express.Router();

// GET all workouts
router.post('/', Cardcontroller.addcourse)

// GET a single workout
router.get('/get', Cardcontroller.getCard)
router.post('/getcerti', Cardcontroller.getCerti)
router.post('/payment-session', Cardcontroller.doPayment);
router.post("/markCheckedUrl",Cardcontroller.chackUrl);
router.get("/getCourseUrl",Cardcontroller.getCourseUrl);
router.delete('/:id',Cardcontroller.deleteCourse);
router.get("/purchase-data",Cardcontroller.purchasecount);

export default router;