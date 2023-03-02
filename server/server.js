const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express()
const CryptoJS = require("crypto-js");
const port = 5000
const cors = require("cors");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const MongoClient = require('mongodb').MongoClient;

app.use(cors({
   origin : "*"
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/commerce?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
      console.log("ok")
    }).catch((e)=>console.log("Error", e));


app.post('/register', async (req, res) => {
   
    
    const userSchema = new mongoose.Schema({
      first_name: String,
      last_name : String,
      email : String,
      password : String,
      otp : Number,
    });
   
    
    const User = mongoose.models.Users || mongoose.model("Users", userSchema);
    const email = await User.findOne({ email:  req.body.Email })
    console.log(email)
    if(email){
      res.status(200).json({status : false})
    }else{

      const passward = CryptoJS.AES.encrypt(JSON.stringify(req.body.pass), '@yutslh1267tfriifksoit546^&83').toString()
      const user = new User({
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.Email,
        password: passward, 
        otp : 0
      });
      user.save((error) => {
        if (error) {
          res.status(500).send(error);
          console.log(error)
        } else {
          const token = jwt.sign({First_name: req.body.fname,Last_name:req.body.lname,Email:req.body.Email}, 'secret')
          res.status(200).json({token})
          

        }
      });
    }
})

app.post('/login',async(req,res)=>{
  
  const schema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email : String,
    password : String,
    otp : Number
  });
  const User = mongoose.models.Users || mongoose.model("Users", schema);
  try{
    const user = await User.findOne({ email:  req.body.email })
    if(user){
      let bytes  = CryptoJS.AES.decrypt(user.password, '@yutslh1267tfriifksoit546^&83');
      let pass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if(pass === req.body.pass){
        res.status(200).json({login : true})   
      }else{
        res.status(200).json({login : false})

      }

    }else{
      res.status(200).json({login : false})

    }
      
    
    


  }catch(error){
    console.log(error.message)
    res.status(200).json({login : false})

  }
})

app.post('/mail', async (req , res)=>{
  const uri = "mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/commerce?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
   console.log(req.body.email)
  const schema = new mongoose.Schema({
    email : String,
  });
  const User = mongoose.models.Users || mongoose.model("Users", schema);
  try{
    const user = await User.findOne({ email: req.body.email })
    console.log(user.email)
    const ottp = Math.floor(Math.random() * 10000) + 1
    if (user.email) {
      res.status(200).json({login : true})
      const collection = client.db("commerce").collection("users");
      collection.updateOne({ email: req.body.email  }, { $set: { otp : ottp } }, function(err, res) {
        console.log("Document updated");
        client.close();
      });
        let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'umerprogrammer@gmail.com',
      pass: 'naqwpbpzdtnoiiec'
    }
  });
  let mailOptions = {
    from: 'umerprogrammer@gmail.com',
    to: 'umerprogrammer@gmail.com',
    subject: 'Test email using nodemailer',
    text: `This is your verification code ${ottp}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
    }else{
      res.status(200).json({login : false})
    }
    


  }catch(error){
    console.log(error.message)
    res.status(200).json({login : false})

  }



})
app.post('/verification',async (req,res)=>{
  console.log(req.body.email)
  const schema = new mongoose.Schema({
    email : String,
    otp : Number
  });
  const User = mongoose.models.Users || mongoose.model("Users", schema);

  try{
    const user = await User.findOne({ email:  req.body.email })
    console.log("Db otp:",user.otp)
    console.log("user otp:",req.body.otp)
    console.log(user.otp == req.body.otp)
    if(user.otp == req.body.otp ){
      res.status(200).json({status : true })
    }else{
      res.status(200).json({status : false })

    }


  }catch(error){
    console.log(error.message)
    res.status(200).json({login : false})

  }

})

app.post('/reset_pass',async (req , res)=>{
  const uri = "mongodb+srv://umer:niko12345@cluster0.5i8um.mongodb.net/commerce?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
    const Schema = new mongoose.Schema({
      email : String,
    });
  const User = mongoose.models.Users || mongoose.model("Users", Schema);   
  console.log(req.body.email)
    const user = await User.findOne({ email:  req.body.email })
    if(user.email){
      const passward = CryptoJS.AES.encrypt(JSON.stringify(req.body.pass), '@yutslh1267tfriifksoit546^&83').toString()
      console.log(passward)
      const collection = client.db("commerce").collection("users");
      collection.updateOne({ email: req.body.email  }, { $set: { password : passward } });  
      res.status(200).json({res : true})
    }else{
      res.status(200).json({res : false})
    }

 
  
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  