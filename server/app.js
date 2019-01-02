let express = require('express'),
    http    = require('http'),
    path    = require('path');

let multer  = require('multer');
let fs      = require('fs');
let cors    = require('cors');

let bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session        = require('express-session');

let app     = express();
let router  = express.Router();
let db      = require('./db/mysql');

app.set('port', process.env.PORT||3001);
app.set('db',db);

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', router);


let posts = require('./routes/posts');
app.use('/posts', posts);


app.listen(app.get('port'),()=>{
    console.log('server starts.');
})

