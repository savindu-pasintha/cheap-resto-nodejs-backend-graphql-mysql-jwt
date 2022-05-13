var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const {QueryExecute} =  require('./mysq_database');

//https://www.npmjs.com/package/jsonwebtoken

router.get('/login', function(req, res, next) {
  QueryExecute("CREATE TABLE user (id INT.name VARCHAR(255), address VARCHAR(255))");
  res.send('Login with JWT');
});


//new Token create for user data encode x.y.z   x=header y=payload data z=encript type
router.post('/login/createToken', function(req, res, next) {
  var userData = { id:1, username:"savindupasingtha@gmail.com" , password:"pass99"};
  jwt.sign({user: userData,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  },"secret",(err,token)=>{
    if(err){res.json({error : err});}
    else{res.json({token : token, exp: Math.floor(Date.now() / 1000) + (60 * 60),}); 
  }
  });
});

//http header include token is validation
const verifyTokenFuc = (req,res,next)=>{
   if(typeof(req.headers['authorization']) !== 'undefined'){
      var headerToken = req.headers['authorization'].split(" ")[1];
      if(headerToken != null && headerToken != 'undefined'){
        req.token = headerToken;  next();}
      else{res.json({error : "UnAuthorization Header !"});}
    }else{res.json({error : "UnAuthorization Request !"})}
  }

 //after validation , jwt.verify using decode token inside data ana out put 
router.post('/login/verifyToken',verifyTokenFuc, function(req, res) {
 jwt.verify(req.token,"secret",(err,getData)=>{
   if(err){res.json({ msg : "Access Denied !" , error : err});}
   else{res.json({ success: true, msg : " Token Verified By JWT ." , data : getData}); }
  });
});


router.post('/register', function(req, res, next) {
  res.send('');
});

router.post('/logi', function(req, res, next) {
  res.send('respond with a resource - users GET');
});

router.post('/logout', function(req, res, next) {
  res.send('respond with a resource - users GET');
});

module.exports = router;
