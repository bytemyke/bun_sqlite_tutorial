import {Database} from "bun:sqlite";
//connect to database
const db = new Database("db.sqlite");

// //creating a table
// db.query("CREATE TABLE test (valOne, valTwo);").run();

// //Insert into table - simple
// let query = db.query("INSERT INTO test (valOne, valTwo) VALUES ('test val simple', 'another simple test val');");
// query.run();

// //Insert into table - complex
// let insert = db.prepare("INSERT INTO test (valOne, valTwo) VALUES($valueOne, $valueTwo);");
// let insertData = db.transaction(dataArray=>{
//     for(const data of dataArray) insert.run(data);
// })
// insertData([{$valueOne: "first 1", $valueTwo: "first 2"},
// {$valueOne: "2 1", $valueTwo: "2 2"},
// {$valueOne: "3 1", $valueTwo: "3 2"}])

// //get all rows as object
// const query = db.query("SELECT * FROM test");
// let result = query.all();
// console.log(result);

// //get all rows as arrays
// const query = db.query("SELECT * FROM test");
// let result = query.values();
// console.log(result);

// //get only one row back
// const query = db.query("SELECT * FROM test");
// let result = query.get();
// console.log(result);

//close database
db.close();
