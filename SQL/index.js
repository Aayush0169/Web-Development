const { faker } = require('@faker-js/faker');
const { error } = require('console');
const { create } = require('domain');
const mysql=require('mysql2');

//   faker
let randomUser=()=>{
    return[
         faker.string.uuid(),
         faker.internet.username(), // before version 9.1.0, use userName()
         faker.internet.email(),
         faker.internet.password(),
    ]
}

//sql
// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'app',
    password:'123169'
  });
  //passing querry
  let q="INSERT INTO user(id,username,email,password) VALUES ?";
  let data=[];
  for(i=0;i<97;i++){
      data.push(randomUser());
  }
      
  try {
    connection.query(q, [data], (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });

  } catch (e) {
    console.error(e);
  }
        
      
     


connection.end();