const billTotalInput = document.getElementById('billTotal');
const tipPercentageInput = document.getElementById('tipPercentage');
const tipAmountInput = document.getElementById('tipAmount');
const totalBillInput = document.getElementById('totalBill');
const tipSlider = document.getElementById('tipSlider');
const billTotalLabel = document.querySelector('label[for="billTotal"]'); // Select label for billTotal

function calculateTip() {

    const billTotal = parseFloat(billTotalInput.value) || 0;
    const tipPercentage = parseFloat(tipSlider.value) / 100;
    const tipAmount = billTotal * tipPercentage;
    const totalBill = billTotal + tipAmount;

    tipPercentageInput.value = tipSlider.value + '%';
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillInput.value = totalBill.toFixed(2);
}
billTotalInput.addEventListener("input", function () {
    if (isNaN(billTotalInput.value)) {

        document.getElementById("billTotalError").textContent = "Please enter a valid number.";
    } else {

        document.getElementById("billTotalError").textContent = "";
    }
});

billTotalInput.addEventListener('input', () => {
    calculateTip();
});

tipSlider.addEventListener('input', () => {
    calculateTip();
});

const tipButtons = document.querySelectorAll('.tip-button');
tipButtons.forEach(button => {
    button.addEventListener('click', function () {
        const tipValue = parseFloat(this.dataset.tip);
        tipSlider.value = tipValue;
        calculateTip();
    });
});

calculateTip();