//for single insertion of object.
db.employees.insertOne(
    {
        name: "viv",
        email: "raj@mail.com",
        department: "sales",
        salary: 50000,
        location: ["Ind", "Hz"],
        date: Date()
    }
);

// for multiple insertion of objects.
// db.employees.insertMany([{}, {}, {}]);
db.employees.insertMany(
    [
        {
            name: "abc",
            email: "anuj@mail.com",
            department: "hr",
            salary: 60000,
            location: ["Ind", "Bgl"],
            date: Date()
        },

        {
            name: "xyz",
            email: "it@mail.com",
            department: "sales",
            salary: 70000,
            location: ["Ind", "Pune"],
            date: Date()

        },

        {
            name: "pqr",
            email: "nud@mail.com",
            department: "marketing",
            salary: 70000,
            location: ["Ind", "Pune"],
            date: Date()

        }
    ]
);