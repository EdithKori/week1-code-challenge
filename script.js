//A > 79, B - 60 to 79, C -  49 to 59, D - 40 to 49, E - less 40.

// Challenge 1: Student Grade Generator
// Prompts the user for marks and outputs the grade

function getGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid marks! Enter a value between 0 and 100.";
  } else if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60) {
    return "Grade: B";
  } else if (marks >= 49) {
    return "Grade: C";
  } else if (marks >= 40) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}


// Example test
console.log(getGrade(100)); // Output: Grade