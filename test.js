//test.js
import {Student} from './gsc/student.js'


// let std1 = new Button ();
// // console.log(std1);

// // let foo1 = new Foo("Foo");
// // console.log(foo1);



let stdList = [];
stdList.push(new Student("kim",20,"m"));
stdList.push(new Student("Lee",20,"f"));
stdList.push(new Student("jung",20,"f"));
stdList.push(new Student("jeo",20,"m"));

stdList.forEach(v => console.log(v.name));
let sumAge = stdList.filter(v => v.gender ==="m").reduce((sum, v) => sum + v.age, 0);

console.log(sumAge);

//TODO: every ,sum 알아보기 sort
console.log(stdList.every(v => v.gender === "m"));




// let sum = 0;

// stdList.forEach(v => {
//   if (v.gender === "m") {
//     sum += v.age;
//   }
// });

// console.log(sum);