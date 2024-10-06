document.addEventListener('DOMContentLoaded', function() {
      const emailInput = document.getElementById('email');
      const errorMessage = document.getElementById('error-message');
      const continueBtn = document.getElementById('continueBtn');

      // Simulated registered email list (for example purposes)
      const registeredEmails = ['registered@example.com', 'user@kcc.com'];

      emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate email input
        if (emailValue === '') {
          errorMessage.textContent = '';
          continueBtn.disabled = true;
        } else if (!emailRegex.test(emailValue)) {
          errorMessage.textContent = 'Please enter a valid email address';
          continueBtn.disabled = true;
        } else if (!registeredEmails.includes(emailValue)) {
          // If email is not registered
          errorMessage.textContent = 'Email not registered. Please contact customer care for further assistance';
          continueBtn.disabled = true;
        } else {
          // If email is registered
          errorMessage.textContent = '';
          continueBtn.disabled = false;
        }
      });

      // Handle form submission
      document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();

        if (!continueBtn.disabled) {
          window.location.href = '/enter-details.html';  // Redirect to details form page
        }
      });
    });