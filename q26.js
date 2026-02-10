//create folder dbshards
//create folder config, congifr, s1,s1r,s2,sr2 indise dbshards
// these six folders represent servers
//note: located in six different loactions or countries

//start new mongo db server as config server
 mongod -configsvr --replSet cf --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\config" --port 27018
 mongod -configsvr --replSet cf --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\configr" --port 27019

 //now configure both server to replica set on third tab
 mongosh --port 27018

 //now initiate
 rs.initiate({
    _id:"cf",
    members:[{_id:0,host:"127.0.0.1:27018"},
            {_id:2,host:"127.0.0.1:27019"}   
    ]
 })

 rs.config()
 rs.status()

 //now start server for shard1
mongod --shardsvr -replSet s1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\s1" --port 27020
mongod --shardsvr -replSet s1 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\s1r" --port 27021

//now configure both shard server at port 27020
mongosh --port 27020

//now initiate
rs.initiate({
    _id:"s1",
    members:[{_id:0,host:"127.0.0.1:27020"},
            {_id:1,host:"127.0.0.1:27021"}   
    ]
 })

 rs.config()
 rs.status()

 // now start server for shard2
mongod --shardsvr -replSet s2 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\s2" --port 27022
mongod --shardsvr -replSet s2 --dbpath "C:\Users\rajsa\Desktop\Mongo-Replica\dbShards\s2r" --port 27023

//configure server at port 27022
mongosh --port 27022

//now initiate
rs.initiate({
    _id:"s2",
    members:[{_id:0,host:"127.0.0.1:27022"},
            {_id:1,host:"127.0.0.1:27023"}   
    ]
 })

 rs.config()
 rs.status()

//start server for routing service on new tab
mongos --configdb cf/127.0.0.1:27018,127.0.0.1:27019 --port 27050

//now get to the client on new tab
mongosh --port 27050

//now add shard to client, run on 27050
sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021")
sh.addShard("s2/127.0.0.1:27022,127.0.0.1:27023")
sh.status()

//now create database on 27050
use icici
//now enable sharding
sh.enableSharding("icici")
sh.shardCollection("icici.coustomers",{_id:1})
sh.getShardedDataDistribution()
sh.status()
show cllections
//now add some document in collection
db.customers.insertOne({
        _id:1,
        name: "Customer 1"
})

db.customers.find()

//update the chunksize means storage of data
//run it on config shell to change the setting of chunksize
db.settings.updateOne(
        {_id:"chunksize"},
        {$set: {value:1}},
        {upset: true}
)
//now insert multiple data
for(let i=2;i<=10000;i++){
        db.customers.insertOne({
                _id:i,
                name: "customer "+i
        })
}
//now chech shared data distribution
