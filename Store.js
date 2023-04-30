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
                database : 'store'
            })
app.get('/', (req,resp)=>{
    let sql = 'SELECT * FROM `tbl_store`';

    conn.query(sql, function(err, result){
        if (err) throw err;
        resp.send(result);
    })
})

app.post('/store', (req, resp)=>{
    const vCustomerName = req.body.vCustomerName;
    const vProductsID = req.body.vProductsID;
    const vProductQty = req.body.vProductQty;
    const vTotal = req.body.vTotal;

    let sql = "INSERT INTO `tbl_store`(`vCustomerName`, `vProductsID`, `vProductQty`, `vTotal`) VALUES ('"+vCustomerName+"','"+vProductsID+"','"+vProductQty+"','"+vTotal+"')"
    conn.query(sql, (err, result) => {
        if (err) throw err;
        resp.send(result);
    });
})


app.listen(5000);
console.log("app is running on port 5000")