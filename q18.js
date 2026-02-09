db.employees.aggregate(
    [
        {$lookup: 
            {
                from: "orders",
                localField: "_id",
                foreignField: "employee_id",
                as: "orders"
            }
        },
        {$unwind: "$orders"},
        {$project: {
            id: 0,
            name: 1,
            department: 1,
            product: "$orders.product",
            ordervalue: "$orders.ordervalue"
        }},
        {$out: "OrderReport"} //

    ]
)

//
db.courses.aggregate(
    [
        {
            $lookup: {
            from: "modules",
            let:{courseId: "$_id"},
            pipeline:
                [
                    {$match: { $expr:{ $eq:["$courseId", "$$courseId"]}}}
                ],
                as : "modules"
            }
        }
        
    ]
)

db.courses.aggregate(
    [
        {
            $lookup: {
            from: "modules",
            let:{courseId: "$_id"},
            pipeline:
                [
                    {$match: { $expr:{ $eq:["$courseId", "$$courseId"]}}},
                    {$lookup:
                        {
                            from: "lessons",
                            let : {moduleId:"$_id"},
                            pipeline: [
                               {$match: { $expr:{ $eq:["$moduleId", "$$moduleId"]}}} 
                            ],
                            as: "lessons"
                        }
                    }
                ],
                as : "modules"
            }
        }
        
    ]
)