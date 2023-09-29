const mongoose = require("mongoose");

//!-------------------- Connect with the dtabase and creating new dtabase

mongoose
  .connect("mongodb://127.0.0.1:27017/Lav")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

//!----------------  Creatioin of schema  -----------------------
// 1)  A mongoose schema  define the structure of the documents in a MongoDB collection
//  2) It tells MongoDB what fields each document must have and what type of data each field can store.
// 3) Mongoose schemas ensure that the data in the collection is valid and corresponds to the specified type.

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This field Must be in the document
  },
  age: Number,
  Branch: String,
  Roll_no: Number,
  active: Boolean,
  Date: {
    type: Date,
    default: Date.now, // If we not specified the date field then it put Current Date as a default.
  }
});

//! ------------------------ Mongoose model -------------------------------------------
//  1) Once you have defined a Mongoose schema, you can use the mongoose.model function to create the collection in the database
//  2) A Mongoose model is a class that represents the collection. It provides a number of methods for creating, reading,
//     updating, and deleting documents in the collection.
//  3) To create a Mongoose model, you pass the name of the collection and the schema to the mongoose.model function.

const Students = new mongoose.model("Student", StudentSchema);

// Create new documents (Student1) in the collection

const createDocument = async () => {
  try {
    const Student1 = new Students({
      name: "Lav Yadav",
      age: 22,
      Branch: "CSE",
      Roll_no: 60,
      active: true,
    });

    const result = await Student1.save();
    console.log(result);

  } catch (err) {
    console.log(err);
  }
};

createDocument();

