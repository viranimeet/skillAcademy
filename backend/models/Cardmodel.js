import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  coursename: { type: String, required: true },
  coursediscription: { type: String, required: true },
  mentorname: { type: String, required: true },
  courseprice: { type: Number, required: true, min: 0 },
  couseimage: { type: String, required: true },
  courseUrls: [
    {
      type: String,
      required: true,
    },
  ],
  // courseusefor: { type: String, required: true},
  purchaseCount: { type: Number, default: 0 }
},
  {
    timestamps: true
  });

const card = mongoose.model('carddata', cardSchema);

export default card;