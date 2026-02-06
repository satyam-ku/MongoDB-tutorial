//$regex is use for pattern matching in MongoDB

db.employees.find({
    name: {$regex: "jack", $options: "i"}
})// find all employees with name containing "Jack" case insensitive

db.employees.find({
    name: {$regex: "^Jack$"}
})// find all employees with name exactly "Jack" case sensitive

db.employees.find({
    name: {$regex: "^a", $options: "i"}
})// find all employees with name starting with "a" case insensitive

db.employees.find({
    name: {$regex: "k$", $options: "i"}
})// find all employees with name ending with "k" case insensitive

db.employees.find({
    name: {$regex: ".*c.*", $options: "i"}
})// find all employees with name containing "c" case insensitive
