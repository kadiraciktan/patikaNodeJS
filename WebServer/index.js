const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    switch(url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> index  sayfasina hosgeldiniz</h2>`);
            break;
        case '/hakkimda':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> hakkimda   sayfasina hosgeldiniz</h2>`);
            break;
        case '/iletisim':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(`<h2> iletisim sayfasina hosgeldiniz</h2>`);
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.write("404 Not Found");
            break;
    }
    console.log("Bir İstek Gönderildi");
    //res.write("Merhaba NodeJS Sunucusuna Hoş Geldiniz");
    res.end();
});
const port=5000;

server.listen(port,()=>{
    console.log(`Server Listening Port :${port}`);
});

