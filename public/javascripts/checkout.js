document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardnumber');
    const cardTypeIcon = document.getElementById('card-type-icon');
    const dateInput = document.getElementById('date');
  
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
        cardTypeIcon.src = '/images/visa.png';
        cardTypeIcon.style.display = 'block';
      } else if (value.startsWith('5')) {
        cardTypeIcon.src = '/images/mastercard.png';
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
  });
  
  function showPaymentForm(method) {
    const cardForm = document.getElementById('cardPaymentForm');
    const mpesaForm = document.getElementById('mpesaPaymentForm');
    
    if (method === 'card') {
      cardForm.style.display = 'block';
      mpesaForm.style.display = 'none';
    } else if (method === 'mpesa') {
      cardForm.style.display = 'none';
      mpesaForm.style.display = 'block';
    }
  }