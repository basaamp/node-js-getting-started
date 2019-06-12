const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true })

const PORT = process.env.PORT || 5000
var app = express();
/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
*/
app.get('/', function (req, res) {
   res.send('ujjii');
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   //res.end(JSON.stringify(response));
   
   res.end(JSON.stringify(req.body));
   res.end(req);
//const respos = req;

})




  /*.get('/', (req, res) => res.render('pages/index'))*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
