document.addEventListener("DOMContentLoaded", function() {
    // Function to validate form inputs
    function validateForm() {
        var name = document.forms["registrationForm"]["name"].value;
        var gender = document.forms["registrationForm"]["gender"].value;
        var age = document.forms["registrationForm"]["age"].value;
        var contact = document.forms["registrationForm"]["contact"].value;

        if (name == "" || gender == "" || age == "" || contact == "") {
            alert("All fields must be filled out");
            return false;
        }
        return true;
    }

    // Adding event listener to form submission
    var form = document.getElementById("registrationForm");
    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
