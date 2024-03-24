function calculateGrade(mark) {    // function to calculate grades depending on mark input 
    if (mark > 79 && mark <= 100) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 49 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else if (mark >= 0 && mark < 40) {
        return 'E';
    } else {
        return 'Invalid input';   //returns invalid input if number input is below 0 or above 100
    }
}

function promptForMarks() {        //function to prompt user for input
    let mark = parseFloat(prompt("Enter mark,between 0 and 100:"));  // request input
    while (isNaN(mark) || mark < 0 || mark > 100) {
        mark = parseFloat(prompt("Invalid input. Please enter a mark between 0 and 100:"));  // while loop to return message for invalid inputs including non-numbers
    }
    return mark;
}

function main() {
    const mark = promptForMarks();
    const grade = calculateGrade(mark);
    console.log(`The grade for ${mark} is: ${grade}`);
}

// run main function
main();