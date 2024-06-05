// Q1
// function reverse(num){
//     let x=num.toString();
//     for(let i=x.length-1; i>=0; i--){
//     let z=" ";
//     z+=x[i];
//     document.write(z);
//     }
// }
// reverse(532443);

// Q2
// for(let i=0; i<=15; i++){
//     if(i%2==0)
//         console.log("the number is even " + i);
//     else 
//     console.log("the number is odd " + i);
// }

// Q3
// function sorting(str){
//     let s=str.split('');

//     s.sort();

//     s=s.join('');
//     return s;

// }
// let sort = 'orange';
// console.log(sorting(sort));

// Q4
// let x = prompt("Enter the numbers:");
// let s = x.toString();
// let sum = "";
// for (let i = 0; i < s.length; i++) {
//     sum += s[i];

//     if (s[i] % 2 === 0 && s[i + 1] % 2 === 0) {
//         sum += "-"; 
//     }
// }
// alert(sum);

// Q5
let age=prompt("inter your age ");
let Agechecker=(age>=18) ? alert("you are adult") : alert("you are Minor");
