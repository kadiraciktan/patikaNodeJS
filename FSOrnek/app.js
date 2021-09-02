const fs = require("fs");
fs.writeFile(
  "employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("Dosya Oluşturuldu");
  }
);
let employee = {};
fs.readFile("employees.json", "utf-8", (err, data) => {
  employee = JSON.parse(data);
  console.log(employee);

  employee.salary = 2825;
  let jstring = JSON.stringify(employee);
  fs.writeFile("employees.json", jstring, "utf8", (err) => {
    if (err) console.log(err);
    console.log("Dosya Güncellendi");
  });
});

fs.unlink('employees.json', () => { console.log("Dosya Silindi"); });
