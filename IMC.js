function calculateIMC() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    const imc = weight / Math.pow(height, 2);
    let classification;

    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classification = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        classification = 'Sobrepeso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        classification = 'Obesidade Grau I (leve)';
    } else if (imc >= 35.0 && imc <= 39.9) {
        classification = 'Obesidade Grau II (moderada)';
    } else {
        classification = 'Obesidade Grau III (grave)';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${name}, seu IMC é ${imc.toFixed(2)}.</p><p>Classificação: ${classification}</p>`;
}

document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateIMC();
});
