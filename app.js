const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

//CREATE SCHEMA WITH VALIDATION

const fruitSchema = new mongoose.Schema({
    name: {
        type: String
        //required: [true, "Name not specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const cherry = new Fruit({
    rating: 5,
    review: "Not bad!"
});

//cherry.save();

// const banana = new Fruit({
//     name: "Banana",
//     rating: 7,
//     review: "Pretty solid as a fruit.",
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "Pretty solid as a fruit.",
// });

// const grapes = new Fruit({
//     name: "Grapes",
//     rating: 4,
//     review: "Pretty solid as a fruit.",
// });

// const mango = new Fruit({
//     name: "Mango",
//     rating: 8,
//     review: "Pretty solid as a fruit.",
// });

const woodApple = new Fruit({
    name: "Wood Apple",
    rating: 8,
    review: "Nice",
});

woodApple.save();

//INSERT MANY DATA

// const bulkFruit = [banana, orange, grapes, mango];

// Fruit.insertMany(bulkFruit)
//     .then(function () {
//         console.log("Fruit bulk insert complete!");
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

//SEARCH DATA

// Fruit.find()
//     .then((fruits) => {
//         for (const fruit of fruits) {
//             console.log("Fruit Name:", fruit.name);
//         }
//         mongoose.connection.close();
//     })

//     .catch((err) => {
//         console.error("Error:", err);
//     });

//DELETE DATA

// Fruit.deleteOne({ _id: "6633f0e558ca6a1137374736" })
//     .then(function () {
//         console.log("Deleted!");
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFood: fruitSchema
})

const People = mongoose.model("People", peopleSchema);

const people = new People({
    name: "Bob",
    age: 25,
    favoriteFood: woodApple
})

people.save();

// People.updateOne({_id: "6633b7c73bc458d3060d2ceb"}, {favoriteFood: mango})
//     .then(function(){
//         console.log("update success!")
//     })
//     .catch(function(err){
//         console.log(err);
//     })