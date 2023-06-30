


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







