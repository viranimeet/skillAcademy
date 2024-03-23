// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   user_name: { type: String, required: true },
//   subscripted_course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'carddata' }],
// }, {
//   timestamps: true,
// });

// const Data = mongoose.model('User', userSchema);

// export default Data;

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  user_name: { type: String, required: true },
  subscripted_course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'carddata' }],
}, {
  timestamps: true,
});

const Data = mongoose.model('User', userSchema);

export default Data;