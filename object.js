const array = ["lastname", "username", "age", "isMarried", "gender"];
const obj = {
  lastname: "Binderiya",
  firstname: "Bilguun",
  fullname: "Bilguun Binderiya",
  age: 23,
  gender: "male",
  isMarried: "no",
  address: "bayngol",
  education: "student",
  image: "image url",
  language: "english",
  major: "dentist",
};
// console.log(obj.age);
// console.log(obj.major);

for (let i = 0; i < array; i++) {
  daalgavar[array[i]] = obj[array[i]];
}
console.log(daalgavar);
