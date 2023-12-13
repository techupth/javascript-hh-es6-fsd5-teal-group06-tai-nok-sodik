let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];
//let a = stud
// Start coding here
//console.log(studentProfile.hobbies)
let newStudentProfile = {...studentProfile,hobbies:[...additionalHobbies,...studentProfile.hobbies]}
console.log(newStudentProfile);
