let express = require('express');
let router = express.Router();

// create table posts (id INT AUTO_INCREMENT primary key, name VARCHAR(40) NOT NULL,lat double, lng double, point INT default 5, content varchar(150), password varchar(70) not NULL);
// + content

router.route('/add').post((req,res)=>{
    console.log('a post adds');
    let query=`insert into posts (name,lat,lng,point,content,password) values 
    ('${req.body.name}',${req.body.lat},${req.body.lng},${req.body.point||3},'${req.body.content}',password('${req.body.password}'))`;


    console.log(query);
    req.app.get('db').query(query, (err)=>{
        if(err)
            console.log(err);
    })
});

router.route('/find').get((req,res)=>{
    let query=`select * from posts`;

    req.app.get('db').query(query, (err,rows)=>{
        if(err) console.log(err);
        else sendJSON(res,true,rows);
    })
});

router.route('/byScore').get((req,res)=>{
    let query=`select * from posts where point=${req.query.point}`

    req.app.get('db').query(query, (err,rows)=>{
        if(err)
            console.log(err);
        else
            sendJSON(res,true,rows);
    })
});


router.route('/delete').get((req,res)=>{
    console.log(req.query.id);

    let query = `delete from posts where id='${req.query.id}'` //delete
    req.app.get('db').query(query, (err,res)=>{
        if(err) console.log(err)
        console.log(res);
    })
 //+새로고침
});


router.route('/test').post((req,res)=>{
    console.log('connection ok');
    console.log(req);
});

function sendJSON(res, result, obj) {
    res.json(obj)
}

module.exports= router;
