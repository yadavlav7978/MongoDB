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
  },
});


const Students = new mongoose.model("Student", StudentSchema);

//! ------------------------------------------- Comparison Query Operators -------------------------------------------

// This function is used to find documents in the Students collection where age is greater than 21 and only return the name field.
// The select() method takes an object as an argument, which is used to specify the fields that should be returned in the results.
// In this case, the select() method is used to specify that only the name field should be returned.

const findDocument1 = async () => {
  try {
    const result = await Students.find({ age: { $gt: 21 } }).select({name: 1,});
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

findDocument1();

// This function is used to find documents in the Students collection where name field Matches any of the values specified in an array.   

const findDocument2 = async () => {
  try {
    const result = await Students.find({ name : ['Akash' ,'Lav Yadav'] });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

findDocument2();

{
  /*
     Name            Description                                                                  Syntax

1)    $eq            Matches values that are equal to a specified value.                          { <field>: { $eq: <value> } }
2)    $gt            Matches values that are greater than a specified value.                      { field: { $gt: value } }
3)    $gte           Matches values that are greater than or equal to a specified value.          { field: { $gte: value } }
4)    $in            Matches any of the values specified in an array.                             { field: { $in: [<value1>, <value2>, ... <valueN> ] } }
5)    $lt            Matches values that are less than a specified value.                         { field: { $lt: value } }
6)    $lte           Matches values that are less than or equal to a specified value.             { field: { $lte: value } }
7)    $ne            Matches all values that are not equal to a specified value.                  { field: { $ne: value } }
8)    $nin           Matches none of the values specified in an array.                            { field: { $nin: [ <value1>, <value2> ... <valueN> ] } }

*/
}
