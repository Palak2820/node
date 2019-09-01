const http= require('http');

const server = http.createServer((req,res) =>{
 console.log(req.url,req.method,req.headers);

 const url =req.url;
 const method =req.method;
 if(url ==='/'){ 
    res.write('<html>');
 res.write('<head><title>My first page</title></head>');
 res.write('<body><form action ="/message" method= "POSt"><input type ="text" name ="message "><button type="submit">Send</button> </form></body>');
 res.write('</html>');
  return res.end();


   
 }

if(url ==='/message'&& method ==='POST'){
  fs.writeFileSync('message.txt','message');
const body =[];
  req.on('data',(chunk) =>{//listen to events/data
   console.log(chunk);
    body.push(chunk);
  });

  req.on('end',()=>{
const parsedbody =Buffer.concat(body).toString();
const message =parsedbody.split('=')[1];
fs.writeFileSync('message.txt','message');


  });
  res.statusCode =302;
  res.setHeader('Location','/');
  return res.end();
}
 
 //process.exit();

 
  res.setHeader('Content-Type','text/html');  
  
  res.write('<html>');
  res.write('<head><title>My first page</title></head>');
  res.write('<body><h1> Hello from my node.js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);





