## 1️⃣ Create Database

```js
use libraryDB
```

Verify database:

```js
show dbs
```

## 2️⃣ Insert a Single Document

```js
db.books.insertOne({
title: "Atomic Habits",
author: "James Clear",
price: 450,
pages: 320
})
```

## 3️⃣ Display Selected Fields
- Show only title and price.

```js
db.books.find(
{},
{title:1,price:1,_id:0}
)
```