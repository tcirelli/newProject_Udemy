
//Old version
/*
const fs = require('fs');
//console.log(fs)

const folderName = process.argv[2] || 'Project'
// 1st test
//fs.mkdir('Dogs', { recursive: true }, (err) => {
//    console.log("IN the call back!!")
//   if (err) throw err;
//  });
 
//2sd test

fs.mkdirSync(folderName);
 //console.log("I came after MKDIR IN THE FILE!!")
 fs.writeFileSync(`${folderName}/index.html`)
 fs.writeFileSync(`${folderName}/app.js`)
 fs.writeFileSync(`${folderName}/styles.css`)

*/

const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch(e){
    console.log("SOMETHING WENT WRONG!!!!");
    console.log(e);
}