"use.strict";

//Self-executing anonymous function
// IIFE -- Immediately Invoked.
(function(){

	//use let instead of var because otherwise
	//the variable may be hoisted.

	let basic = 0;

	function Start(){
		console.log(`App Started...${basic}`);
	}


	window.addEventListener("load",Start);

	//ES6 Syntax
	window.addEventListener("load",() =>
		function(){
			console.log("This is the application!");
		}());


})();