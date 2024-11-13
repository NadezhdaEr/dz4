export let myName = "Nadezhda";

import { greet } from "./modules/greet.js";

greet(myName);

import { calculateAverage } from "./modules/calculateAverage.js";
calculateAverage();

import { concatStrings } from "./modules/concatStrings.js";
concatStrings();

import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
celsiusToFahrenheit();

import { calculateFallDistance } from "./modules/calculateFallDistance.js";
calculateFallDistance();

console.log(false == '0');
