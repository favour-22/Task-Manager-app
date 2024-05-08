const mongoose = require('mongoose');


// module.exports = function connectDb() {
//   try {
//     mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//      useUnifiedTopology: true,
//     });
//     console.log('Connceted to the database');


//   }
//  catch (error) {
//     console.log('Failed to connect to databse', error);

//   }

// };



const connectDB = async (uri)=>{
  try{
    await mongoose.connect(uri, {
             useNewUrlParser: true,
            useUnifiedTopology: true,
           });
           console.log('Connected to MongoDB');
  }
  catch(error){
    console.error('Error connecting to DB',error)

  }
};
module.exports=connectDB;
