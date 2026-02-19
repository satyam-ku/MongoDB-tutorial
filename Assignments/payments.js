db.createCollection("payments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "amount", "paymentStatus"],
      properties: {
        studentId: { bsonType: "string" },
        amount: { bsonType: "double" },
        paymentStatus: { enum: ["pending", "completed", "failed"] },
        transactionId: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})


db.payments.insertMany([
{ _id:"p1", studentId:"u1", amount:999, paymentStatus:"completed", transactionId:"TXN001", createdAt:new Date() },
{ _id:"p2", studentId:"u2", amount:1499, paymentStatus:"completed", transactionId:"TXN002", createdAt:new Date() },
{ _id:"p3", studentId:"u3", amount:1299, paymentStatus:"pending", transactionId:"TXN003", createdAt:new Date() },
{ _id:"p4", studentId:"u4", amount:1999, paymentStatus:"completed", transactionId:"TXN004", createdAt:new Date() },
{ _id:"p5", studentId:"u5", amount:2499, paymentStatus:"completed", transactionId:"TXN005", createdAt:new Date() },
{ _id:"p6", studentId:"u1", amount:1799, paymentStatus:"failed", transactionId:"TXN006", createdAt:new Date() },
{ _id:"p7", studentId:"u2", amount:1599, paymentStatus:"completed", transactionId:"TXN007", createdAt:new Date() },
{ _id:"p8", studentId:"u3", amount:1399, paymentStatus:"completed", transactionId:"TXN008", createdAt:new Date() },
{ _id:"p9", studentId:"u4", amount:1899, paymentStatus:"completed", transactionId:"TXN009", createdAt:new Date() },
{ _id:"p10", studentId:"u5", amount:2199, paymentStatus:"completed", transactionId:"TXN010", createdAt:new Date() }
])
