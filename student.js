// Challenge 1: Student Grade Generator (Toy Problem)
// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//  A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

function studentGradeGenerator(student, grade) {
    student = prompt("Enter your name: ");
    grade = prompt("Enter your grade: ");
    if (grade >= 79 && grade <= 100) {
        console.log(`Hello ${student} you scored a minimum grade of A`)
    }
    else if (grade >= 60 && grade < 79) {
        console.log(`Hello ${student} you scored a minimum grade of B`)
    }
    else if (grade >= 49 && grade <= 59) {
        console.log(`Hello ${student} you scored a minimum grade of C`)
    }
    else if (grade >= 40 && grade < 49) {
        console.log(`Hello ${student} you scored a minimum grade of D`)
    }
    else if (grade >= 0 && grade < 40) {
        console.log(`Hello ${student} you scored a minimum grade of E`)
    }
}
studentGradeGenerator();
