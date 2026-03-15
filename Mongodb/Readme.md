## MongoDB Basics Notes
**What is MongoDB?**

- MongoDB is a NoSQL database used to store data in a flexible, JSON-like format.
- Instead of tables and rows (like SQL databases), MongoDB uses:

1. Database
2. Collection
3. Documents

MongoDB stores data in BSON (Binary JSON) format.

**Example Document:**
```json
{
  "name": "Vaibhav",
  "age": 21,
  "skills": ["HTML", "CSS", "JavaScript"]
}
```

**Key Feature**
- Schema-less (flexible structure)
- High performance
- Scalable
- Document-based storage
- Easy integration with JavaScript (Node.js)

## MongoDB vs SQL Databases

| Mongodb | SQL |
|--------|--------|
| Tables | Collection |
| Rows | Document |
| Columns |Fields|
| Schema required| Schema optional |
| Structured data| Flexible data |

## MongoDB Query API
The MongoDB Query API is the way you will interact with your data.

The MongoDB Query API can be used in two ways:

- CRUD Operations
- Aggregation Pipelines

**MongoDB Query API Uses**

- Adhoc queries with mongosh, Compass, VS Code, or a MongoDB driver for the programming language you use.
- Data transformations using aggregation pipelines.
- Document join support to combine data from different collections.
- Graph and geospatial queries.
- Full-text search.
- Indexing to improve MongoDB query performance.
- Time series analysis.

**MongoDB mongosh Create Database**

1. Create Database using mongosh
- After connecting to your database using mongosh, you can see which database you are using by typing db in your terminal.

2. Show all databases
- To see all available databases, in your terminal type show dbs.

3. Change or Create a Database
- You can change or create a new database by typing use then the name of the database.

**MongoDB mongosh Create Collection**

**Create Collection using mongosh**

- There are 2 ways to create a collection.

1. Method 1

- You can create a collection using the createCollection() database method.

Example - 

```js
db.createCollection("posts")
```

2. Method 2

- You can also create a collection during the insert process.

Example - 

We are here assuming object is a valid JavaScript object containing post data:

```js
db.posts.insertOne(object)
```

## MongoDB mongosh Insert

- There are 2 methods to insert documents into a MongoDB database.
- insertOne()
- To insert a single document, use the insertOne() method.
- This method inserts a single object into the database.
- insertMany()
- To insert multiple documents at once, use the insertMany() method.

```js
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})
```
## Mongodb Find

- There are 2 methods to find and select data from a MongoDB collection, find() and findOne().

## find()

- To select data from a collection in MongoDB, we can use the find() method.
- This method accepts a query object. If left empty, all documents will be returned.

**Syntax**

```js
db.posts.find()
```

## Mongodb Update

- To update an existing document we can use the updateOne() or updateMany() methods.
- The first parameter is a query object to define which document or documents should be updated.
- The second parameter is an object defining the updated data

**updateOne()**

```js
db.posts.find( { title: "Post Title 1" } ) 
```

## MongoDB Delete

- We can delete documents by using the methods deleteOne() or deleteMany().

**deleteOne()**
- The deleteOne() method will delete the first document that matches the query provided.

```js
db.posts.deleteOne({ title: "Post Title 5" })
```

## Mongodb Query Operator 

- Comparison Operators

| Operator | Meaning|
|--------|--------|
| $eq| Values are equal |
| $ne | Values are not equal |
| $gt |Value is greater than another value|
| $gte | Value is greater than or equal to another value|
| $lt | Value is less than another value |