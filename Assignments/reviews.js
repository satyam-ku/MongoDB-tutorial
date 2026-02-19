db.createCollection("reviews", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["courseId", "studentId", "rating"],
      properties: {
        courseId: { bsonType: "string" },
        studentId: { bsonType: "string" },
        rating: { bsonType: "int", minimum: 1, maximum: 5 },
        comment: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
})


db.reviews.insertMany([
{ _id:"r1", courseId:"c1", studentId:"u1", rating:5, comment:"Excellent!", createdAt:new Date() },
{ _id:"r2", courseId:"c2", studentId:"u2", rating:4, comment:"Very Good", createdAt:new Date() },
{ _id:"r3", courseId:"c3", studentId:"u3", rating:5, comment:"Loved it!", createdAt:new Date() },
{ _id:"r4", courseId:"c4", studentId:"u4", rating:4, comment:"Helpful", createdAt:new Date() },
{ _id:"r5", courseId:"c5", studentId:"u5", rating:5, comment:"Best Course!", createdAt:new Date() },
{ _id:"r6", courseId:"c6", studentId:"u1", rating:3, comment:"Good", createdAt:new Date() },
{ _id:"r7", courseId:"c7", studentId:"u2", rating:4, comment:"Nice", createdAt:new Date() },
{ _id:"r8", courseId:"c8", studentId:"u3", rating:5, comment:"Awesome", createdAt:new Date() },
{ _id:"r9", courseId:"c9", studentId:"u4", rating:4, comment:"Well Explained", createdAt:new Date() },
{ _id:"r10", courseId:"c10", studentId:"u5", rating:5, comment:"Highly Recommended", createdAt:new Date() }
])
