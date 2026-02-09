//create folder mongo-replica
//create folders -usa -uk -india inside mongo-replica

//commands
mongod -replSet rs1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\usa" --port 27018

mongod -replSet rs1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\uk" --port 27019

mongod -replSet rs1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\ind" --port 27020

//now log in to one of the instances and initiate the replica set
mongosh --port 27018
//congfigure the replica set
rs.initiate(
    {
        _id: "rs1",
        members:[
            {_id:0, host: "127.0.0.1:27018"},
            {_id:1, host: "127.0.0.1:27019"},
            {_id:2, host: "127.0.0.1:27020"}
        ]
    }
)//initiate the replica set with the name rs1 and the members with their respective ports

rs.config()//
rs.status()//check the status of the replica set

//open new tab
mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"
//connect to the replica set using mongosh


// use mydatabase
for(let i=1;i<=100;i++){
    db.users.insertOne({name: "User"+i, age: 21})
}

//for count documents -> db.users.countDocument()
db.users.insertOne({name: "John", age: 30})//insert a document into the collection

db.getMongo().setReadPref("secondary")//set the read preference to secondary

db.users.find()//read from the secondary node   


// for shutdon server
db.shutdownServer()

//to restart the server, run the mongod command again with the respective port and dbpath
mongod -replSet rs1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\usa" --port 27018 // -> (but it will be secondary now)

