// - self-invoke function
(function () {
  let number1 = 5;
  let number2 = 7;

  let sum = number1 + number2;

  (function (sum) {
    alert(sum);
  })(sum);
})();

// Arrow function with Array.filter

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = numbers.filter((num) => {
  return num % 2 !== 0
});

console.log(oddNumbers);

// Arrow function with Array.forEach() to get even values

numbers.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// Arrow function with Array.map() to calc the square of numbers

let squareList = numbers.map(num => num * num);
console.log(squareList);

// - For in & For of & Array.forEach Comparison
let array = [10, 20, 30, 40, 50];

for (let index in array) {
  console.log(`Index: ${index} ==> Value: ${array[index]}`);
}


for (let item of array) {
  console.log(`Value: ${item}`);
}

array.forEach((value) => {
  console.log(`Value: ${value}`);
});


/**
 * for in --> loop the indexes
 * for of --> loop the items of the array
 * forEach --> invoke callback function for each element as parameter
 * */

// - spread operator '...'
let numbersArray = [...array]
// items copied to numbersArray
numbersArray.forEach((item) => {
  console.log(item)
})

// pass array as items to multi-parameter function
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(...numbersArray));

// OOP
class Student {
  constructor(name, university, faculty, grade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.grade = grade;
  }

  displayDetails() {
    console.log(`${this.name} is a student in faculty of ${this.faculty} in university ${this.university}. And his final grade is ${this.grade}.`);
  }

}

const student1 = new Student('Amr El-Saady', 'Minia University', 'Engineering', 65);
student1.displayDetails();

// Sets Example

const studentNames = new Set();

studentNames.add('Amr');
studentNames.add('Ahmed');
studentNames.add('Abdo');

console.log(studentNames);

studentNames.add('Amr');

console.log(studentNames);

const studentArray = [...studentNames];
console.log(studentArray);

console.log('Using for...of:');
for (let name of studentNames) {
  console.log(name);
}


const tips = [
  "Stay hydrated.",
  "Take regular breaks.",
  "Keep your workspace organized.",
  "Set realistic goals.",
  "Stay positive.",
  "Exercise regularly.",
  "Eat healthy.",
  "Get enough sleep.",
  "Learn something new every day.",
  "Stay connected with loved ones."
];
let tipIndex = 0;
function tipGenerator(){
  if (tipIndex >= tips.length) {
    tipIndex = 0;
  } else {

    return tips[tipIndex++];
  }
}
let tip = tipGenerator();
let tipDisplay = document.getElementById('tipDisplay');


document.getElementById('displayAllTips').addEventListener('click', () => {
  tipDisplay.innerHTML = '';
  for (let tip of tips) {
    const p = document.createElement('p');
    p.textContent = tip;
    tipDisplay.appendChild(p);
  }
});


document.getElementById('displayTipEvery3Sec').addEventListener('click', () => {
  tipDisplay.innerHTML = ''; // Clear the current tips
  let intervalId = setInterval(() => {
    let generatedTip = tipGenerator();
    tipDisplay.textContent = generatedTip;


    if (tipIndex >= tips.length) {
      clearInterval(intervalId);
    }
  }, 3000);
});



