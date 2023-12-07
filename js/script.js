function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!isNaN(alas) && !isNaN(tinggi)) {
        var hasil = 0.5 * alas * tinggi;
        tampilkanHasil('luasResult', 'Luas Segitiga', hasil);
    } else {
        alert('Silakan masukkan angka yang valid.');
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
        var hasil = sisi1 + sisi2 + sisi3;
        tampilkanHasil('kelilingResult', 'Keliling Segitiga', hasil);
    } else {
        alert('Silakan masukkan angka yang valid.');
    }
}

function tampilkanHasil(resultDiv, operasi, hasil) {
    document.getElementById(resultDiv).innerHTML = `${operasi}: ${hasil.toFixed(2)}`;
}

function resetForm(formId) {
    document.getElementById(formId).reset();
    var resultDiv = formId === 'luasForm' ? 'luasResult' : 'kelilingResult';
    document.getElementById(resultDiv).innerHTML = '';
}
