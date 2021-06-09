
var express = require('express');
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
  res.render('index', { title: 'Express' });
});

router.get('/sdetail/master', function(req, res, next) {
  res.render('sdetail/master');
});

router.get('/add', function(req, res, next) {
  res.render("sdetail/add-form", { title: 'Express' });
});



//for student details
router.post('/add-process', function(req, res, next) {
  console.log(req.body);

  const mybodydata = {
    student_name : req.body.txt1,
    student_sem : req.body.txt2,
    student_div : req.body.txt3
  }
  connection.query("insert into tbl_sdetail set ?",mybodydata,function(err,result){
    if(err) throw err;
    res.redirect('/sdetail/add');
  });
});


//Display
router.get('/display', function(req, res, next) {
  connection.query("select * from tbl_sdetail", function(err,db_rows){

    if(err) throw err;
    console.log(db_rows);
    res.render('sdetail/display' , {db_rows_array:db_rows});
  });
});



//Delete
router.get('/delete/:id', function(req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query("delete from tbl_sdetail where student_enr = ? ", [deleteid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.redirect('/sdetail/display');
  });
});


//Edit
router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  console.log(editid);
  connection.query("select * from tbl_sdetail where student_enr = ? ", [editid], function(err,db_rows){
    if(err) throw err;
    console.log(db_rows);
    res.render('sdetail/edit', {db_rows_array:db_rows} );
  });
});


router.post('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  var sname= req.body.txt1;
  var ssem= req.body.txt2;
  var sdiv= req.body.txt3;
  connection.query("update tbl_sdetail set student_name = ?, student_sem = ?, student_div = ? where student_enr = ?", [sname,ssem,sdiv,editid], function(err,db_rows){
    if(err) throw err;
    res.redirect('/sdetail/display');
  });
});


module.exports = router;
 