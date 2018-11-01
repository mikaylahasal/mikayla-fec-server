var faker = require('faker');
const db = require('./index.js');
const Instructors = require('./dbInstructor.js');

for (let i = 1; i <= 100; i++) {
  let instructorList = {};
  instructorList.imageUrl = faker.image.avatar();
  instructorList.name = faker.name.findName();
  instructorList.headline = faker.lorem.sentence();
  instructorList.body = faker.lorem.paragraph();
  instructorList.reviews = faker.random.number();
  instructorList.rating = Math.floor(Math.random() * 5) + 1;
  instructorList.numOfStudents = faker.random.number();
  instructorList.numOfCourses = Math.floor(Math.random() * 30) + 1;

  Instructors.create(instructorList, (err, results) => {
    if (err) {
      console.log('Error seeding database')
    }
  })

};
