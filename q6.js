db.employees.find(
    {department: "sales"}
)

db.employees.find(
    {department: "sales", salary: {$gte:50000}} //shows the department sales with salary greater than or equal to 50000

)

db.employees.find(
    {department: "sales", salary: {$gte:50000}} //shows the department sales with salary greater than or equal to 50000

)

db.employees.find(
    { $and: [{department: "sales"}, {salary: {$gte:50000}}] } 
    //
)

db.employees.find(
    { $or: [{department: "sales"}, {salary: {$gte:50000}}] } 
)

//{$in: {name: ["abc", "xyz"]}} // name is either abc or xyz

db.employees.find(
    {name: {$in: ["abc", "xyz"]}}
)

db.employees.find(
    {name: {$exists: true}} // to check whether the field is present or not
)