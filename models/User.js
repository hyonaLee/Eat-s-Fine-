const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema) //위 스키마를 모델로 감쌈, 이름이 'User'고, userSchema를 넣어줌

module.exports = { User } //다른 파일에서도 스키마를 쓸 수 있게