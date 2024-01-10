window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanValues = {
    amount: 100000,
    years: 10,
    rate: 5,
  };

  const amountInput = document.querySelector("#loan-amount");
  const yearsInput = document.querySelector("#loan-years");
  const rateInput = document.querySelector("#loan-rate");

  amountInput.value = loanValues.amount;
  yearsInput.value = loanValues.years;
  rateInput.value = loanValues.rate;

  calculateMonthlyPayment(loanValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  console.log(monthlyRate);
  console.log(n);

  let monthlyPayment = (
    (values.amount * monthlyRate) / 1 -
    Math.pow(1 + monthlyRate, -n)
  ).toFixed(2);
  updateMonthly(monthlyPayment.toString());
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.querySelector("#monthly-payment");

  monthlyPaymentUI.innerText = monthly;
}
