const fs = require("fs");
const http = require("http");
const url = require("url");
/////////////////////////////////
///////files

// const textIn = fs.readFileSync("./txt/output.txt", "utf-8");
// console.log(textIn);

// //create file

// const textout = `This is about how to write file: ${textIn}.\n created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textout);
// console.log("file witten ");

// ///// asynchronous

// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })

/////////////////////////////////
///// server

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName == "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
      // res.end(data);
    });
  }
  //   res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
