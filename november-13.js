// bodlogo-1
// let arr = [2, 511, 123, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = arr[i] + sum;
// }
// console.log(sum);

// bodlogo-2
// let arr = [2, 511, 123, 5];
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   total = arr[i] + total;
// }
// console.log((total = total / arr.length));

// bodlogo-3
// let a = 12;
// let b = 7;
// let degree = 1;
// for (let i = 0; i < b; i++) {
//   degree = a * degree;
// }
// console.log(degree);

// bodlogo-4
// let arr = [2, 511, 123, 5, 999, 9999, 99999];
// let max=0 ;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// bodlogo-5
// let original="hello"
// let reversed=""
// for(let i=original.length-1; i>=0; i--){
//  reversed+=original[i]
// }
// console.log(reversed);

// bodlogo-6
// let original = "abcdea";

// for (let i = 0; i < original.length; i++) {
//   if (original[i] == original[original.length - 1]) {
//     console.log("davhardsan");
//   } else {
//     console.log("davhardaagui");
//   }
// }
// console.log(original);

// bodlogo-8
// {
//   for (let i = 0; i < 5; i++) {
//     let row = [];

//     for (let j = 0; j < 5 - i; j++) {
//       row.push(" ");
//     }

//     for (let k = 0; k < 2 * i + 1; k++) {
//       row.push("*");
//     }
//     console.log(row.join(""));
//   }
// }

// bodlogo-9
// let fact = 1;
// for (let i = 1; i <= 12; i++) {
//   fact *= i;
// }
// console.log(fact);

// bodlogo-10
// let n = 290;

// for (let i = 1; i < n; i++) {
//   if (i % 2 == 0) {
//     console.log("tegsh");
//   }
// }

// bodlogo-11
// let n = "1990991";
// let x = "";
// for (let i = n.length - 1; i >= 0; i--) {
//   x = x + n[i];
// }
// if (x == n) {
//   console.log("true");
// } else console.log("false");

// bodlogo-12

// let n = 1990991;
// if ((n = n / 1)) {
//   n = n / n;
//   console.log("prime");
// } else console.log("not prime");

// var num = 1990991;

// if (num > 1) {
//   for (var i = 2; i < num; i++) {
//     if (num % i == 0) {
//       console.log(num + " is not prime");
//       break;
//     } else {
//       console.log(num + " is prime");
//       break;
//     }
//   }
// }

// bodlogo-13
// const num = 123;

// for (let i = 1; i <= num; i++) {
//   let isPrime = false;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//     isPrime = true;
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }

// bodlogo-14
// let x = [0, 1];

// for (let i = 2; i <= 99; i++) {
//   x[i] = x[i - 2] + x[i - 1];
//   console.log(x[i]);
// }

// const mam = 99;

// function Fibonacci(mam) {
//   let x = [0, 1];
//   for (let i = 2; i <= mam; i++) {
//     x[i] = x[i - 2] + x[i - 1];
//     console.log(x[i]);
//   }
// }
// Fibonacci(mam);

// 15. Өгөгдсөн массивийн давхцсан тоонуудыг арилгаад буцаа. ([1,2,2,3,4,3] -> [1,2,3,4])
// 16. Дараалсан бүхэл тоонуудаас бүрдсэн массив байв. Даанч нэг тоо нь алга болчиж. Алга болсон тоог ол. [1,2,3,5,6,7]
// 18. Өгсөн 2 тооны хамгийн их ерөнхий хуваагчийг ол. 76, 88
// 19. Цифрүүдийн кубуудын нийлбэр нь өөртэйгөө тэнцүү байдаг бүх 3 оронтой тоог ол.
// 20. N тоо болон массив өгөгдөв. Нийлбэр нь N байх 2 тоог олж index ийг нь буцаа. олдохгүй бол “Error” буцаа. N=9, [1,2,3,4,5,6,7,8,9]
// 21. Өгөгдсөн массивийг өсөх эрэмбээр эрэмблэ. [1,6,3,8,5,0]

const number = [1, 6, 3, 8, 5, 0];

function Increase(num) {
  for (let i = 0; i < num.length; i++) {
    for (let b = 0; b < i; b++) {
      if (num[i] < num[b]) {
        let temp = num[i];
        num[i] = num[b];
        num[b] = temp;
      }
    }
    console.log(num);
  }
}
Increase(number);
