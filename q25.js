//loged in into replica set
//created hdfc database
//inserterd data into accounts collection

const session = db.getMongo().startSession()

session.startTransaction() // start transaction

var custCollection = session.getDatabase("hdfc]").customers // creat variable for doing starnscyion

custCollection.updateOne({_id: "c1"}, {$inc: {balance: -10000}}) // doing tranction

custCollection.updateOne({_id: "c2"}, {$inc: {balance: 10000}}) // doing another taraction

session.commitTransaction() // comit tranction
// if we dont want to complete tranction 
session.abortTransaction() // camcel the transaction

session.endSession() //to end session

