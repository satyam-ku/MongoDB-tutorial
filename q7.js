//db.employees.updateOne()

db.employees.updateOne(
    {name: "viv"}, // filter condition
    {$set: {salary: 60000}} // update operation
)

db.employees.updateOne(
    {name: "viv"}, // filter condition
    {$inc: {salary: 1000}} //increase operation
)

// update many documents
db.employees.updateMany(
    {}, // filter condition
    {$inc: {salary: 1000}} //increase operation
)

db.employees.updateMany(
    {email: "abc@gmail.com"},
    {$set: {department: "hr"}}, // update operation
    {upsert: true} // if document not found then create a new document, if found then update
)

// db.employees.deleteOne({condition})
db.employees.deleteOne({name: "xyz"}) // delete first matching document 

