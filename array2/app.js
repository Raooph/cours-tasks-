// 1. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.
// let arr = ["a", "b", "c", "d"];
// let arr1 = ["e", "f", "a", "g", "d"];
// let arr2 = arr.concat(arr1);
// let newArr = [];
// arr2.forEach((i) => {
//   if (!newArr.includes(i)) {
//     newArr.push(i);
//   }
// });
// console.log(newArr);

// 2. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.
// let arr1 = ["a", "b", 29, "hello", 9, 177, 43];
// let arr2 = ["d", "b", "c", 43, 9];
// let newArr = [];
// const func = (newArr) => {
//   arr1.forEach((i) => {
//     if (arr2.includes(i)) {
//       newArr.push(i);
//     }
//   });
//   return newArr;
// };
// console.log(func(newArr));

// 3. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran  funksiyasını yazın.
// let array = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
// ];
// let array = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45,
//   22,
// ];
// const sortArray = (arr) => {
//   return arr.sort((a, b) => a - b);
// };
// console.log(sortArray(array));

// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.
// let arr = [1, -2, 3, -4, 5, -6, 7, -8];
// const func = (arr) => {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element < 0) {
//       newArr.push(element);
//     }
//   });
//   return newArr;
// };
// console.log(func(arr));

// 5. Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.

// let text = prompt("Enter text : ");
// const kebabToUpper = (a) => {
//   return a.replace(" ", "-").toUpperCase();
// };
// console.log(kebabToUpper(text));

// 6. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];
// Output: [2, 10, 7, 6, 9, 8, 6, 4]
// let arr1 = [1, 5, -7, 3, -9, 4, -6, 2];
// let arr2 = arr1.map((i) => {
//   if (i < 0) {
//     return i * -1;
//   } else if (i > 0) {
//     return i * 2;
//   } else {
//     return i;
//   }
// });

// console.log(arr2);

// 7. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
// let namesArray = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];
// const func = (arr) => {
//   return arr.sort().slice(0, 4);
// };
// console.log(func(namesArray));
