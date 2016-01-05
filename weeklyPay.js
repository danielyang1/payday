"use strict";

var hours, rates;
hours = hour();
rates = rate();

function hour() {
	var hours;
	hours = prompt("HOURS");
	return hours;
};
function rate() {
	var rates;
	rates = prompt("$$$");
	return rates;
};
function reg(hours, rates) {
	var regs;
	regs = hours * rates;
	console.log(regs);
};
function ot(hours, rates) {
	var ots;
	ots = (hours - 40) * 1.5 * rates;
	return ots;
};
function total () {
	if (hours <= 40){
		reg(hours, rates);
	} else {
		ot();
	var totals, rounded;
	totals = (40 * rates) + ot(hours, rates);
	rounded = Math.ceil(totals * 100)/100;
	console.log(rounded);
}
};

total();












//   !! First Part of the Assignment !!
// var wage;
// var time;
// var total;

// wage = 22.50;
// time = 37;
// total = time * wage;

// console.log(wage + " +");
// console.log(time + " =");
// console.log(total + " dollars earned for the week");



// function overTime(){
// 	otHours = time - 40
// 	otPay = otHours * wage * 1.5
// }

// function regular() {
// 	wage * time
// }

// function overTime();
// function regular();

// console.log(overTime + " dollars earned for the week");
