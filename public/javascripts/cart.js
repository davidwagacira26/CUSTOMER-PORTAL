    lucide.createIcons();
        document.getElementById('sidebar-toggle').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });

        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const quantityElement = event.target.parentElement.querySelector('span');
                let quantity = parseInt(quantityElement.textContent);
                
                if (event.target.textContent === '+') {
                    quantity += 1;
                } else if (quantity > 1) {
                    quantity -= 1;
                }

                quantityElement.textContent = quantity;
                // Update the total price here if needed
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (event) => {
                const cartItem = event.target.closest('.cart-item');
                cartItem.remove();
                // Update the total price here if needed
            });
        });