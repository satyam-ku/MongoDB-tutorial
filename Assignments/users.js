//create collection and do validation

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        password: { bsonType: "string" },
        role: { enum: ["student", "instructor","admin"] },
        createdAt: { bsonType: "date" },
        isVerified: { bsonType: "bool" }
      }
    }
  }
})

db.users.createIndex({ email: 1 }, { unique: true })

db.users.insertMany([
{
    _id:"u1", 
    name:"Rahul", 
    email:"rahul@gmail.com", 
    password:"pass123", 
    role:"student", 
    createdAt:new Date(), 
    isVerified:true 
},
{
    _id:"u2",
    name:"Aman", 
    email:"aman@gmail.com", 
    password:"pass123", 
    role:"student", 
    createdAt:new Date(), 
    isVerified:true 
},
{  
     _id:"u3", 
    name:"Priya", 
    email:"priya@gmail.com", 
    password:"pass123", 
    role:"student", 
    createdAt:new Date(), 
    isVerified:false 
},
{
    _id:"u4", 
    name:"Sneha",
    email:"sneha@gmail.com", 
    password:"pass123", 
    role:"student", 
    createdAt:new Date(), 
    isVerified:true 
},
{
    _id:"u5", 
    name:"Vikas", 
    email:"vikas@gmail.com", 
    password:"pass123", 
    role:"student", 
    createdAt:new Date(),
    isVerified:true 
},
{
    _id:"u6", 
    name:"Dr. Sharma", 
    email:"sharma@gmail.com", 
    password:"pass123", 
    role:"instructor", 
    createdAt:new Date(), 
    isVerified:true 
},
{
    _id:"u7", 
    name:"Neha Singh", 
    email:"neha@gmail.com", 
    password:"pass123", 
    role:"instructor", 
    createdAt:new Date(), 
    isVerified:true 
},
{ 
    _id:"u8", 
    name:"Karan Mehta", 
    email:"karan@gmail.com",
     password:"pass123", 
     role:"instructor",
      createdAt:new Date(),
       isVerified:true
},
{ 
    _id:"u9", 
    name:"Anjali Rao",
     email:"anjali@gmail.com",
      password:"pass123", 
      role:"instructor", 
      createdAt:new Date(),
      isVerified:true 
    },
{
     _id:"u10",
      name:"Rohit Verma", 
      email:"rohit@gmail.com",
       password:"pass123", 
       role:"instructor", 
       createdAt:new Date(),
    isVerified:true }
])
