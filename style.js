
var english = prompt("Enter marks for english:");
var maths = prompt("Enter marks for msths:");
var physics = prompt("Enter marks for physics:");
var chemistry = prompt("Enter marks for chemistry:");
var cs = prompt("Enter marks for cs:");
 


  var marks1 = Number(english);
  var marks2 = Number(maths);
  var marks3 = Number(physics);
  var marks4 = Number(chemistry);
  var marks5 = Number(cs);

  

  
  var totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
  var percentage = totalMarks/500 *100
  
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log("percentage:-" , percentage , "%")
  console.log("Grade:-" , grade)


  