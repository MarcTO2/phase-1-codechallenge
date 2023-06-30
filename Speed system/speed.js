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