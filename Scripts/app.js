"use.strict";

//Self-executing anonymous function
//IIFE -- Immediately Invoked.
(function(){

	//use let instead of var because otherwise
	//the variable may be hoisted.

	let basic = 0;

	function Start(){

		//If you add the %c symbol in the new formatted ES6 string 
		// you can specify css for the console.
		//NOTE: PLEASE USE THIS FOR DEBUGGING!
		console.log(`%c App Started...${basic} Test` , 
			"font-size: 10px; color: blue; bg-color: red;");
	}


	window.addEventListener("load",Start);

	//ES6 Syntax
	// ARROW functions keeks the context of the this from the prior scope
	window.addEventListener("load",() =>
		function(){
			console.log("This is the application!");
		}());


})();