## Solution 1 
```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vaibhav! Welcome to Express");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Solution 2 

```js
const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("This is Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(3000);
```

## Solution 3 

```js
const express = require("express");
const app = express();

app.get("/api/user", (req, res) => {
  res.json({
    name: "Vaibhav",
    age: 22,
    role: "Developer"
  });
});

app.listen(3000);
```