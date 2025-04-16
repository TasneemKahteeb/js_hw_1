// Names:
/*
        Tasneem Khateeb
        Aya Dhabre

*/



//                                                                                                True Or False


//Ex1
// becuase "0" is not an empty string which considered as true
// what makes the condition of the if satisfied
// so yes, the alert will be activated then.

//Ex2
/* The browser shows a prompt asking: "What is the name of JavaScript ?"
If the user types "ECMAScript", it shows: "Correct !"
Otherwise, it shows: "the name of javaScript is ECMAScript !"*/

let res = prompt("What is the name of JavaScript ?");
if (res === "ECMAScript") alert("Correct !");
else alert("the name of javaScript is ECMAScript !");

//Ex3
/* You assign a score of 75 
Since 75 is between 70 and 79, grade will be "C".
It prints: 
הציון הוא: C   */
let score = 75;
let grade;

score >= 90
  ? grade = "A"
  : score >= 80
    ? grade = "B"
    : score >= 70
      ? grade = "C"
      : score >= 60
        ? grade = "D"
        : grade = "F";
console.log("הציון הוא:", grade);

//Ex4
/*Keeps asking the user for input until they enter a number
After a valid number is entered:
It checks whether it’s greater than 0, less than 0, or equal to 0.
Then shows an alert:
"this number bigger then 0" 
"this number less then 0" 
"this number is 0" */

let res = prompt("Enter you Number : ");
while (!Number(res) && res != 0) {
  res = prompt("Enter you Number : ");
}

if (res > 0)
  alert("this number bigger then 0 ");
else if (res < 0)
  alert("this number less then 0 ");
else
  alert("this number is 0");

//Ex5
//It checks if the sum of a and b is less than 4.

let result;
a + b < 4 ? result = "Not enough" : result = "A lot";

//Ex6
//It checks the value of the login variable and sets message accordingly

let message;
login == "Employee"
  ? message = "Hello"
  : login == "Director"
    ? message = "Hello"
    : login == ""
      ? message = "No login"
      : message = "";

//Ex7
/*
1 - 'sdf'
2 - false
3 - true
4 - '' //Empty string
5 - null
6 - null
7 - undefined
8 - 1
9 - 1
10 - 1
*/

//                                                                                                      Loops

//Ex1
// this function is calculating the sum of the numbers form 1 to 100
let num = 0;
let sum = 0;
while (num <= 99) {
  num += 1;
  sum += num;
}
console.log(sum)

//Ex2
// this function askling the user for a number using prompt
// if the user insert anything is not a number so it asks again until it inserts a number
// if true: it prints it to the console
let res;
do {
  res = prompt("Enter a number :");
} while (isNaN(res) || res <= 0);

console.log(res)

//Ex3
// this funtion is printint to the console the multiplication results from 1 to 10 by 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ` + 7 * i);
}

//Ex4
// this funtion is letting the user to guess a number from 1 - 10
// if the user guesses the number so it alert "correct!" otherwise it keep asking the user 
// to guess the number
const secret = 7;
for (let i = 1; i > 0;) {
  let res = prompt("Enter a number 10-1 :");
  if (res == 7) {
    alert("correct !");
    break;
  }
  alert("Enter again")
}

//Ex5
//  it prints the numbers from 1 to 30 that are not divided by 3 without remainders
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0)
    continue;
  console.log(i);
}

//Ex6
/*
The number  "1"
because the number zero == false
*/

//Ex7
/*
no
the first one print 1 2 3 4
the second one print 1 2 3 4 5
*/

//Ex8
/*
yes
the first one print 0 1 2 3 4
the second one print 0 1 2 3 4 
*/

//Ex9
// it prints the even numbers 
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//Ex10
// it prints three alert popups in sequence
let i = 0;
while (i < 3) {
  alert(`number ${i}`);
  i++;
}


