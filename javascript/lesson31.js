// var person = { firstName:"michal",lastName:"jordan", age:60};
// var text = '';
// var x;
// for(x in person){
//     text += person[x];
// }
// console.log(text);

// let 1 = 0

// do{
//     i +=1;
//     console.log(i);
// }while(i < 5);

// let n = 0;
// let x = 0;
// while(n<3){
//     n++;
//     x += n;
// }
// console.log(x);

var students = ["ERIS","driart","arion"]
var names_input = document.getElementById('name_input');

for(i=0; i<students.length; i++){
    document.write(students[i]+ "<br>");

}