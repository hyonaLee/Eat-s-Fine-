const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt  = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: { 
    type: String,
    maxlength : 50
  },
  email: { 
    type: String,
    trim: true, //띄어쓰기 없애기
    unique: 1
  },
  password: {
    type: String,
    minlength: 4
  },
  lastname: { 
    type: String,
    maxlength: 50
  },

  //------------찜하기---------------
  keep: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  },
  //------------찜하기---------------
  
  role:{ // 관리자 또는 유저 타입, 기본(디폴트)은 0 
    type: Number,
    default: 0
  },
  image:{
    type: String
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})



userSchema.pre('save',function(next){ //몽구스에서 가져온 스키마로 mmodels-User.js에서 user정보를 저장하기 전에 작업(함수 부분)
  let user = this;  //this는 위 userSchema를 가리킴
  //비밀번호의 경우에만 몽구스에 내장된 isModified() 함수를 사용하여
  if(user.isModified('password')){

    //db에 저장되는 비밀번호를 암호화
    bcrypt.genSalt(saltRounds, function(err, salt){
      if(err) return next(err)

      bcrypt.hash(user.password, salt, function(err, hash){
        if(err) return next(err)

        user.password = hash
        next(); //index.js - user.save()로 이동
      })
    }) 
  }else{
    next();
  }
}) 

userSchema.methods.comparePassword = function(plainPassword, cb){
  //plainPassword : 1234567... , this.password : 암호화비밀번호 $#!M42234RLF#M!2342L$M@LE!42
  bcrypt.compare(plainPassword, this.password, function(err, isMatch){
    if(err) return cb(err)
    cb(null, isMatch)
  })
}

userSchema.methods.createToken = function(cb){
  let user = this;  //this는 위 userSchema를 가리킴
  console.log(user);
  
  //jwt.sign : 토큰 발급,  jwt.verify : 토큰 인증(확인)
  let token = jwt.sign(user._id.toString(), 'secretToken'); //token = user._id + secretToken 
  
  user.token = token
  user.save(function(err, user){
    if(err) return cb(err)
    cb(null, user)
  })
}

userSchema.statics.findByToken = function(token, cb){
  let user = this;

  //토큰을 복호화(decode)
  jwt.verify(token, 'secretToken', function(err,decoded){

    //유저 _id를 이용하여 유저를 찾고, client에서 가져온 token과 db에 있는 token이 일치하는지 확인
    user.findOne( {"_id" : decoded , "token" : token}, function(err, user){
      if(err) return cb(err);
      cb(null, user)
    })
  })
}

const User = mongoose.model('User', userSchema) //위 스키마를 모델로 감쌈, 이름이 'User'고, userSchema를 넣어줌

module.exports = { User } //다른 파일에서도 스키마를 쓸 수 있게