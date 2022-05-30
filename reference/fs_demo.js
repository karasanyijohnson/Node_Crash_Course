const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log("Folder created......")
// });

// create and write to a file
// fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),'Hello World',err=>{
//     if(err) throw err;
//     console.log("File written to ....")
// });
// fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),'I love Node.JS',err=>{
//     if(err) throw err;
//     console.log("File written to ....")
// });

// fs.writeFile(path.join(__dirname,'/test', 'hello.txt'),'Hello World !! ',err=>{
//     if(err) throw err;
//     console.log("File written to ....")
//     // File Append
//     fs.appendFile(path.join(__dirname,'/test', 'hello.txt'),'I love Node.JS',err=>{
//         if(err) throw err;
//         console.log("File written to ....")
//     });
// });

// Read a file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err, data)=>{
//     if(err) throw err;
//     console.log(data)
// });

// Rename
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloWorld.txt'),
    (err)=>{
    if(err) throw err;
    console.log("File Renamed .........")
});