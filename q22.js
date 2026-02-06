db.createCollection("vendors") //create collection vendors

db.vendors.insertOne({
    name: "Vicky",
    age: 30
})

db.createCollection("vendors",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age"],
            properties: {
                name: {bsonType: "string"},
                age: {bsonType: ["int", "null"]}
            }
        }
    }
})//create collection vendor with validation and required fields name and age

db.createCollection("vendors",{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "age"],
            properties: {
                name: {bsonType: "string"},
                age: {bsonType: "int", minimum: 18, maximum: 65}
            }
        }
    }
})//create collection vendor with validation and required fields name and age with age between 18 and 65

db.vendors.insertOne({
    name: "Vicky",
    age: 30
})

db.vendors.insertOne({
    name: "",   
    age: 45
})