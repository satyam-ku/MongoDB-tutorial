//aggeregate functions

// db.employees.aggregate(
//     [
//         {},{},{}
//     ]
// )

db.employees.aggregate(
    [
        {$match: {department: "sales"}}, // Stage 1: Filter employees in the Sales department
    ]
)

db.employees.aggregate(
    [
        {$project: {name: 1, salary: 1, department: 1, _id: 0}} // Stage 1: Project only specific fields (name, salary, department) and exclude _id
    ]
)

db.employees.find(
    {},
    {name: 1, salary: 1, department: 1, _id: 0} // Retrieve only specific fields (name, salary, department) and exclude _id
)

db.employees.aggregate(
    [
        {$sort: {salary: -1}} // Stage 1: Sort employees by salary in descending order
    ]
)

db.employees.aggregate(
    [
        {$skip: 2} // Stage 1: Skip the first 2 documents in the result set
    ]
)

db.employees.aggregate(
    [
        {$limit: 2} // Stage 1: Limit the result set to 2 documents
    ]
)

db.employees.aggregate(
    [
        {$match: {department: "sales"}}, // Stage 1: Match employees in the Sales department
        {$project: {name: 1, salary: 1, department: 1, _id: 0}}, // Stage 2: Project only specific fields (name, salary, department) and exclude _id
        {$sort: {name: -1}},
        {$skip: 1}
    ]
)

//C:\ProgramData\Microsoft\Diagnosis\FeedbackArchive
db.employees.aggregate(
    [
        {
            $group: {
                _id: "$department",
                totalSalary: {$sum: "$salary"},
            }
        } // Stage 1: Group employees by department and calculate the total salary for each department
    ]
)

    db.employees.aggregate(
        [
            {
                $group: {
                    _id: "$department",
                    totalSalary: {$sum: "$salary"},
                    maxSalary: {$max: "$salary"},
                    minSalary: {$min: "$salary"},
                    avgSalary: {$avg: "$salary"}
                }
            }
            // {$sort: {totalSalary: -1}},
            // {$limit: 2}
        ]
    )


db.employees.aggregate(
    [
        {$project: {
                _id: 1,
                name:1,
                salary:1,
                annualSalary: {$multiply: ["$salary", 12]}
            }
        }
    ]
)
