db.employees.aggregate(
    [
        {$project: {_id: 0,name: 1,}},
        {$sort: {name: 1}}
    ]
)// this will sort the employee names in ascending order without considering case sensitivity

db.employees.aggregate(
    [
        {$project: {_id: 0,name: 1,}},
        {$sort: {name: 1}}
    ],
    { collation: { locale: "en", strength: 2 } }
)// this will sort the employee names in ascending order considering case sensitivity

