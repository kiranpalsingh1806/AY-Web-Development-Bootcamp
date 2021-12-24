const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty Solid as a fruit."
});

// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best Fruit"
})

const orange = new Fruit({
    name: "Orange",
    score: 9,
    review: "Great in summer"
})

const banana = new Fruit({
    name: "Banana",
    score: 10,
    review: "Great fruit again !!!"
})

Fruit.insertMany([kiwi, orange, banana], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});