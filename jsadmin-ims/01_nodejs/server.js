import http from 'http'
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': "text/plain"}

    )
    res.end('you just built a serve in node.js')
});

server.listen(3000,()=>console.log(`Server is running on port http://localhost:3000`))