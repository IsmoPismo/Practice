document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide elements (again)
  document.querySelector('#results').style.display = 'none';
  // Show loader
  document.querySelector('#loading').style.display = 'block';
  // 2 seconds later the result
  setTimeout(calculateResults, 2000)

  e.preventDefault();
})

function calculateResults(){
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal * x * calculateInterest)/(x - 1);

  if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
    // Handle elements
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
  } else {
      showError('Please check your numbers')
  }
}

function showError(errorMsg){
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const header = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(errorMsg));
  card.insertBefore(errorDiv, header);
  // Handle elements
  document.querySelector('#loading').style.display = 'none';
  setTimeout(clearError, 3200);
}

function clearError(){
  document.querySelector('.alert').remove();
}
