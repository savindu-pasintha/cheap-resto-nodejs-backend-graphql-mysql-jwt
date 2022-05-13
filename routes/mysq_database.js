const mysql = require("mysql");

const mysql_connection = mysql.createConnection({
    host: "localhost",port: 3306,user: "root",password: "",
    database: "database_nodejs_jwt_mysql_user_login_authentication"
  });

  const QueryExecute = (SQL_Query_as_STRING) => {
          mysql_connection.connect((err)=>{
               if(err){console.error('Connecting Id : ' + err.stack); return;}
               else{console.log('Connected thread Id : ' + mysql_connection.threadId); 
                   mysql_connection.query(SQL_Query_as_STRING,(err,result)=>{
                      if(err){console.log("Error in queryExecute : ",err); return err;}
                      else{console.log("Result : ",result); return result; }
                  });
               }
           });  
  }
module.exports = {QueryExecute};
//Other file const {QueryExecute} =  require('./mysq_database');
//QueryExecute("CREATE TABLE user (id INT.name VARCHAR(255), address VARCHAR(255))")