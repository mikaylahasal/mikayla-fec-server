var faker = require('faker');
const db = require('./index.js');

const instructorList = [
  {
    imageUrl: faker.image.people();,
    name: faker.fake("{{name.lastName}}, {{name.firstName}}"),
    headline: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
    rating: faker.random.number(),
    ratingIcon: ,
    numofstudents: faker.random.number(),
    studentsIcon: String,
    numOfCourses: faker.random.number(),
    courseIcon: String
  }
];



const sendInstructorList = function() {
  Blog.create(instructorList)
    .then(() => db.disconnect());
};

sendInstructorList();