

// The Age Calculator

function findYear(){
	
    let birthYear = prompt("Please enter your birth year (i.e 1990):");
    let futureYear = prompt("Please enter a future date (i.e 2020");    
	let cal = futureYear - birthYear;
	// let date = new Date().getFullYear();

	if (futureYear < birthYear) {
		document.getElementById("find-year-text").innerHTML = 'Woah, looks like you entered a negative future year!';
	}
	else if (futureYear > birthYear){
		document.getElementById("find-year-text").innerHTML = 'You will be ' + cal + ' in ' + futureYear;
	}
	if (cal !== cal){
		document.getElementById("find-year-text").innerHTML = 'Something went wrong. Can you try again? :)';
	}
}

// The Lifetime Supply Calculator
function findSupply(){
	let currentAge = prompt("What is your age?"); 
	let maxAge =  prompt("What age will you drink coffee until?"); 
	let estPer = prompt("How many cups of coffee do you have a day?");  
	let perYear = estPer * 365;
	let total = (maxAge - currentAge) * perYear;

	if (total !== total){
		document.getElementById("find-supply-text").innerHTML = "Some went wrong. Maybe try only numbers? If that doesn't work then a hacker totally ruined the code!";
	}
	else {
	document.getElementById("find-supply-text").innerHTML = 'You will need ' + total + ' cups of coffee to last you until the ripe old age of ' + maxAge;

	}
}


// The Drinking Age Calculator
function findDrinkingAge() {
	let age = prompt("What is your age?"); 


	if (age < 21) {

		document.getElementById("find-drinking-age-text").innerHTML = 'Maybe you can drink soon.'
	}
	else if (age > 21 && age < 30) {
		
		document.getElementById("find-drinking-age-text").innerHTML ='Nice! Go ahead and drink!'
	}
	else {
		document.getElementById("find-drinking-age-text").innerHTML = 'Really?! You barely pass as 21!'
		}
	if (age !== age){
		document.getElementById("find-supply-text").innerHTML = "Some went wrong. Maybe try only numbers? If that doesn't work then a hacker totally ruined the code!";
	}		
}



// Make an array
function arrayMaker(){
	let input1 = prompt("Enter anything you'd like for your first item:");
	let input2 = prompt("Enter anything you'd like for your second item:");  
	let input3 = prompt("Enter anything you'd like for your third item:");

	let userArray = [input1, input2, input3]
	document.getElementById("array-maker-text").innerHTML = "Congrats on making your array! Here it is: " + userArray;

}





