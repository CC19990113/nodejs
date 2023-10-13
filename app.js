/* 引入express框架 */
const express = require('express');
const app = express();
 
/* 引入cors */
const cors = require('cors');
app.use(cors());
 
/* 引入mysql */
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '129.211.31.212',
    user: 'root',
    password: 'Zcc520..',
    database: 'zcc',
    multipleStatements: true
})
conn.connect();
 
/* 监听端口 */
app.listen(8001, () => {
    console.log('——————————8001服务已启动——————————');
})
 
app.get('/test', (req, res) => {
    res.send('<p style="color:red">服务已启动</p>');
})
 
app.get('/api/getUserList', (req, res) => {
    const sqlStr = 'SELECT * FROM user'
    conn.query(sqlStr, (error, results) => {
        if (error) return res.json({ code: 500, message: error})
        res.json({ code: 200, message: results})
    })
})