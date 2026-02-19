db.createCollection("lessons", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["courseId", "title"],
      properties: {
        courseId: { bsonType: "string" },
        title: { bsonType: "string" },
        videoUrl: { bsonType: "string" },
        duration: { bsonType: "int" },
        order: { bsonType: "int" }
      }
    }
  }
})

db.lessons.insertMany([
{ _id:"l1", courseId:"c1", title:"Intro to MongoDB", videoUrl:"url1", duration:20, order:1 },
{ _id:"l2", courseId:"c1", title:"CRUD Operations", videoUrl:"url2", duration:30, order:2 },
{ _id:"l3", courseId:"c2", title:"Node Basics", videoUrl:"url3", duration:25, order:1 },
{ _id:"l4", courseId:"c3", title:"React Setup", videoUrl:"url4", duration:40, order:1 },
{ _id:"l5", courseId:"c4", title:"Python Intro", videoUrl:"url5", duration:35, order:1 },
{ _id:"l6", courseId:"c5", title:"ML Basics", videoUrl:"url6", duration:50, order:1 },
{ _id:"l7", courseId:"c6", title:"AWS Intro", videoUrl:"url7", duration:45, order:1 },
{ _id:"l8", courseId:"c7", title:"Security Fundamentals", videoUrl:"url8", duration:30, order:1 },
{ _id:"l9", courseId:"c8", title:"Flutter Setup", videoUrl:"url9", duration:20, order:1 },
{ _id:"l10", courseId:"c9", title:"Docker Basics", videoUrl:"url10", duration:40, order:1 }
])
