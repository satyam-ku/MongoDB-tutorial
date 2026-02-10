//user management
//use admin

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [{role: "root", db: "admin"}]
    }
)

//for login to admin database
mongosh --username admin -authenticationDatabase admin
//now enter password

db.createUser({
    user: "user1",
    pwd: "user1",
    roles: [{role: "read", db:"lpu"}]
})
//put this in lpu database
db.createUser({
    user: "user1",
    pwd: "user1",
    roles: [{role: "read", db:"lpu26"}]
})
// now login through
mongosh --username user1 -authenticationDatabase lpu26

// from admin database
//use lpu26 database 
db.getUsers() //show all users in lpu26 database
db.dropUser("user1") //drop user1 from lpu26 database

// for login to admin database fromm command line
mongodb://username:password@localhost:27017/databasename
// for login to admin database fromm command line
mongodb://admin:admin@localhost:27017/admin

//connection string for mongosh
mongosh "mongodb://admin:admin@127.0.0.1:27017/admin"


