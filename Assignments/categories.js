//create collection and validation

db.createCollection("categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: { bsonType: "string" }
      }
    }
  }
})

//inserting data in category collection

db.categories.insertMany([
{ _id: "cg1", name: "Web Development" },
{ _id: "cg2", name: "Data Science" },
{ _id: "cg3", name: "Machine Learning" },
{ _id: "cg4", name: "Mobile Development" },
{ _id: "cg5", name: "Cloud Computing" },
{ _id: "cg6", name: "Cyber Security" },
{ _id: "cg7", name: "UI/UX Design" },
{ _id: "cg8", name: "DevOps" },
{ _id: "cg9", name: "Blockchain" },
{ _id: "cg10", name: "Artificial Intelligence" }
])
