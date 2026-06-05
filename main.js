
document.getElementById('generate-btn').addEventListener('click', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    lottoNumbersContainer.innerHTML = '';

    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.textContent = number;
            ball.style.backgroundColor = getBallColor(number);
            ball.style.transform = 'scale(0)';
            lottoNumbersContainer.appendChild(ball);
            setTimeout(() => ball.style.transform = 'scale(1)', 50); // Animation
        }, index * 200);
    });
});

function getBallColor(number) {
    if (number <= 10) return '#f9c941'; // Yellow
    if (number <= 20) return '#3498db'; // Blue
    if (number <= 30) return '#e74c3c'; // Red
    if (number <= 40) return '#586a7d'; // Gray
    return '#2ecc71'; // Green
}
