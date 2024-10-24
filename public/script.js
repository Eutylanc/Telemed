// Get the patient table element
const patientTable = document.getElementById('patientTable');

// Function to fetch and display patients
const fetchPatients = async () => {
  try {
    const response = await fetch('/patients/all');
    const patients = await response.json();

    // Populate the patient table
    patients.forEach(patient => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.firstName}</td>
        <td>${patient.lastName}</td>
        <td>${patient.email}</td>
        <td>${patient.phone}</td>
        <td>${patient.dateOfBirth}</td>
        <td>${patient.gender}</td>
        <td>${patient.address}</td>
        <td><button class="edit-button">Edit</button> <button class="delete-button">Delete</button></td>
      `;
      patientTable.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
};

// Call the function to fetch and display patients
fetchPatients();

// Add event listeners for edit and delete buttons
patientTable.addEventListener('click', event => {
  if (event.target.classList.contains('edit-button')) {
    const row = event.target.closest('tr');
    const patientId = row.querySelector('td:first-child').textContent;
    // Handle editing logic
    console.log('Edit patient:', patientId);
  } else if (event.target.classList.contains('delete-button')) {
    const row = event.target.closest('tr');
    const patientId = row.querySelector('td:first-child').textContent;
    // Handle deletion logic
    console.log('Delete patient:', patientId);
  }
});




