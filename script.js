document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    
    let gender = '';
    if (document.getElementById('gender-male').checked) {
        gender = document.getElementById('gender-male').value;
    } else if (document.getElementById('gender-female').checked) {
        gender = document.getElementById('gender-female').value;
    } else if (document.getElementById('gender-others').checked) {
        gender = document.getElementById('gender-others').value;
    }

    const foodElements = document.getElementsByClassName('food');
    let selectedFoods = [];
    for (let foodElement of foodElements) {
        if (foodElement.checked) {
            selectedFoods.push(foodElement.value);
        }
    }

    // Check if at least two food options are selected
    if (selectedFoods.length < 2) {
        alert('Please select at least two food options.');
        return;
    }

    // Create a new table row with the form data
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = firstName;
    newRow.insertCell(1).textContent = lastName;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = address;
    newRow.insertCell(4).textContent = pincode;
    newRow.insertCell(5).textContent = gender;
    newRow.insertCell(6).textContent = selectedFoods.join(', ');
    newRow.insertCell(7).textContent = state;
    newRow.insertCell(8).textContent = country;

    // Reset the form
    document.getElementById('form').reset();
});
