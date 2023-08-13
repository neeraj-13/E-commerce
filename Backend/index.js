const cors = require('cors')
// below this is backend Setup
const express =require('express');
require('./db/config')
const User = require("./db/user");
const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());

app.post("/Register",async(req,res)=>{
  // const {name,email,password}=req.body;
  console.log(req.body)
  
  const user= await User.create(req.body);
  // const result= await use.create();
  res.status(200).json(user)
})



app.listen(5000);

