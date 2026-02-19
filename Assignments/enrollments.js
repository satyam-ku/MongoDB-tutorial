db.createCollection("enrollments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["studentId", "courseId"],
      properties: {
        studentId: { bsonType: "string" },
        courseId: { bsonType: "string" },
        enrolledAt: { bsonType: "date" },
        paymentId: { bsonType: "string" }
      }
    }
  }
})


db.enrollments.createIndex({ courseId: 1, studentId: 1 }, { unique: true })

db.enrollments.insertMany([
{ _id:"e1", studentId:"u1", courseId:"c1", enrolledAt:new Date(), paymentId:"p1" },
{ _id:"e2", studentId:"u2", courseId:"c2", enrolledAt:new Date(), paymentId:"p2" },
{ _id:"e3", studentId:"u3", courseId:"c3", enrolledAt:new Date(), paymentId:"p3" },
{ _id:"e4", studentId:"u4", courseId:"c4", enrolledAt:new Date(), paymentId:"p4" },
{ _id:"e5", studentId:"u5", courseId:"c5", enrolledAt:new Date(), paymentId:"p5" },
{ _id:"e6", studentId:"u1", courseId:"c6", enrolledAt:new Date(), paymentId:"p6" },
{ _id:"e7", studentId:"u2", courseId:"c7", enrolledAt:new Date(), paymentId:"p7" },
{ _id:"e8", studentId:"u3", courseId:"c8", enrolledAt:new Date(), paymentId:"p8" },
{ _id:"e9", studentId:"u4", courseId:"c9", enrolledAt:new Date(), paymentId:"p9" },
{ _id:"e10", studentId:"u5", courseId:"c10", enrolledAt:new Date(), paymentId:"p10" }
])
