console.log(process.argv)

const age = process.argv[2]              // age
const gender = process.argv[3]          // 'm' or 'f'
const heightInM = process.argv[4]       // height in m
const weightInKg = process.argv[5]        // weight in kg
const dailyExercise = process.argv[6]   // true or false

let bmi = weightInKg / (heightInM * heightInM)
let idealWeight = 22.5 * (heightInM * heightInM)

let genderModifer = gender === 'm'
? 5
: -161;
let bmr = 10 * weightInKg + 6.25 * heightInM * 100 - 5 * age + genderModifer;

let exerciseModifier = dailyExercise ? 1.5 : 1.2;
let caloriesPerDay = bmr*exerciseModifier;


let weightDiff = idealWeight - weightInKg;
let dietWeeks = Math.abs(weightDiff / 0.5);
let dietCalories = weightDiff < 0
? caloriesPerDay -500
: caloriesPerDay +500;

// console.logging the values so we can see some output
console.log(`

**************
BMI CALCULATOR
**************

age: ${age}
gender: ${gender}
height: ${heightInM}
weight: ${weightInKg}
Do you exercise daily?: ${dailyExercise}

****************
FACING THE FACTS
****************

Your BMI is ${Math.round(bmi)}
Your ideal weight is ${Math.round(idealWeight)} kg
Your basal metabolic is ${Math.round(bmr)} calories
With your level of exercise your burn ${Math.round(caloriesPerDay)} calories

*********
DIET PLAN
*********

If you want to get to your ideal weight:
Eat ${Math.round(dietCalories)} calories a day for ${Math.round(dietWeeks)} weeks

`)
