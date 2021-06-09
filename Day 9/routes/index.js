var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/myform', function(req, res, next) {
  res.render('form');
});

router.post('/form-process', function(req, res, next) {
  var a=req.body.txt1;
  var b=parseInt(req.body.txt2);
  var c=parseInt(req.body.txt3);
  var d=parseInt(req.body.txt4);
  var e=parseInt(req.body.txt5);
  var f=parseInt(req.body.txt6);

  var m= b+c+d+e+f;

  if (m>350)
  {
    msg='PASS';
  }else {
    msg='FAIL';
  }

  console.log(req.body);
  console.log("Name is" + a + ". Marks in COA is" + b  + ". Marks in CN " + c  + ". Marks in AAD " + d  + ". Marks in CPDP " + e  + ". Marks in OS " + f);
  res.render('ans',{mya:a,myb:b,myc:c,myd:d,mye:e,myf:f,mym:m,mymsg:msg});
});

module.exports = router;
