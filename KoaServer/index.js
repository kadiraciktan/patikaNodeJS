const Koa = require('koa');
const app = new Koa();
const port = 3000;




app.use((ctx,next)=>{
    switch(ctx.path){
        case '/':
            ctx.body="INDEX SAYFASINA HOSGELDINIZ";
            break;
        case '/hakkimda':
            ctx.body="HAKKIMDA SAYFASINA HOSGELDINIZ";
            break;
        case '/iletisim':
            ctx.body = "ILETISIM SAYFASINA HOSGELDINIZ";
            break;
        default:
            ctx.body = "404 PAGE NOT FOUND";
            ctx.status=404;
            break;
        
    }
});
app.listen(port);
console.log(`App Listen : ${port}`);