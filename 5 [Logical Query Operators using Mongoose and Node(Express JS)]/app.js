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

//! ------------------------------------------- Logical Query Operators -------------------------------------------

// This function is used to find documents in the Students collection where age is greater than 21 and only return the name field.
// The select() method takes an object as an argument, which is used to specify the fields that should be returned in the results.
// In this case, the select() method is used to specify that only the name field should be returned.

const findDocument1 = async () => {
  try {
    const result = await Students.find({ age: { $gt: 21 } }).select({
      name: 1,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

findDocument1();

// This function is used to find documents in the Students collection collection where either the age field is greater than 21 
// or the Branch field is equal to 'ECE'.

const findDocument2 = async () => {
  try {
    const result = await Students.find({ $or: [{ age : { $gt:21 } }, { Branch: 'ECE'} ] });
    console.log(result);
  } catch (err) {node 
    console.log(err);
  }
};

findDocument2();

{
  /*

1)    $and  :   Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.  
      Syntax :  { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }  

2)   $not :     Inverts the effect of a query expression and returns documents that do not match the query expression.
     Syntax :   { field: { $not: { <operator-expression> } } }

3)   $nor :    Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
     Syntax :   { $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

4)   $or :     Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
     Syntax :  { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
*/
}
