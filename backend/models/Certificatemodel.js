import mongoose from 'mongoose';


const certificateSchema = new mongoose.Schema({
    courseId: { type: String},
    userId: { type: String,required: true  },
    userEmail:{type:String},
    complited:{type:Boolean},
    
    courseDetails: [
        {
         
          _id: { type: String },
          couseimage:{type:String},
         coursename:{type:String},
         mentorname:{type:String},
         

          courseUrls: [{
          videoUrls: { type: String },
          isComplited:  {type: Boolean}, 
      }]
          
        },
      ],

},
{
    timestamps: true
});

const certificate = mongoose.model('certificateDetails', certificateSchema);

export default certificate;