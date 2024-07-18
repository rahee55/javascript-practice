// var a = 10;
// let b = 20;
// const c = 30;

// {
//   var a = 40;
//   let b = 50;
//   const c = 60;
//   console.log(a, b, c);
// }

// console.log(a, b, c); 

// console.log("2" + 3 + 6);
// console.log(2 + 3 + "6");


// let num = +prompt("Enter your number")
// if(num > 0){
//     document.write(`the number ${num} is positive`)
// }
// else{
//     document.write(`the number ${num} is negitive`)
// }

// let vowel = prompt("enter leter");
// if(vowel== "a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
//     document.write(`${vowel} is vowel leter`)
// }
// else if(vowel== "A" || vowel=="E" || vowel=="I" || vowel=="O" || vowel=="U"){
//     document.write(`${vowel} is vowel leter`)
// }
// else{
//     document.write(`${vowel} is consonant leter`)
// }


// let year = +prompt("enter year")
// if(year%4 === 0 || year%400 === 0 && year%100 === 0){
//     document.write(`${year} is leap year`)
// }
// else{
//     document.write(`${year} is not leap year`)
// }

// let sub1 = +prompt("enter urdu marks");
// let sub2 = +prompt("enter math marks");
// let sub3 = +prompt("enter english marks");
// let sub4 = +prompt("enter chemistry marks");
// let sub5 = +prompt("enter physics marks");
// let sub6 = +prompt("enter bio marks");

// if(sub1<=100 && sub1>=90){
//     document.write("A, ")
// }
// else if(sub1<=89 && sub1>=80){
//     document.write("B, ")
// }
// else if(sub1<=79 && sub1>=70){
//     document.write("C, ")
// }
// else if(sub1<=69 && sub1>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }
// if(sub2<=100 && sub2>=90){
//     document.write("A, ")
// }
// else if(sub2<=89 && sub2>=80){
//     document.write("B, ")
// }
// else if(sub2<=79 && sub2>=70){
//     document.write("C, ")
// }
// else if(sub2<=69 && sub2>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }
// if(sub3<=100 && sub3>=90){
//     document.write("A, ")
// }
// else if(sub3<=89 && sub3>=80){
//     document.write("B, ")
// }
// else if(sub3<=79 && sub3>=70){
//     document.write("C, ")
// }
// else if(sub3<=69 && sub3>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }
// if(sub4<=100 && sub4>=90){
//     document.write("A, ")
// }
// else if(sub4<=89 && sub4>=80){
//     document.write("B, ")
// }
// else if(sub4<=79 && sub4>=70){
//     document.write("C, ")
// }
// else if(sub4<=69 && sub4>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }
// if(sub5<=100 && sub5>=90){
//     document.write("A, ")
// }
// else if(sub5<=89 && sub5>=80){
//     document.write("B, ")
// }
// else if(sub5<=79 && sub5>=70){
//     document.write("C, ")
// }
// else if(sub5<=69 && sub5>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }
// if(sub6<=100 && sub6>=90){
//     document.write("A, ")
// }
// else if(sub6<=89 && sub6>=80){
//     document.write("B, ")
// }
// else if(sub6<=79 && sub6>=70){
//     document.write("C, ")
// }
// else if(sub6<=69 && sub6>=60){
//     document.write("D, ")
// }
// else{
//     document.write("F, ")
// }

// subs = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
// total = 600;

// document.write(` percentage: ${ subs/total*100}`)





// let pass = prompt("enter your password");


// let upparcase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// let lowercase = "abcdefghijklmnopqrstuvwxyz"
// let numbers = "0123456789"
// let symbels = "!@#$%^&*()-_=+[]{}|;':,./<>?"



// if(upparcase.includes(pass) ){
//     document.write("correct")
// }
// else{
//     document.write("incorrect")
// }





let one1 = +prompt("enter first side")
let two2 = +prompt("enter second side")
let three3 = +prompt("enter third side")

o1 = one1+two2
t2 = one1+three3
t3 = two2+three3


if(one1 == two2 && one1 == three3){
    document.write("Equilateral")
}
else if(o1 == three3 || t2 == two2 || t3 == one1 ){
    document.write("Not a triangle")
}
else if (one1 == two2 || two2 == three3 || one1 == three3){
    document.write("Isosceles")
}
else if(one1 != two2 && one1 != three3){
    document.write("Scalene")
}






