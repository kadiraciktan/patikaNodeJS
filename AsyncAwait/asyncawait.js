const func = async () => {
    return 10 // Buradaki ifade  return Promise.resolve(10) ile aynıdır. Buradaki 10 Promise yapısındadır.
  }
  
func().then(val=>{console.log(val)}) // Sonucu yakalamak için .then() yapısı kullanılmaktadır.


const func2 = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Tamamlandı!"), 2000);
    });
  
    let result = await promise; // Promise dönene kadar sonuç bekleniyor.
  
    console.log(result); // "Tamamlandı!"
  }
  
  func2();

  console.log("Çalışıyor...");