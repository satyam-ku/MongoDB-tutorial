// db.employees.find({filter},{component to include or exclude})

db.employees.find(
    {department: "sales"},
    {_id:0,name:1} // include name field and exclude _id field
)

db.employees.find(
    {
        department: "sales",
        salary: 70000 // filter with multiple conditions
    }
)


db.employees.find(
    {department: "sales"},
    {name:0}
)

//db.employees.find().limit() //get first 3 documents from the collection
db.employees.find(
    {department: "sales"},
    {name:0}
).limit(3) // limit the output to 3 document only based on date

//db.employees.find().skip() // skip first 2 documents in the output
db.employees.find(
    {department: "sales"},
    {name:0}
).skip(1) // skip first 2 documents in the output

db.employees.find().limit(3).skip(1) 
// first skip 1 document and then limit the output to 2 documents only

//db.employees.find({},{}).sort({}) //
db.employees.find().sort({salary:1}) // sort in ascending order based on salary

db.employees.find().sort({salary:-1}) // sort in descending order based on salary

db.employees.find().limit(3).skip(1).sort({salary:-1}) 
// first skip 1 document and then limit the output to 2 documents only and sort in descending order based on salary

