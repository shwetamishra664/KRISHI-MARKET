document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipcode = document.getElementById('zipcode').value.trim();
    const country = document.getElementById('country').value.trim();
  
    if (!name || !address || !city || !state || !zipcode || !country) {
      document.getElementById('message').textContent = "Please fill out all fields.";
      document.getElementById('message').style.color = "red";
    } else if (!/^\d{5}$/.test(zipcode)) {
      document.getElementById('message').textContent = "Please enter a valid 5-digit zip code.";
      document.getElementById('message').style.color = "red";
    } else {
      document.getElementById('message').textContent = "Address submitted successfully!";
      document.getElementById('message').style.color = "green";
  
      // Clear form fields
      document.getElementById('addressForm').reset();
    }
  });
  