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