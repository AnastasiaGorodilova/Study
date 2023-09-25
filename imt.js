function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const result = document.getElementById("result");
    const message = document.getElementById("message");

    const bmi = weight / Math.pow(height, 2);
    const BMI = Math.round(bmi * 100) / 100;

    if (BMI > 0) {
        result.textContent = `Ваш ИМТ: ${BMI}`;
        if (BMI > 40) {
            message.textContent = 'Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.'
        }
        else if (BMI > 35.0) {
            message.textContent = 'Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.'
        }
        else if (BMI > 30.0) {
            message.textContent = 'Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.'
        }
        else if (BMI > 25.0) {
            message.textContent = 'Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.'
        }
        else if (BMI > 18.5) {
            message.textContent = ' Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.'
        }
        else
            message.textContent = 'Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.'
    } else
        result.textContent = `Введите ваш рост и вес`;
}
