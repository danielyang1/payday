// "use strict";

var wage;
var time;
var regular;
var ot
var otPay

wage = prompt("How much per hour?");
time = prompt("Total hours worked?");
ot = time - 40;
regular = wage * time;
otAmt = ot * .5 * wage;
otPay = otAmt + regular;

if (time > 40){
	console.log(otPay);
	} else if (ot === 0){
		console.log(regular);
	} else {
		console.log(regular);
};



/*  !! First Part of the Assignment !!
var wage;
var time;
var total;

wage = 22.50;
time = 37;
total = time * wage;

console.log(wage + " +");
console.log(time + " =");
console.log(total + " dollars earned for the week");*/







































// function overTime(){
// 	ot = time - 40
// 	otPay = ot * wage * 1.5
// }

// function regular() {
// 	wage * time
// }

// function overTime();
// function regular();

// console.log(overTime + " dollars earned for the week");
