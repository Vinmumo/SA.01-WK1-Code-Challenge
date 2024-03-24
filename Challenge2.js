function calculatePoints(speed) {
    let speedLimit = 70;
    let kmPerDemeritPoint = 5;
    const excessSpeed = speed - speedLimit;  // calculates excess speed 

    if (excessSpeed <= 0) {  // if speed is less than speed limit
        return "Ok";
    } else {
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint); 
        return demeritPoints;   // returns number of demerit points
    }
}

function main() {
    const speed = parseFloat(prompt("Enter speed of the car in km/h:")); // prompts user to enter speed
    if (isNaN(speed)) {
        console.log("Please enter a valid number.");
        return;
    }

    const demeritPoints = calculatePoints(speed);  // takes result from calculates demeritPoints function
    if (demeritPoints === "Ok") {
        console.log("Ok");
    } else {
        console.log(`Demerit points: ${demeritPoints}`); // returns output to user with number of demerit points
    }
}


main();
