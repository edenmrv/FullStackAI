const prompt = require('prompt-sync')();
const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What year is it?", answer: "2026" }
];

let score = 0;
for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i].question}`);
    let userAnswer = prompt("> ");
    
    // checking if answer correct
    if (userAnswer.trim().toLowerCase() === questions[i].answer.toLowerCase()) {
        score++;
    }
    console.log("-------------------"); 


console.log(`Final Score: ${score}/${questions.length} correct!`);
}