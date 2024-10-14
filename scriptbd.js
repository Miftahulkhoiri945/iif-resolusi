function showForm(shape) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';

    let formHTML = '';

    if (shape === 'rectangle') {
        formHTML = `
            <form onsubmit="calculateArea(event, 'rectangle')">
                <label for="length">Panjang:</label>
                <input type="number" id="length" name="length" required>
                <label for="width">Lebar:</label>
                <input type="number" id="width" name="width" required>
                <button type="submit">Hitung Luas Persegi Panjang</button>
            </form>
        `;
    } else if (shape === 'square') {
        formHTML = `
            <form onsubmit="calculateArea(event, 'square')">
                <label for="side">Sisi:</label>
                <input type="number" id="side" name="side" required>
                <button type="submit">Hitung Luas Persegi</button>
            </form>
        `;
    } else if (shape === 'triangle') {
        formHTML = `
            <form onsubmit="calculateArea(event, 'triangle')">
                <label for="base">Alas:</label>
                <input type="number" id="base" name="base" required>
                <label for="height">Tinggi:</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hitung Luas Segitiga</button>
            </form>
        `;
    } else if (shape === 'circle') {
        formHTML = `
            <form onsubmit="calculateArea(event, 'circle')">
                <label for="radius">Jari-jari:</label>
                <input type="number" id="radius" name="radius" required>
                <button type="submit">Hitung Luas Lingkaran</button>
            </form>
        `;
    }

    formContainer.innerHTML = formHTML;
}

function calculateArea(event, shape) {
    event.preventDefault();

    let area = 0;

    if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        area = length * width;
    } else if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        area = side * side;
    } else if (shape === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        area = 0.5 * base * height;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        const pi = 3.14;
       
            area = 3.14 * Math.pow(radius, 2);

    }

    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = `Luas: ${area}`;
    } else {
        const newResultDiv = document.createElement('div');
        newResultDiv.id = 'result';
        newResultDiv.textContent = `Luas: ${area}`;
        document.getElementById('form-container').appendChild(newResultDiv);
    }
}
