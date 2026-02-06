db.employees.aggregate(
    [
        {$project: {_id:0, name:1, salary:1}}
    ]
)

db.employees.aggregate(
    [
        {
            $project: {
                _id:0, 
                name:1, 
                salary:1,
                grade:{
                    $cond: [ // gte: [condition], value if true, value if false
                        {$gte: ["$salary", 45000]}, "Grade A", "Grade B" 
                        // if salary >= 45000 then Grade A else Grade B
                    ]
                }
            }
            
        }
    ]
)

db.employees.aggregate(
    [
        {
            $project: {
                _id:0, 
                name:1, 
                salary:1,
                grade: {
                    $cond: { //if : {condition}, then: value if true, else: value if false
                        if: {$gte: ["$salary", 45000]}, then: "Grade A", else: "Grade B"
                        // another way of writing the same condition
                    }
                }
            }
        }
    ]
)

db.employees.aggregate(
    [
        {
            $project: {
                _id:0,
                name:1, 
                salary:1,
                grade: { // $switch : { branches: [ { case: <expression>, then: <value> }, ... ], default: <value> }
                    $switch: {
                        branches: [
                            { case: {$gte: ["$salary", 65000]}, then: "Grade A" },
                            { case: {$gte: ["$salary", 50000]}, then: "Grade B" },
                            { case: {$gte: ["$salary", 30000]}, then: "Grade C" }
                        ],
                        default: "Grade D"
                    }
                }
            } 
        }
    ]
)