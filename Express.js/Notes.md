## What is Express.js?

Express.js is a minimal and flexible web framework for Node.js used to build:

- Web applications
- REST APIs
- Backend services

It simplifies server creation compared to using Node's built-in http module.

- Example 

1. Without Express (Node.js HTTP):

```js
const http = require("http");

http.createServer((req,res)=>{
res.write("Hello");
res.end();
}).listen(3000);
```

2. With Express

```js
const express = require("express");

const app = express();

app.get("/", (req,res)=>{
res.send("Hello from Express");
});

app.listen(3000);
```

## Why Use Express.js?

Advantages:

1. Simple and lightweight
2. Easy routing system
3. Middleware support
4. Large ecosystem
5. Perfect for REST APIs
6. Works well with MongoDB and Node.js


## Installing Express

- Step 1: Initialize Node project

```bash
npm init -y
```

- Step 2: Install Express

```bash
npm install express
```

- Now Express will appear inside:

```bash
node_modules
```

- and dependency will be added to:

```bash
package.json
```

Example: 
```json
"dependencies": {
"express": "^4.18.2"
}
```

## Creating Your First Express Server

- Create file:

```bash
server.js
```

- Code 

```js
const express = require("express");

const app = express();

app.get("/", (req,res)=>{
res.send("Welcome to Express Server");
});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});
```

- Run server:

```bash
node server.js
```

## Routing in Express

- Routing defines how the server responds to requests.

Syntax - 

```js
app.METHOD(PATH, HANDLER)
```

Example - 

```js
app.get("/", (req,res)=>{
res.send("Home Page");
});

app.get("/about", (req,res)=>{
res.send("About Page");
});

app.get("/contact", (req,res)=>{
res.send("Contact Page");
});
```

## HTTP Methods

- APIs use HTTP methods to perform operations.

| Method | Purpose |
|--------|--------|
| GET | Retrieve data|
| POST | Create new data |
| PUT |Update data|
| DELETE | Delete data |

Example - 

```js
app.get("/users",(req,res)=>{
res.send("Get users");
});

app.post("/users",(req,res)=>{
res.send("Create user");
});

app.put("/users",(req,res)=>{
res.send("Update user");
});

app.delete("/users",(req,res)=>{
res.send("Delete user");
});
```

## Middleware in Express

- Middleware functions run before the request reaches the route handler.

Example - 

```js
app.use((req,res,next)=>{
console.log("Request received");
next();
});
```

- Explanation:

1. req → request object
2. res → response object
3. next() → moves to next middleware



## Built-in Middleware

- Express provides built-in middleware.

```js
app.use(express.json());
```

Purpose: 

- Parses incoming JSON request body.

```json
{
"name": "Vaibhav"
}
```

## Response Object (res)

- Used to send response back to client.

Common methods:

```js
res.send()
res.json()
res.status()
res.sendFile()
```

Example - 

```js
res.json({
message:"User created"
});
```

## Express API Example

- Create a simple users API.

```js
const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.get("/users",(req,res)=>{
res.json(users);
});

app.post("/users",(req,res)=>{
const user = req.body;
users.push(user);
res.json({message:"User added"});
});

app.listen(3000);
```

Test API using:

- Postman
- Thunder Client
- curl

## REST API

- REST = Representational State Transfer
- REST APIs follow standard rules.
Common endpoints:

| Purpose| Method | Purpose |
|--------|--------|--------|
|/user | GET | Get all user|
|/users| POST | Create user |
| /users/:id | PUT |Update user|
| /users/:id | DELETE | Delete user |

Example:
```js
app.get("/users",(req,res)=>{
res.send("Get all users");
});
```

## JSON Response
- APIs usually send responses in JSON format.

```js
res.json({
name:"Laptop",
price:50000
});
```