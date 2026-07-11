let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

const gradeCounts = studentScores.reduce((grades, score) => {
  if (score >= 90) {
    grades.A++;
  } else if (score >= 79) { 
    grades.B++;
  } else if (score >= 70) {
    grades.C++;
  } else {
    grades.F++;
  }
  
  return grades;
}, { A: 0, B: 0, C: 0, F: 0 });

console.log(gradeCounts);