const fs =  require('fs');

//Dosya Okumak
fs.readFile('password.txt','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});

//Dosya Yazmak
fs.writeFile("data.json",'{"name":"test"}',"utf8",(err)=>{if(err)console.log(err);console.log("Dosya Oluşturuldu")});


//veri eklemek
fs.appendFile("example.txt",'\n Kodluyoruzz',"utf8",(err)=>{if(err)console.log(err);console.log("Dosyaya Ekleme Yapıldı")});

//dosya silmek
fs.unlink('data.json',()=>{console.log("Dosya Silindi")});

//klasör oluşturmak
//fs.mkdir('testdir/test',{recursive:true},(err)=>{console.log("klasör oluşturuldu")});

//klasör silmek 
//fs.rmdir('testdir',{recursive:true},(err)=>{console.log("klasör silindi")});

console.log(__dirname);
