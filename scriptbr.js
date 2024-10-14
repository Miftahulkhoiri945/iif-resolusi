function showForm(shape) {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';

    let formHTML = '';

    if (shape === 'kubus') {
        formHTML = `
            <form onsubmit="calculateVolume(event, 'kubus')">
                <label for="side">Sisi:</label>
                <input type="number" id="side" name="side" required>
                <button type="submit">Hitung Volume Kubus</button>
            </form>
        `;
    } else if (shape === 'balok') {
        formHTML = `
            <form onsubmit="calculateVolume(event, 'balok')">
                <label for="length">Panjang:</label>
                <input type="number" id="length" name="length" required>
                <label for="base">Alas:</label>
                <input type="number" id="base" name="base" required>
                <label for="height">Tinggi:</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hitung Volume Balok</button>
            </form>
        `;
    } else if (shape === 'tabung') {
        formHTML = `
            <form onsubmit="calculateVolume(event, 'tabung')">
                <label for="radius">Jari-jari:</label>
                <input type="number" id="radius" name="radius" required>
                <label for="height">Tinggi:</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hitung Volume Tabung</button>
            </form>
        `;
    } else if (shape === 'kerucut') {
        formHTML = `
            <form onsubmit="calculateVolume(event, 'kerucut')">
                <label for="radius">Jari-jari:</label>
                <input type="number" id="radius" name="radius" required>
                <label for="height">Tinggi:</label>
                 <input type="number" id="height" name="height" required>
                <button type="submit">Hitung Volume Kerucut</button>
            </form>
        `;
    }

    formContainer.innerHTML = formHTML;
}

function calculateVolume(event, shape) {
    event.preventDefault();

    let area = 0;

    if (shape === 'kubus') {
        const side = parseFloat(document.getElementById('side').value);
        area = side * side * side;
        // v= s x s x s
    } else if (shape === 'balok') {
        const length = parseFloat(document.getElementById('length').value);
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        area = length * base * height;
        // v= p x l x t
    } else if (shape === 'tabung') {
        const radius = parseFloat(document.getElementById('radius').value);
        const height = parseFloat(document.getElementById('height').value);
        const pi = 3.14;
        //Math.pow(radius, 2): Ini adalah fungsi JavaScript untuk menghitung pangkat. 
       // Math.pow(radius, 2) berarti radius/jari-jari dikuadratkan (atau radius dikalikan dengan dirinya sendiri).
        area = 3.14 * Math.pow(radius,2) * height;
        // v=luas alas x tinggi
    } else if (shape === 'kerucut') {
        const radius = parseFloat(document.getElementById('radius').value);
        const height = parseFloat(document.getElementById('height').value);
        const pi = 3.14;
            area = 1/3 * 3.14 * Math.pow(radius, 2) * height;
       //v=1/3 x pi.r² x tinggi 
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
