db.employees.find(
    {
        department : { $in: ["Sales", "Marketing"] } // Find employees in Sales or Marketing departments
    }
)

db.employees.find(
    {
        department : { $nin: ["Sales", "Marketing"] } // Find employees NOT in Sales or Marketing departments
    }
)

//only for creationg without inserting data
db.createCollection("students")

db.students.renameCollection("learners") // Renaming collection from students to learners

db.learners.drop() // Dropping the learners collection

db.dropDatabase('databasename') // Dropping the entire database named 'databasename'
//if we dont paass arugument it will drop the current database.

db.getCollectionNames() // Lists all collections in the current database

