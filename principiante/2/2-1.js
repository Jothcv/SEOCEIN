
let correctAnswer = 'cuidado';

function checkAnswer(button, userAnswer) {
    if (userAnswer === correctAnswer) {
         button.style.backgroundColor = '#4CAF50'; 
        document.getElementById('nextBtn').disabled = false; 
        document.getElementById('nextBtn').classList.add('enabled'); 
    } else {
        button.style.backgroundColor = '#f44336'; 
        document.getElementById('nextBtn').disabled = true;
        document.getElementById('nextBtn').classList.remove('enabled');
    }
}

function nextQuestion() {
    window.location.href = '1-3.html';
}
