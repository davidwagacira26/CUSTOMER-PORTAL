let selectedPaymentMethod = 'card';

document.addEventListener('DOMContentLoaded', function() {
  const cardNumberInput = document.getElementById('cardnumber');
  const cardTypeIcon = document.getElementById('card-type-icon');
  const dateInput = document.getElementById('date');
  const phoneInput = document.getElementById('phoneNumber');
  const payButton = document.getElementById('payButton');

  cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    
    e.target.value = formattedValue;

    // Detect card type
    if (value.startsWith('4')) {
      cardTypeIcon.src = '/assets/images/visa.png';
      cardTypeIcon.style.display = 'block';
    } else if (value.startsWith('5')) {
      cardTypeIcon.src = '/assets/images/mastercard.png';
      cardTypeIcon.style.display = 'block';
    } else {
      cardTypeIcon.style.display = 'none';
    }
  });

  dateInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = value.substr(0, 2);
      if (value.length > 2) {
        formattedValue += ' / ' + value.substr(2, 2);
      }
    }
    
    e.target.value = formattedValue;
  });

  const prefix = '+254';

  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (!value.startsWith('254')) {
      value = '254' + value;
    }
    
    if (value.length > 12) {
      value = value.slice(0, 12);
    }

    e.target.value = '+' + value;
  });

  phoneInput.addEventListener('focus', function(e) {
    if (e.target.value === '') {
      e.target.value = prefix;
    }
    e.target.setSelectionRange(prefix.length, prefix.length);
  });

  phoneInput.addEventListener('blur', function(e) {
    if (e.target.value === prefix) {
      e.target.value = '';
    }
  });

  payButton.addEventListener('click', handlePayment);
});

function showPaymentForm(method) {
  const cardForm = document.getElementById('cardPaymentForm');
  const mpesaForm = document.getElementById('mpesaPaymentForm');

  if (method === 'card') {
    cardForm.style.display = 'block';
    mpesaForm.style.display = 'none';
    selectedPaymentMethod = 'card';
  } else if (method === 'mpesa') {
    cardForm.style.display = 'none';
    mpesaForm.style.display = 'block';
    selectedPaymentMethod = 'mpesa';
  }
}

async function handlePayment() {
  const loadingIndicator = document.getElementById('loadingIndicator');
  const errorMessage = document.getElementById('errorMessage');

  loadingIndicator.style.display = 'block';
  errorMessage.style.display = 'none';

  if (selectedPaymentMethod === 'mpesa') {
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    try {
      const response = await fetch('/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phoneNumber })
      });

      const result = await response.json();

      if (result.ResponseCode === "0") {
        alert('Payment initiated. Please check your phone to complete the payment.');
        window.location.href = '/thankyou';
      } else {
        throw new Error(result.errorMessage || 'Failed to initiate payment');
      }
    } catch (error) {
      errorMessage.textContent = 'Failed to initiate M-Pesa payment. Please try again.';
      errorMessage.style.display = 'block';
      console.error('Error:', error);
    } finally {
      loadingIndicator.style.display = 'none';
    }
  } else if (selectedPaymentMethod === 'card') {
    // Implement card payment logic here
    alert('Card payment processing is not implemented yet.');
    loadingIndicator.style.display = 'none';
  } else {
    errorMessage.textContent = 'Please select a payment method.';
    errorMessage.style.display = 'block';
    loadingIndicator.style.display = 'none';
  }
}