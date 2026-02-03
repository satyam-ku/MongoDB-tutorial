db.employees.find(
    {email: "abc@gmail.com"}
).explain("executionStats") // Provides execution statistics for the query searching for employee with email "abc@gmail.com".
// The explain method helps analyze the performance of the query.3

db.employees.createIndex(
    {email: 1} // Creating an index on the email field in ascending order to optimize queries searching by email.
)

db.employees.getIndexes() // Lists all indexes on the employees collection to review existing indexes and their configurations.

db.employees.dropIndex({email: 1}) // Drops the index on the email field from the employees collection.

db.employees.find(
    {},
    {_id:0, name:1} // Retrieves only the name field for all employees, excluding the _id field from the results.
)

db.employees.find(
    {},
    {_id:0, name:1}
).sort({name: 1}) // Retrieves only the name field for all employees, sorted in ascending order by name.

db.employees.find(
    {},
    {_id:0, name:1}
).collation({locale: "en", strength: 2}).sort({name: 1}) // Retrieves only the name field for all employees with case-insensitive collation settings.