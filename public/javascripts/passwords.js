  document.addEventListener('DOMContentLoaded', function() {
      const createPasswordInput = document.getElementById('createPassword');
      const reEnterPasswordInput = document.getElementById('reEnterPassword');
      const passwordErrorMessage = document.getElementById('password-error-message');
      const reEnterErrorMessage = document.getElementById('reenter-error-message');

      document.getElementById('detailsForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const createPassword = createPasswordInput.value;
        const reEnterPassword = reEnterPasswordInput.value;

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

        window.location.href = '/';
      });
    });