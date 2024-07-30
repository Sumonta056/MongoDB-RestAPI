cls - clear
exit - exit mongodb

mongosh // mongoshell

use TestDB // go to TestDB

use TestDB // create TestDB

db.dropDatabase() // drop database

db.createCollection("students") // create collection students

db.students.insertOne({name: "John", age: 25, gpa:3.2}) // insert one document

db.students.find() // find all documents

db.students.insertMany([{name: "Jane", age: 22, gpa:3.5}, {name: "Doe", age: 23, gpa:3.8}]) // insert many documents

// datatype in mongo
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

db.students.find({name: "Jane"}) // find by name

db.students.find().sort({name:1}) // sort by name ascending

db.students.find().sort({name:-1}) // sort by name descending

db.students.find().sort({name:1, age:-1}) // sort by name ascending and age descending

db.students.find().limit(2) // limit 2 documents

db.students.find().sort({gpa:-1}).limit(1) // find highest gpa

db.students.find({},{name:true} ) // find only name field

db.students.find({},{_id:false, name:true}) // find only name without id

db.students.find({},{_id:false, name:true , gpa:true})


db.students.updateOne({name: "Jane"}, {$set: {gpa: 3.9}}) // update gpa of Jane
db.students.updateMany({name: "Jane"}, {$set: {gpa: 3.9}}) // update gpa of Jane

db.students.updateOne({name: "Jane"}, {$unset: {gpa: ""}}) // remove gpa of Jane

db.students.deleteOne({name: "Jane"}) // delete Jane

db.students.find({name: {$ne: "Mridul"}}) // find all except Mridul

db.students.find({age: {$gt: 3.5}}) // find age greater than 25

db.students.find({age: {$gte: 3.5}}) // find age greater than or equal to 25

db.students.find({age: {$lt: 3.5}}) // find age less than 25

db.students.find({age: {$lte: 3.5}}) // find age less than or equal to 25

db.students.find({name: {$in: ["Mridul", "Jane"]}}) // find name in Mridul or Jane

db.students.find({$and: [{name: "Mridul"}, {age: 25}]}) // find name Mridul and age 25

db.students.find({$or: [{name: "Mridul"}, {age: 25}]}) // find name Mridul or age 25

db.students.find({$and: [{name: "Mridul"}, {age: {$gt: 25}}]}) // find name Mridul and age greater than 25
