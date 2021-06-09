var express = require('express');
//var mysql   = require('mysql');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'student'
});

//checking DB connection
connection.connect(function(err){
  if(!err) {
    console.log("Database connected!!");
  }else{
    console.log("Database not connected");
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(' ', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render("smarks/add-form", { title: 'Express' });
});



//table marks
router.post('/add-process', function(req, res, next) {
  console.log(req.body);

  const mybodydata = {
    CN : req.body.txt1,
    COA : req.body.txt2,
    OS : req.body.txt3
  }
  connection.query("insert into tbl_smarks set ?",mybodydata,function(err,result){
    if(err) throw err;
    res.redirect('/smarks/add');
  });
});



//Display
router.get('/display', function(req, res, next) {
  connection.query("select * from tbl_smarks", function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.render('smarks/display' , {db_rows_array:db_rows});
  });
});



//Delete
router.get('/delete/:id', function(req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_smarks where student_enr = ? ", [deleteid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.redirect('/smarks/display');
  });
});


//Edit
router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  console.log(editid);
  connection.query("select * from tbl_smarks where student_enr = ? ", [editid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('smarks/edit', {db_rows_array:db_rows} );
  });
});


router.post('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  var cn= req.body.txt1;
  var coa= req.body.txt2;
  var os= req.body.txt3;
  connection.query("update tbl_smarks set CN = ?, COA = ?, OS = ? where student_enr = ?", [cn,coa,os,,editid], function(err,db_rows){
    if(err) throw err;
    res.redirect('/smarks/display');
  });
});


module.exports = router;
 