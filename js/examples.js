

// The Age Calculator

function findYear(){
	
    let birthYear = prompt("Please enter your birth year (i.e 1990):");
    let futureYear = prompt("Please enter a future date (i.e 20:");    
	let cal = futureYear - birthYear;
	// let date = new Date().getFullYear();

	document.getElementById("demo").innerHTML = cal;
}

// The Lifetime Supply Calculator
function findSupply(){
	let currentAge = 25;
	let maxAge = 189;
	let estPer = 4; 
	let total = (maxAge - currentAge) * estPer;

	return 'You will need ' + total + ' waterbottles to last you until the ripe old age of ' + maxAge;
}


// The Drinking Age Calculator
function findAnswer() {
	let age = 30;

	if (age < 21) {

		return 'Maybe you can drink soon'
	}
	else if (age > 21 && age < 30) {
		
		return 'Nice! Go ahead and drink!'
	}
	else {
		return 'Really? You barely pass as 21!'
		}
}

// Print them to screen

