var height = 0; //initialised to 0

var age = 0; //initialised to 0

// Variable to determine if the person is allowed to ride the rollercoaster and initiate it to false

var allowedToRide = false;

// The person must be at least 42 inches tall AND over the age of 10 to ride the rollercoaster
if (height >= 42 && age > 10) {
    allowedToRide = true;
} 

else {
    allowedToRide = false; 
}

console.log("Is the person allowed to ride ? : " + allowedToRide);