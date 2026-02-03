db.employees.find(
    {
        locations : "Ind"
    }
)

db.employees.updateOne(
    { name: "pqr" }, 
    { $push: { location: "AUS" } } // Adding "AUS" to the locations array for employee "pqr"
)

db.employees.updateOne(
    { name: "pqr" }, 
    { $pop: { location: -1 } } // Removing the last element from the locations array for employee "pqr"
)

db.employees.updateMany(
    {},
    {$push: {skills: "JavaScript"}} // Adding "JavaScript" to the skills array for all employees
)

db.employees.updateOne(
    {name: "pqr"},
    {$push: {skills: ".NET"}} // Adding ".NET" to the skills array for employee "pqr"
)

db.employees.updateOne(
    {name: "pqr"},
    {$addToSet: {skills: ".NET"}} // Adding ".NET" to the skills array for employee "pqr" only if it doesn't already exist
)

db.employees.updateOne(
    {name: "pqr"},
    {$pull: {skills: ".NET"}} // Removing all ".NET" from the skills array for employee "pqr"
)
