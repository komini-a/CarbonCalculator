function calculate() {
    const km = document.getElementById('km').value || 0;
    const elec = document.getElementById('elec').value || 0;

    const total = (km * 0.12 * 30) + (elec * 0.45);

    document.getElementById("result").innerText = 'Montly CO2 Emissions: ' + total.toFixed(3) + ' kg';
}