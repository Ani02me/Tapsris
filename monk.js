// Пайдаланушыдан студенттер санын енгізуді сұраймыз
let studentCount = parseInt(prompt("Студенттер санын енгізіңіз:"));

// Бағаларды сақтайтын массив
let grades = [];

// Әр студенттің бағасын енгізуді сұраймыз
for (let i = 1; i <= studentCount; i++) {
    let grade = parseFloat(prompt(i + "-студенттің бағасын енгізіңіз:"));
    grades.push(grade);
}

// Барлық бағалардың қосындысын есептеу
let sum = grades.reduce((total, grade) => total + grade, 0);

// Орташа мәнді есептеу
let average = sum / studentCount;

// Нәтижені көрсетеміз
alert("Студенттердің бағаларының орташа мәні: " + average.toFixed(2));
