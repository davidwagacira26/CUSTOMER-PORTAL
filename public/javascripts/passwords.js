  document.addEventListener('DOMContentLoaded', function() {
      const createPasswordInput = document.getElementById('createPassword');
      const reEnterPasswordInput = document.getElementById('reEnterPassword');
      const passwordErrorMessage = document.getElementById('password-error-message');
      const reEnterErrorMessage = document.getElementById('reenter-error-message');

      // Handle form submission
      document.getElementById('detailsForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const createPassword = createPasswordInput.value;
        const reEnterPassword = reEnterPasswordInput.value;

        // Validate password inputs
        if (createPassword.length < 6) {
          passwordErrorMessage.textContent = 'Password must be at least 6 characters long.';
          return;
        } else {
          passwordErrorMessage.textContent = '';
        }

        if (createPassword !== reEnterPassword) {
          reEnterErrorMessage.textContent = 'Passwords do not match.';
          return;
        } else {
          reEnterErrorMessage.textContent = '';
        }

        // If all validations pass, redirect to login.html
        window.location.href = 'login.html';
      });
    });