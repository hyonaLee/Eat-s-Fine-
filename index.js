const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key');

const { User } = require('./models/User');


app.use(express.json()); //json 형태로 parsing //application/json
app.use(express.urlencoded( {extended : true } )); //application/x-www-form-urlencoded

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI ,{ //config폴더의 key.js의 mongoURI 가져옴
  useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log('MongoDB Conneted...'))
  .catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/register',(req,res)=>{

  const user = new User(req.body)  //req.body로 json형식으로 파싱

  user.save((err,doc)=>{
    if(err){ 
      return res.json({ success: false, err})
    }else{
      return res.status(200).json({ success: true })
    }
  })
})











app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})