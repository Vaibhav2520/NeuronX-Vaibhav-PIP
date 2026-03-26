## What is Node.js?
Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.

It is built on Chrome’s V8 JavaScript Engine and is mainly used for:

- Backend development
- APIs
- Real-time applications
-  Server-side scripting

Before Node.js:
- JavaScript ran only in browsers

After Node.js:
- JavaScript can run on servers

## Why use Node.js

1. Key advantages:

- Fast execution (V8 engine)
- Non-blocking architecture
- Event-driven programming
- Scalable for large applications
- Large ecosystem (npm)

2. Common use cases:

- REST APIs
- Real-time chat apps
- Streaming services
- Microservices
- Backend for web apps

## Installing Node.js

Steps:

- Download Node.js from the official website
- Install the LTS version
- Verify installation

## Running a Node.js File

- Create a file: app.js
- Example code: console.log("Hello Node.js");
- Run the file: node app.js
- Output: Hello Node.js

## Node.js Modules

- Node.js uses a module system to organize code.

Types of modules:

- Core modules
- Local modules
- Third-party modules

1. Core Modules

Built-in modules provided by Node.js.

Examples:

- fs
- http
- path
- os
- events

```js
const os = require("os");

console.log(os.platform());
```

2. Local Modules

- Modules created by developers.

Example - math.js

```js
function add(a,b){
return a+b
}

module.exports = add
```

app.js
```js
const add = require("./math")

console.log(add(5,3))
```

3. Third Party Modules

Installed using npm.

Example packages:

- express
- mongoose
- nodemon
- lodash

## npm (Node Package Manager)

npm is the package manager for Node.js.

Used to:

- Install packages
- Manage dependencies
- Share libraries

## File System Module (fs)

- Used to work with files.

Import Module - 

```js
const fs = require("fs")
```

Write File - 

```js
fs.writeFileSync("test.txt","Hello Node")
```

Read File - 

```js
const data = fs.readFileSync("test.txt","utf8")
console.log(data)
```

Append File - 

```js
fs.appendFileSync("test.txt","\nNew Line")
```

Delete File - 

```js
fs.unlinkSync("test.txt")
```

## HTTP Module

- Used to create servers.

```js
const http = require("http")

const server = http.createServer((req,res)=>{

res.write("Hello from Node server")
res.end()

})

server.listen(3000)
```

- Run: node server.js
- Open browser: http://localhost:3000
- Output: Hello from Node server


## Asynchronous Programming

- Node.js heavily uses async programming.

- Example
```js
setTimeout(()=>{
console.log("Async task completed")
},2000)
```