//1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

// let number = +prompt("Enter two digit number : ");
// for (let i = number; i <= 106; i += 7) {
//   console.log(i);
// }

//2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın. Proqram N ədədini istifadəçidən soruşur.

// let N = +prompt("Enter N :");
// for (i = 0; i <N; i++) {
//   console.log("I know how to use cycles");
// }

//3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let name = prompt("Enter your name :");
// let surname = prompt("Enter your surname : ");
// console.log(surname + " " + name);

//4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.

// let number = prompt("Enter your  phone number");
// isvalidnumber = (number) => {
//   if (number.length === 11 && number.charAt(0, 1) === "+7") {
//     console.log(true);
//   } else {
//     console.log("Entered number is wrong");
//   }
// };
// isvalidnumber(number);

//5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın. Məsələn: "hell5o wor6ld" -> 56 getNumberFromString(number)
// let a = prompt("Enter string ");
// getNumberFromString = (number) => {
//   for (let i = 0; i < number.length; i++) {
//     if (!isNaN(number.charAt(i))) {
//       console.log(number.charAt(i));
//     }
//   }
// };

//  getNumberFromString(a);

// 6.Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn: He!llo! !!FE-25 netice olmalıdır Hello FE-25!

// let a = prompt("Enter text ");
// RemoveAllExclamation = (text) => {
//   for (let i = 0; i < text.length; i++) {
//     text = text.replace("!", "");
//   }
//   return text;
// };

// console.log(RemoveAllExclamation(a));

// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın
// let text = prompt("Enter text ");
// const FirstLetter = (a) => {
//   return a.charAt(0).toUpperCase() + text.slice(1);
// };

// console.log(FirstLetter(text));

// 8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın
// let text = prompt("Enter text ");
// const FirstLetter = (a) => {
//   return a.toUpperCase();
// };

// console.log(FirstLetter(text));
// 9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın
// let text = prompt("Enter text ");
// const FirstLetter = (a) => {
//   return a.toLowerCase();
// };

// console.log(FirstLetter(text));

// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara
// let text=promt("Eneter text");
// const ilkHerfiDeyis = (soz, ilkHerf) => {
//   return soz.replace(soz.at(0), ilkHerf);
// };
// console.log(ilkHerfiDeyis("Qara", "Y"));

// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin

// let name = prompt("Enter your name : ");
// let surname = prompt("Enter your surname :");
// const nameFormat = (name, surname) => {
//   return surname.at(0) + "." + name;
// };
// console.log(nameFormat(name, surname));

// 12. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, abcdf@gmail.com meselen) //true
// let gmail = prompt("Enter your gmail address :");

// const verifyGmail = (gmail) => {
//   if (gmail.slice(-10) === "@gmail.com") {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(verifyGmail(gmail));

// 13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın

let text = prompt("Enter text : ");
const func = (text) => {
  if (text === text.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(func(text));

// 14. Funksiya yazın.Cümlə alacaq parametr olaraq.Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq

// let str = prompt("Enter text : ");
// const func = (str) => {
//   return str.slice(0, 5);
// };
// console.log(func(str));

// 15. Funksiya yazın.Parametr alsın.Sözün içərisində nəqədər boşluq varsa hamsı - işarəsi olsun
// let text = prompt("Enter text : ");
// const func = (text) => {
//   return text.replaceAll(" ", "-");
// };
// console.log(func(text));
