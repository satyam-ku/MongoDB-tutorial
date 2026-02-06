db.createView("departmentView", "employees",
    [
        {$lookup: 
            {
                from : departments,
                localField: "department_id",
                foreignField: "_id",
                as: "department"
            }
        },
        {$unwind: "$department"},
        {$project: {
            id: 0,
            name: 1,
            department: "$department.name"
        }}
    ]
)