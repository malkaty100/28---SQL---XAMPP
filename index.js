import express from 'express';
import mysql from 'mysql2/promise';


const app = express();
const port = 3000;


// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  // or your MySQL password
  database: 'classicmodels',
});


// your endpoints here 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
    });
app.get('/question1',async(req,res)=>{
    const [result]=await pool.query("select count(*)as cntFrance from customers where country='France'")
    res.json(result[0])
})
app.get('/question2',async(req,res)=>{
    const [result]=await pool.query("select firstname,lastname from employees where reportsTo =1143")
    res.json(result[0])
})
app.get('/question3',async(req,res)=>{
    const [result]=await pool.query("SELECT productLine, SUM(quantityInStock) AS stock FROM products WHERE productLine = 'Classic Cars' GROUP BY productLine")
    res.json(result[0])
})