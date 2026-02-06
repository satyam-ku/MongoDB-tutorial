db.orders.insertOne(
    {
        empid: ObjectId("64a7f0c2f1d2c4b5e6a7b8c9"),
        product: "Desktop",
        orderValue: 12000
    }
)

db.orders.aggregate(
    [
        {$project: {_id:0, empid:1, product:1, orderValue:1} }
    ]
)

db.orders.aggregate(
    [
        {$lookup: {
            from: "employees",
            localField: "empid",
            foreignField: "_id",
            as: "employeeDetails" }
        }
    ]
)

db.orders.aggregate(
    [
        {$lookup: {
            from: "employees",
            localField: "empid",
            foreignField: "_id",
            as: "employeeDetails" }
        },
        {$unwind: "$employeeDetails"},
        {$project: {name: "$employeeDetails.name", product: 1, orderValue: 1}}
    ]
)

db.employees.aggregate(
    [
        {$project: {name: 1, product: "$orders.product", orderValue: "$orders.orderValue", _id:0} }
    ]
)

