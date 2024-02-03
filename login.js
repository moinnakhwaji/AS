function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var status = document.getElementById("status");

    // Validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        status.innerHTML = "Please fill in all fields.";
        status.style.color = "#dc3545"; // Set color to red for error
        return;
    }

    // Simulate sending email (replace with actual functionality)
    status.innerHTML = "Sending message...";
    status.style.color = "#007bff"; // Set color to blue for processing

    setTimeout(function() {
        status.innerHTML = "Message sent successfully!";
        status.style.color = "#28a745"; // Set color to green for success
    }, 2000);

    // Clear input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Clear status message after a few seconds
    setTimeout(function() {
        status.innerHTML = "";
    }, 4000);
}
