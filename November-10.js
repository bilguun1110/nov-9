// const bubbleSort = (arr) => {
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [myArray[i], myArray[i + 1]] = [myArray[i + 1], myArray[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);

//   return arr;
// };

// let myArray = [12, 10, 3, 7, 4];
// console.log(bubbleSort(myArray));

// bodlogo-2
// let array = [2, 7, 1, 11, 0];

// for (let i = 0; i < array.length; i++) {
//   for (let k = i; k < array.length; k++) {
//     if (array[i] < array[k]) {
//       let a = array[i];
//       let b = array[k];
//       array[i] = b;
//       array[k] = a;
//     }
//   }
// }
// console.log(array);

// bodlogo-1

let text = "madam";
let x = "";
for (let i = text.length - 1; i >= 0; i--) {
  x = x + text[i];
}

if (x === text) {
  console.log("pal", text);
} else {
  console.log("no pal", text);
}

// bodlogo-2
// let text = ["madam", "hello", "radar", "world"];
// let x = "";
// for (let i = text.length - 1; i >= 0; i--) {
//   x = x + text[i];
// }
// if (x === text) {
//   console.log("pal", text);
// } else {
//   console.log("no pal", text);
// }

// bodlogo-3

// let text =
//   "I'm tired of being what you want me to be Feeling so faithless, lost under the surface Don't know what you're expecting of me Put under the pressure of walking in your shoes";

// let count = 0;

// for (let i = 0; i < text.length; i++) {
//   if (text[i] !== " ") {
//     count++;
//   }
// }
// console.log(count);

// bodlogo-4
