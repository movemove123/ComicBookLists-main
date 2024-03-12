const mysql = require('mysql2'); // mysql2 모듈 사용
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser')

const connection = mysql.createConnection({ // 연결할 DB 정보 
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'comicbook',
    port: '3306'
});

const app = express();

app.use(bodyParser.urlencoded({
    extended: false,
}));


app.listen(3000, ()=> {
    console.log('Server is runnung port 3000!');
    connection.connect();
});


app.get('/', (request,response)=> {
    fs.readFile('bookList.html','utf-8',(error, data) => {
        connection.query('SELECT * from books', (error, results, fields) => {
            if (error) throw error;
            response.send(ejs.render(data, {
                data: results,
            }));
        });
    });
});

//도서 입력 폼 제공, 새로운 도서를 추가할 수 있는 폼을 클라이언트에게 띄움.
app.get('/create', (request,response)=> {
    fs.readFile('insertNewBook.html','utf-8',(error, data) => {
        if (error) throw error;
        response.send(data);
    });
});

//도서정보를 입력하면 입력된 도서 정보를 데이터베이스에 추가
app.post('/create', (request,response)=> {
    const body = request.body;
    connection.query('INSERT INTO books (genre, name, writer, releasedate) VALUE (?, ?, ?, ?)', [body.genre, body.name, body.writer, body.releasedate], ()=>{
        response.redirect('/');
    });
});

//도서 수정 폼 제공, 폼은 modify.html 파일에 정의되어 있음.
app.get('/modify/:id', (request,response)=> {
    fs.readFile('modify.html','utf-8',(error, data) => {
        connection.query('SELECT * from books WHERE number =?', [request.params.id], (error, results)=>{
            if (error) throw error;
            console.log(request.params.id);
            response.send(ejs.render(data, {
                data: results[0],
            }));
        });
    });
});

//도서정보를 수정하면, 수정된 도서 정보를 데이터베이스에 업데이트
app.post('/modify/:id', (request,response)=> {
    const body = request.body;
    connection.query('UPDATE books SET genre = ?, name = ?, writer = ? WHERE number = ?', [body.genre, body.name, body.writer, request.params.id], (error, results)=>{
        if (error) throw error;
        response.redirect('/');
    });
});

//도서 삭제
app.get('/delete/:id', (request,response)=> {
    connection.query('DELETE FROM books where number=?', [request.params.id], ()=>{
        response.redirect('/');
    });
});