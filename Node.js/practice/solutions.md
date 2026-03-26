## 1️⃣ Create a Simple Calculator

```js
const a = 10;
const b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
```

## 2️⃣ Use a module

- math.js
```js
function add(a,b){
    return a+b;
}

module.exports = add;
```

- now import it in ```jsapp.js```

```js
const add = require("./math");

console.log(add(5,3));
```

## 3️⃣ Create a Basic HTTP Server

```js
const http = require("http");

const server = http.createServer((req,res)=>{

res.write("Welcome to Node.js Server");
res.end();

});

server.listen(3000);
```

- Run:

```bash
node server.js
```

## 4️⃣ Route Handling

```js
const http = require("http");

const server = http.createServer((req,res)=>{

if(req.url === "/"){
res.write("Home Page");
}

else if(req.url === "/about"){
res.write("About Page");
}

else{
res.write("Page Not Found");
}

res.end();

});

server.listen(3000);
```