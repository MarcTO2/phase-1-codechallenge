function studentMarks(grade) {
    if(grade > 79) {
        return "A";
    } else if(grade >= 60 && grade <= 79) {
        return "B"
    } else if(grade >= 50 && grade <= 59) {
        return "C"
    }else if(grade >= 40 && grade <= 49) {
        return "D"
    } else {
        return "E"
    }
}

let grade = parseFloat(prompt("Enter student marks(ranging between 0 and 100):"));

let marks = studentMarks(90);

console.log("Grade:" + marks);