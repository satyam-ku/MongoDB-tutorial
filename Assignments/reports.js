db.courses.find(
  { rating: { $gt: 4.5 } },
  { _id: 1, title: 1, rating: 1 }
)

db.users.find(
  { role: "student", isVerified: true },
  { name: 1, email: 1 }
)

db.enrollments.find({ studentId: "u1" })

db.courses.find({ categoryId: "cg1" })

db.payments.find({
  paymentStatus: "completed",
  amount: { $gt: 1500 }
})

db.courses.find().sort({ rating: -1 })

db.courses.updateOne(
  { _id: "c1" },
  { $set: { price: 1199 } }
)

db.users.updateOne(
  { _id: "u3" },
  { $set: { isVerified: true } }
)

db.reviews.deleteOne({ _id: "r10" })

db.payments.deleteMany({ paymentStatus: "failed" })

db.enrollments.deleteMany({ studentId: "u5" })


//aggregations
//top 3 couses by rating]
db.courses.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 1,
      title: 1,
      rating: 1,
      price: 1
    }
  }
])

//total revenue by courses
db.enrollments.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $group: {
      _id: "$course.title",
      totalRevenue: { $sum: "$course.price" },
      totalEnrollments: { $sum: 1 }
    }
  },
  { $sort: { totalRevenue: -1 } }
])

//instructor earnings
db.enrollments.aggregate([
  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "course"
    }
  },
  { $unwind: "$course" },
  {
    $group: {
      _id: "$course.instructorId",
      totalEarnings: { $sum: "$course.price" }
    }
  },
  { $sort: { totalEarnings: -1 } }
])

//monthly revenue report
db.payments.aggregate([
  { $match: { paymentStatus: "completed" } },
  {
    $group: {
      _id: { $month: "$createdAt" },
      monthlyRevenue: { $sum: "$amount" },
      totalPayments: { $sum: 1 }
    }
  },
  { $sort: { "_id": 1 } }
])

//popular cpurse
db.enrollments.aggregate([
  {
    $group: {
      _id: "$courseId",
      totalStudents: { $sum: 1 }
    }
  },
  { $sort: { totalStudents: -1 } }
])