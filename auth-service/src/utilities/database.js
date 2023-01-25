const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    mongoose.set('strictQuery', false);
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.dvnme.mongodb.net/?retryWrites=true&w=majority`;
    const res = await mongoose.connect(uri);
    return res;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

module.exports = connectToDb;
