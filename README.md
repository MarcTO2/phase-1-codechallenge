# phase-1-codechallenge

In this challenge we have a grading system where if prompted you enter a number between 0 - 100 and it tells you what grade it is

function studentMarks(grade) {
    if(grade > 79) {
        alert("A")
    } else if(grade >= 60 && grade <= 79) {
        alert("B")
    } else if(grade >= 50 && grade <= 59) {
        alert("C")
    }else if(grade >= 40 && grade <= 49) {
        alert("D")
    } else {
        alert("E")
    }
}

let grade = parseInt(prompt("Enter student marks(ranging between 0 and 100):"));

let marks = studentMarks(grade);

console.log("Grade:" + marks);

In the second challenge which is the speed test you're required to create a speed system that calculates demerit points


function calculateDemeritpoints(speed) {
    const speedLimit = 70;
    const DemeritpointspeKm = 5;

    if (speed <= speedLimit) {
        return "Ok";
        
    }else {
        const demeritPoints = Math.floor((speed - speedLimit) / DemeritpointspeKm);

        if(demeritPoints > 12) {
            return "License Suspended"
        } else {
            return "Point:" + demeritPoints;
        }
    }
}

// const prompt = require("prompt-sync")({sigint:true})

// let speed = parseInt(prompt("Enter the speed of the car (in Km/h):"))

let result = calculateDemeritpoints(160)

console.log(result);


Lastly is the salary system where it is capable to calculate your netsalary
