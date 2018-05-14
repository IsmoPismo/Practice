document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults(e){
  console.log('Calculating...');

  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal * x * calculateInterest)/(x - 1);

  // Error checking
  if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
  } else {
      showError('Please check your numbers')
  }
  e.preventDefault();
}

function showError(errorMsg){
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(errorMsg));

  const card = document.querySelector('.card');
  const header = document.querySelector('.heading');

  // insert ERROR before header
  card.insertBefore(errorDiv, header);
  setTimeout(clearError, 3200);
}

function clearError(){
  document.querySelector('.alert').remove();
}
