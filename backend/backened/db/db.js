const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/Bus")
  .then(() => console.log('Database connected!'));}

 connectDB() ;