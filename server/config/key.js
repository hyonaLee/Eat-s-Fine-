//환경변수 분기 key값

if(process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');
}else{
  module.exports = require('./dev');
}