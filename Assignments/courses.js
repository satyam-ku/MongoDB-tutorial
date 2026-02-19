db.createCollection("courses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "price", "instructorId", "categoryId"],
      properties: {
        title: { bsonType: "string" },
        description: { bsonType: "string" },
        price: { bsonType: "double" },
        instructorId: { bsonType: "string" },
        categoryId: { bsonType: "string" },
        rating: { bsonType: "double" },
        totalStudents: { bsonType: "int" },
        level: { bsonType: "string" }
      }
    }
  }
})

db.courses.insertMany([
{ _id:"c1",
     title:"MongoDB Basics",
     description:"Learn MongoDB",
     price:999, 
    instructorId:"u6",
     categoryId:"cg2", 
    rating:4.5,
     totalStudents:3,
     level:"Beginner"

 },
{ _id:"c2",
     title:"NodeJS Mastery",
     description:"Backend Development", 
    price:1499, 
    instructorId:"u7", 
    categoryId:"cg1",
     rating:4.7,
     totalStudents:5, 
    level:"Intermediate" 

},
{ 
    _id:"c3",
     title:"ReactJS Complete Guide",
     description:"Frontend Dev", 
    price:1299, 
    instructorId:"u8",
     categoryId:"cg1",
     rating:4.8,
     totalStudents:4,
     level:"Beginner" 

},
{ 
    _id:"c4",
     title:"Python for Data Science",
     description:"Data Science Course",
     price:1999,
     instructorId:"u9", 
    categoryId:"cg2",
     rating:4.6,
     totalStudents:6,
     level:"Intermediate" 

},
{
     _id:"c5", 
    title:"Machine Learning A-Z", 
    description:"ML Course", 
    price:2499,
     instructorId:"u10", 
    categoryId:"cg3",
     rating:4.9,
     totalStudents:8, 
    level:"Advanced" 

},
{ 
    _id:"c6",
     title:"AWS Cloud Practitioner",
     description:"Cloud Basics", 
    price:1799, 
    instructorId:"u6", 
    categoryId:"cg5",
    rating:4.4,
     totalStudents:2,
     level:"Beginner" 

},
{ 
    _id:"c7",
     title:"Cyber Security Essentials", 
    description:"Security Course",
     price:1599, 
    instructorId:"u7", 
    categoryId:"cg6",
     rating:4.3, totalStudents:3, 
    level:"Intermediate" 

},
{ 
    _id:"c8", title:"Flutter App Development",
     description:"Mobile Apps",
     price:1399,
     instructorId:"u8", 
    categoryId:"cg4",
     rating:4.5,
     totalStudents:4, level:"Beginner" },
{ 
    _id:"c9", 
    title:"DevOps with Docker", 
    description:"DevOps Course",
     price:1899, 
    instructorId:"u9",
     categoryId:"cg8", 
    rating:4.6,
     totalStudents:5,
     level:"Advanced" 

},
{
     _id:"c10",
     title:"Blockchain Fundamentals",
     description:"Blockchain Course", 
    price:2199,
     instructorId:"u10", 
    categoryId:"cg9",
     rating:4.2, 
    totalStudents:3,
     level:"Intermediate"
}])