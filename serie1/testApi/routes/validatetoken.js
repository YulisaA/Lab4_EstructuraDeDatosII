var express = require('express');
var router = express.Router();
var moment = require('moment');
let jwt = require('jwt-simple');

router.get('/', function(req, res, next){
    res.render('validatetoken', {title: "Generar token", password:'', jsonContent:'', tokenValue:''});
});
function validate(key, content){
    if(key || content)
        return true;
    else
        return false;
}
router.post('/', function(req, res, next){  
   key = req.body.password;
   let token = '';
   let myContent = {
        sub : req.body.jsonContent,         
    };
    if(validate(key, req.body.jsonContent)){
        token = jwt.encode(myContent, key);
    }
    else{
        res.render('validatetoken', { title: 'Generar token:', myKey :'' , content:'', tokenValue:''});
        return;
    }
    res.render('validatetoken', { title: 'Generar token:', myKey :key ,content: req.body.jsonContent, tokenValue:token});
});
module.exports = router;





