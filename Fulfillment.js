let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

let conn =  mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '',
                database : 'fulfillment'
            })
app.get('/products', (req, resp)=>{
    let sql = 'SELECT * FROM `fulfillment_tbl`';
    conn.query(sql , (err,result)=>{
        if (err) throw err;
        resp.send(result)
    })
})

app.listen(6000);