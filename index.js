// console.log("Hello From Node.js............")
// const person = require('./person')
// console.log(person.name)

// THIS METHOD IS CALLED COMMON JS
// const Person = require('./person')
// const person1 = new Person("Johnson", 30)
// person1.greeting()

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('Message', data=>console.log('Called Listener', data))
// logger.log("Hello World");
// logger.log("Hi ");
// logger.log("Hello ")

const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer((req, res) => {
    //     // Url
    // if(req.url ==='/'){
    //     fs.readFile(path.join(__dirname, 'public','index.html'),(err,
    //         content)=>{
    //         if(err) throw err
    //         res.writeHead(200,{ 'Content-Type':'text/html'})
    //         res.end(content)
    //     })
    // }
    // // API
    // if(req.url ==='/api/users'){
    //     const users = [
    //         {mame:'John Doe', Age:30},
    //         {mame:'John Smith', Age:20},
    //     ]
    //     res.writeHead(200,{ 'Content-Type':'application/json'});
    //     res.end(JSON.stringify(users))
    // }

    // Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath)
    // res.end();

    // Extension of file
    let extname = path.extname(filePath);

    // Initial Content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javaScript';
            break;
        case '.css':
            contentType = 'text/css';
            break; case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => 
                {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8')
                })
            } else {
                // Some Server Error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`)
            }
        } else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8')
        }

    })
});
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
