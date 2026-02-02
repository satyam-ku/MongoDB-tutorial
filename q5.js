db.employees.find(
    {department: "hr"}
)

db.employees.find(
    {salary: 50000}
)

db.employees.find(
    {department: {$eq:"sales"}} // equal to operator
)

db.employees.find(
    {salary: {$gt:50000}} // greater than operator
)

db.employees.find(
    {salary: {$lt:60000}} // less than operator
)

db.employees.find(
    {salary: {$gte:50000}} // greater than or equal to operator
)

db.employees.find(
    {salary: {$lte:50000}} // less than or equal to operator
)

db.employees.find(
    {salary: {$ne:50000}} // not equal to operator
)