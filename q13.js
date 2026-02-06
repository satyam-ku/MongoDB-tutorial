db.employees.find(
    {},
    {_id: 0,name: 1, department:1}
)

db.employees.find(
    {},
    {_id: 0,name: 1, dept: "$department"} // renaming department to dept for output only
)

db.users.insertMany(
    [
        {name: "Yash", age: 25, city: "Pune"},
        {name: "Amit", age: 30, city: "Mumbai"},
        {name: "Sneha", age: 22, city: "Bangalore"}
    ]
)

db.users.insertOne(
    {
        name: "Riya",
        age: 28,
        address: {
            street: "MG Road",
            city: "Chennai",
            zip: "600001"
        }
    }
)

db.users.insertMany(
   [    {
            name: "Anuj",
            age: 25,
            address: {
                street: "MG Road",
                city: "Chennai",
                zip: "600001"
            }
        }
    ]
)

db.users.find({},
    {name:1, age:1, "address.city":1, _id:0} // to project nested field 
)

db.users.find({},
    {name:1, age:1, _id:0, city: "$address.city"} // renaming nested field city to city for output only
)

db.users.find({},
    {name:1, age:1, _id:0, city: "$address.city", zip: "$address.zip"} // renaming nested field city to city and zip to zip  for output only
)

//add skills array for each users
db.users.updateMany(
    {},
    {$set: {skills: ["python", "java"]}}
)

db.users.updateMany(
    {},
    {$unset: {skills: 1}} // to remove skills array from all documents
)

db.users.updateOne(
    {name: "Yash"},
    {$addToSet: {skills: ".NET"}} // to add .NET to skills array for Yash
)

db.users.find({},
    {_id:0, name:1, skills:1} // show name and skills array only
)

db.users.aggregate(
    [
        {$project: {_id:0, name:1, skills:1}}
    ]
)

db.users.aggregate(
    [
        {$project: {_id:0, name:1, skills:1}},
        {$unwind: "$skills"} // to deconstruct skills array
        // unwind is use for deconstruct the array in normal documents
    ]
)
