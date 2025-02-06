function solveTrigonometry() {
    const angle = document.getElementById('angle').value;
    const func = document.getElementById('function').value;
    let result;
    const radians = angle * (Math.PI / 180);

    if (func === 'sin') {
        result = Math.sin(radians);
    } else if (func === 'cos') {
        result = Math.cos(radians);
    } else if (func === 'tan') {
        result = Math.tan(radians);
    }

    document.getElementById('trigResult').innerText = `The result is: ${result}`;
}

function calculateStatistics() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const func = document.getElementById('statFunction').value;
    let result;

    if (func === 'mean') {
        const sum = numbers.reduce((acc, val) => acc + val, 0);
        const mean = sum / numbers.length;
        result = `Mean: ${mean}`;
    } else if (func === 'median') {
        numbers.sort((a, b) => a - b);
        const mid = Math.floor(numbers.length / 2);
        if (numbers.length % 2 === 0) {
            result = `Median: ${(numbers[mid - 1] + numbers[mid]) / 2}`;
        } else {
            result = `Median: ${numbers[mid]}`;
        }
    } else if (func === 'mode') {
        const frequency = {};
        let maxFreq = 0;
        let modes = [];
        numbers.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
            if (frequency[num] > maxFreq) {
                maxFreq = frequency[num];
            }
        });
        for (const key in frequency) {
            if (frequency[key] === maxFreq) {
                modes.push(Number(key));
            }
        }
        result = `Mode: ${modes.join(', ')}`;
    }

    document.getElementById('statsResult').innerText = result;
}
