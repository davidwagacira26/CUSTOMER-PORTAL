// Sample customer data for demonstration
let customers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', telephone: '(123) 456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', telephone: '(987) 654-3210' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', telephone: '(555) 123-4567' }
];

// Function to update the customer table
function updateCustomerTable() {
    const tableBody = document.querySelector('#customerTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.telephone}</td>
            <td>
                <button class="edit-btn" data-id="${customer.id}">Edit</button>
                <button class="delete-btn" data-id="${customer.id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to open the add customer modal
function openAddModal() {
    document.getElementById('customerModal').style.display = "block";
}

// Function to close the add customer modal
function closeAddModal() {
    document.getElementById('customerModal').style.display = "none";
    document.getElementById('addCustomerForm').reset(); // Reset the form fields
}

// Function to open the edit modal with customer data
function openEditModal(customer) {
    document.getElementById('editCustomerId').value = customer.id;
    document.getElementById('editName').value = customer.name;
    document.getElementById('editEmail').value = customer.email;
    document.getElementById('editTelephone').value = customer.telephone;
    document.getElementById('editCustomerModal').style.display = "block";
}

// Function to close the edit modal
function closeEditModal() {
    document.getElementById('editCustomerModal').style.display = "none";
    document.getElementById('editCustomerForm').reset(); // Reset the form fields
}

// Function to open the delete confirmation modal
function openDeleteConfirmationModal(customerId) {
    document.getElementById('deleteConfirmationModal').style.display = "block";
    document.getElementById('confirmDelete').onclick = function() {
        deleteCustomer(customerId);
    };
}

// Function to close the delete confirmation modal
function closeDeleteConfirmationModal() {
    document.getElementById('deleteConfirmationModal').style.display = "none";
}

// Function to delete a customer
function deleteCustomer(customerId) {
    customers = customers.filter(c => c.id != customerId);
    updateCustomerTable(); // Refresh the customer table
    alert('Customer deleted successfully!');
    closeDeleteConfirmationModal(); // Close the confirmation modal
}

// Handle form submission for adding a customer
document.getElementById('addCustomerForm').onsubmit = function(event) {
    event.preventDefault();
    const newCustomer = {
        id: customers.length + 1, // Simple ID assignment
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value
    };
    
    customers.push(newCustomer); // Add new customer to array
    updateCustomerTable(); // Update the customer table
    alert('Customer added successfully!');
    closeAddModal(); // Close modal
};

// Event listener for closing the add modal
document.getElementById('closeAddModal').onclick = closeAddModal;

// Handle form submission for editing a customer
document.getElementById('editCustomerForm').onsubmit = function(event) {
    event.preventDefault();
    const id = document.getElementById('editCustomerId').value;
    const updatedName = document.getElementById('editName').value;
    const updatedEmail = document.getElementById('editEmail').value;
    const updatedTelephone = document.getElementById('editTelephone').value;

    const customerIndex = customers.findIndex(c => c.id == id);
    if (customerIndex !== -1) {
        customers[customerIndex] = {
            id: id,
            name: updatedName,
            email: updatedEmail,
            telephone: updatedTelephone
        };
        updateCustomerTable(); // Refresh the customer table
        alert('Customer updated successfully!');
        closeEditModal(); // Close modal
    }
};

// Event listener for the edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const customerId = event.target.getAttribute('data-id');
        const customer = customers.find(c => c.id == customerId);
        openEditModal(customer);
    }

    // Event listener for delete buttons
    if (event.target.classList.contains('delete-btn')) {
        const customerId = event.target.getAttribute('data-id');
        openDeleteConfirmationModal(customerId);
    }
});

// Event listener for the Add Customer button
document.getElementById('add-customer').onclick = openAddModal;

// Event listener for closing the edit modal
document.getElementById('closeEditModal').onclick = closeEditModal;

// Event listener for closing the delete confirmation modal
document.getElementById('closeDeleteModal').onclick = closeDeleteConfirmationModal;

// Initial population of the customer table
updateCustomerTable();
