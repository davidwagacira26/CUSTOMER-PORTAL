
// Sample driver data for demonstration
let drivers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', telephone: '(123) 456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', telephone: '(987) 654-3210' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', telephone: '(555) 123-4567' }
];

let deleteDriverId = null; // To hold the ID of the driver to be deleted

// Function to update the driver table
function updateDriverTable() {
    const tableBody = document.querySelector('#driverTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    drivers.forEach(driver => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${driver.id}</td>
            <td>${driver.name}</td>
            <td>${driver.email}</td>
            <td>${driver.telephone}</td>
            <td>
                <button class="edit-btn" data-id="${driver.id}">Edit</button>
                <button class="delete-btn" data-id="${driver.id}">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to open the add driver modal
function openAddModal() {
    document.getElementById('driverModal').style.display = "block";
}

// Function to close the add driver modal
function closeAddModal() {
    document.getElementById('driverModal').style.display = "none";
    document.getElementById('addDriverForm').reset(); // Reset the form fields
}

// Function to open the edit modal with driver data
function openEditModal(driver) {
    document.getElementById('editDriverId').value = driver.id;
    document.getElementById('editName').value = driver.name;
    document.getElementById('editEmail').value = driver.email;
    document.getElementById('editTelephone').value = driver.telephone;
    document.getElementById('editDriverModal').style.display = "block";
}

// Function to close the edit modal
function closeEditModal() {
    document.getElementById('editDriverModal').style.display = "none";
    document.getElementById('editDriverForm').reset(); // Reset the form fields
}

// Handle form submission for adding a driver
document.getElementById('addDriverForm').onsubmit = function(event) {
    event.preventDefault();
    const newDriver = {
        id: drivers.length + 1, // Simple ID assignment
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value
    };
    
    drivers.push(newDriver); // Add new driver to array
    updateDriverTable(); // Update the driver table
    alert('Driver added successfully!');
    closeAddModal(); // Close modal
};

// Event listener for closing the add modal
document.getElementById('closeAddModal').onclick = closeAddModal;

// Handle form submission for editing a driver
document.getElementById('editDriverForm').onsubmit = function(event) {
    event.preventDefault();
    const id = document.getElementById('editDriverId').value;
    const updatedName = document.getElementById('editName').value;
    const updatedEmail = document.getElementById('editEmail').value;
    const updatedTelephone = document.getElementById('editTelephone').value;

    const driverIndex = drivers.findIndex(driver => driver.id == id);
    if (driverIndex !== -1) {
        drivers[driverIndex] = {
            id: id,
            name: updatedName,
            email: updatedEmail,
            telephone: updatedTelephone
        };
        updateDriverTable(); // Refresh the driver table
        alert('Driver updated successfully!');
        closeEditModal(); // Close modal
    }
};

// Event listener for the edit buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const driverId = event.target.getAttribute('data-id');
        const driver = drivers.find(driver => driver.id == driverId);
        openEditModal(driver);
    }

    // Event listener for delete buttons
    if (event.target.classList.contains('delete-btn')) {
        deleteDriverId = event.target.getAttribute('data-id');
        document.getElementById('deleteConfirmationModal').style.display = "block"; // Show delete confirmation modal
    }
});

// Event listener for confirming the delete action
document.getElementById('confirmDelete').onclick = function() {
    drivers = drivers.filter(driver => driver.id != deleteDriverId);
    updateDriverTable(); // Refresh the driver table
    document.getElementById('deleteConfirmationModal').style.display = "none"; // Close modal
    alert('Driver deleted successfully!');
};

// Event listener for canceling the delete action
document.getElementById('cancelDelete').onclick = function() {
    document.getElementById('deleteConfirmationModal').style.display = "none"; // Close modal without deleting
};

// Event listener for the Add Driver button (Fixed ID)
document.getElementById('add-driver').onclick = openAddModal;

// Event listener for closing the edit modal
document.getElementById('closeEditModal').onclick = closeEditModal;

// Initial population of the driver table
updateDriverTable();

