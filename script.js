"use strict";

// Number-one-assignment
let language;
switch (language) {
  case "chinese or mandarin":
    console.log("Most number of native speakers!")
    break;
  case "spanish":
    console.log("2nd place in number of native speakers")
    break;
  case "english":
    console.log("3rd place")
    break;
  case "hindi":
    console.log("Number 4")
    break;
  default:
    console.log("Great language too");
}

// Number-two-assignment
let dolphinsFirstScore = 96;
let dolphinsSecondScore = 108;
let dolphinsThirdScore = 89;
const dolphinsAverageScore = (dolphinsFirstScore + dolphinsSecondScore + dolphinsThirdScore) / 3;

var koalasFirstScore = 88;
var koalasSecondScore = 91;
var koalasThirdScore = 110;
const koalasAverageScore = (koalasFirstScore + koalasSecondScore + koalasThirdScore) / 3;
console.log(koalasAverageScore);


// 2.2
let result = (dolphinsAverageScore > koalasAverageScore) ? 'Dolphins won!' :
  (dolphinsAverageScore < koalasAverageScore) ? 'Koalas won!' :
    (dolphinsAverageScore == koalasAverageScore) ? 'It ended as a draw!' :
      "Let's go!";
console.log(result);

//2.3
let minimumScore = 100;

let dolphinsFirstScore2 = 97;
let dolphinsSecondScore2 = 112;
let dolphinsThirdScore2 = 101;
const dolphinsAverageScore2 = (dolphinsFirstScore2 + dolphinsSecondScore2 + dolphinsThirdScore2) / 3;

let koalasFirstScore2 = 109;
let koalasSecondScore2 = 95;
let koalasThirdScore2 = 123;
const koalasAverageScore2 = (koalasFirstScore2 + koalasSecondScore2 + koalasThirdScore2) / 3;

if (dolphinsAverageScore2 > koalasAverageScore2 && dolphinsAverageScore2 > minimumScore){
    console.log('Dolphins won!')
}else if (koalasAverageScore2 > dolphinsAverageScore2 && koalasAverageScore2 > minimumScore){
        console.log('Koalas won!')
}else {
    console.log("both team lost!")
}

//2.4
let dolphinsAverageScore3 = dolphinsAverageScore2;
let koalasFirstScore3 = 109;
let koalasSecondScore3 = 95;
let koalasThirdScore3 = 106;
const koalasAverageScore3 = (koalasFirstScore3 + koalasSecondScore3 + koalasThirdScore3) / 3;

if (dolphinsAverageScore3 == koalasAverageScore3 && dolphinsAverageScore3 > minimumScore){
    console.log('It is a draw!')
}else if (koalasAverageScore3 == dolphinsAverageScore3 && koalasAverageScore3 > minimumScore){
        console.log('It is a draw!')
}else if (dolphinsAverageScore3 > dolphinsAverageScore3 && koalasAverageScore3 > minimumScore){
        console.log('Dolphins won!')
}else if (koalasAverageScore3 > dolphinsAverageScore3 && koalasAverageScore3 > minimumScore){
        console.log('Koalas won!')
}else {
    console.log("both team lost!")
}

//Number-three
let value1 = 275;
let value2 = 40;
let value3 = 430;

// bill >= 50 and <= 300, tip= 15/100
//   bill < 50, tip = 20/100
// bill > 300, tip = 20 / 100
  
let tip= function(value) {
    return (value >= 50 && value <= 300) ? (15 / 100) * value
        : (value < 50) ? (20 / 100) * value
        : (value > 300) ? (20 / 100) * value
            : "Force stop the function";
}

//3.2
var value = tip(275);
console.log(`Steven's first bill was ${value1}, he added ${tip(275)} as tip, and the total value was ${value1 + tip(275)}`);
var value = tip(40);
console.log(`Steven's second bill was ${value2}, he added ${tip(40)} as tip, and the total value was ${value1 + tip(40)}`);
var value = tip(430);
console.log(`Steven's third bill was ${value3}, he added ${tip(430)} as tip, and the total value was ${value1 + tip(430)}`);

//parsefloat
// Number-four
function describeCountry(country, population, capitalCity) {
  return (`${country} has ${population} and its capital city is ${capitalCity}`)
}
const example = describeCountry("Finland", "6 million", "Helsinki")
console.log(example)
//4.2
const countryOne= describeCountry("Nigeria", "213.4 million", "Abuja" )
console.log(countryOne)

const countryTwo= describeCountry("Togo", "8.645 million", "Lomé" )
console.log(countryTwo)

const countryThree= describeCountry("Ghana", "32.83 million", "Accra" )
console.log(countryThree)



// Number-five
//function-declaration
let worldPopulation = 7900e6;
//5.2
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
//5.3
const populationOne = percentageOfWorld1(213.4e6);
console.log(populationOne + " " + "%");

const populationTwo = percentageOfWorld1(8.645e6);
console.log(populationTwo + " " + "%");

const populationThree = percentageOfWorld1(32.83e6);
console.log(populationThree + " " + "%");

//5.4
let percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
}
const population_one = percentageOfWorld2(213.4e6);
console.log(population_one + " " + "%");

const population_two = percentageOfWorld2(8.645e6);
console.log(population_two + " " + "%");

const population_three = percentageOfWorld2(32.83e6);
console.log(population_three + " " + "%");

//5.bonus
let percentageOfWorld3 = (population) => {
  return (population / worldPopulation) * 100;
}
const population_One = percentageOfWorld2(213.4e6);
console.log(population_One + " " + "%");

const population_Two = percentageOfWorld2(8.645e6);
console.log(population_Two + " " + "%");

const population_Three = percentageOfWorld2(32.83e6);
console.log(population_Three + " " + "%");



// Number-six

let Nigeria = "213.4e6 ";
let southAfrica = "59.39e6";
let China = "1.412e9"
let France = "67.75e6";
const populations = [Nigeria, southAfrica, China, France];

if (populations.length == 4) {
  console.log("True")
} else {
  console.log("False")
}
//6.2
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
let nigeriaPopulation = percentageOfWorld1(213.4e6)

let southAfricaPopulation = percentageOfWorld1(59.39e6);

let chinaPopulation = percentageOfWorld1(1.412e9);
alert(chinaPopulation)
let francePopulation = percentageOfWorld1(67.75e6);

