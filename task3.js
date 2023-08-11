const fs= require('fs');
// create a file
fs.writeFile('./welcome.txt', 'HELLO Node',(err)=>{
    if (err) console.log('error') 
    console.log('fie created')
});