# 📚 MongoDB and Mongoose Tutorial and Resources

This document provides a reference for common MongoDB commands and operations.

### 📃 Basic Commands

- `cls` - Clear the screen.
- `exit` - Exit MongoDB shell.

### 📃 MongoDB Shell

- `mongosh` - Start the MongoDB shell.

### 📃 Database Operations

- `use TestDB` - Switch to the `TestDB` database. If it doesn't exist, it will be created.
- `db.dropDatabase()` - Drop the current database.

### 📃 Collection Operations

- `db.createCollection("students")` - Create a collection named `students`.

### 📃 Document Operations

- `db.students.insertOne({name: "John", age: 25, gpa:3.2})` - Insert one document into the `students` collection.
- `db.students.find()` - Find all documents in the `students` collection.
- `db.students.insertMany([{name: "Jane", age: 22, gpa:3.5}, {name: "Doe", age: 23, gpa:3.8}])` - Insert multiple documents into the `students` collection.

### 📃 Data Types in MongoDB

- Insert a document with various data types:
  ```json
  db.students.insertOne({
      "name": "larry",
      "age": 32,
      "gpa": 3.8,
      "fullTime": false,
      "registerDate": "2023-01-02T00:00:00Z",
      "graduationDate": null,
      "courses": ["ENG", "Math", "Chem"],
      "address": {
          "street": "123 KalirBazar",
          "city": "Narayanganj",
          "zipCode": 1300
      }
  })
  ```

### 📃 Query Operations (Sorting, Limiting, and Projection)

- `db.students.find({name: "Jane"})` - Find documents where the name is "Jane".
- `db.students.find().sort({name: 1})` - Sort documents by name in ascending order.
- `db.students.find().sort({name: -1})` - Sort documents by name in descending order.
- `db.students.find().sort({name: 1, age: -1})` - Sort documents by name in ascending order and age in descending order.
- `db.students.find().limit(2)` - Limit the result to 2 documents.
- `db.students.find().sort({gpa: -1}).limit(1)` - Find the document with the highest GPA.
- `db.students.find({}, {name: true})` - Find documents and return only the `name` field.
- `db.students.find({}, {_id: false, name: true})` - Find documents and return only the `name` field without the `_id` field.
- `db.students.find({}, {_id: false, name: true, gpa: true})` - Find documents and return the `name` and `gpa` fields without the `_id` field.

## 📃 Update Operations

- `db.students.updateOne({name: "Jane"}, {$set: {gpa: 3.9}})` - Update the GPA of the first document where the name is "Jane".
- `db.students.updateMany({name: "Jane"}, {$set: {gpa: 3.9}})` - Update the GPA of all documents where the name is "Jane".
- `db.students.updateOne({name: "Jane"}, {$unset: {gpa: ""}})` - Remove the GPA field from the first document where the name is "Jane".

## 📃 Delete Operations

- `db.students.deleteOne({name: "Jane"})` - Delete the first document where the name is "Jane".

## 📃 Advance Query Operations

- `db.students.find({name: {$ne: "Mridul"}})` - Find all documents where the name is not "Mridul".
- `db.students.find({age: {$gt: 25}})` - Find all documents where the age is greater than 25.
- `db.students.find({age: {$gte: 25}})` - Find all documents where the age is greater than or equal to 25.
- `db.students.find({age: {$lt: 25}})` - Find all documents where the age is less than 25.
- `db.students.find({age: {$lte: 25}})` - Find all documents where the age is less than or equal to 25.
- `db.students.find({name: {$in: ["Mridul", "Jane"]}})` - Find all documents where the name is either "Mridul" or "Jane".
- `db.students.find({$and: [{name: "Mridul"}, {age: 25}]})` - Find all documents where the name is "Mridul" and the age is 25.
- `db.students.find({$or: [{name: "Mridul"}, {age: 25}]})` - Find all documents where the name is "Mridul" or the age is 25.
- `db.students.find({$and: [{name: "Mridul"}, {age: {$gt: 25}}]})` - Find all documents where the name is "Mridul" and the age is greater than 25.

<hr>

### 🔔 MongoDB Setup : [👉 How to Setup Mongo DB](https://youtu.be/uo3VHw8v_GE?si=OOmPct4ZD_iMNKq0)

- Download MongoDB Community Version ( [👉 Click Here](https://www.mongodb.com/try/download/community) )
- Download MongoDB Shell ( [👉 Click Here](https://www.mongodb.com/try/download/shell) )
- Cloud MongoDB Atlas ( [👉 Click Here](https://cloud.mongodb.com/v2#/org/65fd9fbfa0744761b52cafcd/) )
- Setup Complete MongoDB in Local ( [👉 Click Here](https://www.youtube.com/watch?v=jvaBaxlTqU8) )

### 🌿 Test MongoDB Connection in Local:

- Installing MongoDB & MongoDB Compass ( [👉 Click Here](https://youtu.be/oMrKVEedpHg?si=9QeoXAEBqAZVTVYi) )
- CRUD Operations in MongoDB ( [👉 Click Here](https://www.youtube.com/watch?v=9Om0FMBz1yU) )

#### 🌱 REST API using NodeJS and MongoDB :

- Best way to Learn : ( [👉 Complete Playlist](https://youtube.com/playlist?list=PLdHg5T0SNpN3EoN3PEyCmPR42Ok_44OFT&si=5lAW2J6RDYipqv-D) )
- Practice Source Code : ( [👉 GitHub Code](https://github.com/trulymittal/Nodejs-REST-API) )

#### 🌱 More Learning Resources : ( [👉 Doc Link](https://docs.google.com/document/d/130MksW3ShBgtmuqaUz5XCv7GvOxJ97StZ08W0UMBW-s/edit?usp=sharing) )

- Todo App using MongoDb and Host in Vercel
- Blog Website using MongoDb

<hr>

#### 🅱️ MongoDB Issues and Solutions

- [👉 MongoDB Error: MongoServerSelectionError: 64060000:error:0A000438:SSL routines:ssl3_read_bytes:tlsv1 alert internal error:c:\ws\deps\openssl\openssl\ssl\record\rec_layer_s3.c:1586:SSL alert number 80 at Timeout.\_onTimeout.](https://www.reddit.com/r/mongodb/comments/16bcsb4/mongoserverselectionerror/)
