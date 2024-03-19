document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the input field element
    var inputField = document.getElementById("inputField");
    // Retrieve the form element
    var form = document.getElementById("myForm");

    // Add event listener to the form for submission
    form.addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Retrieve the input field value
        var inputValue = inputField.value.trim();

        // Regular expression for alphanumeric input
        var alphanumericRegex = /^[a-zA-Z0-9]+$/;

        // Validate the input value using the regular expression
        if (!alphanumericRegex.test(inputValue)) {
        // If input is not alphanumeric display error message
            alert("Please enter only alphanumeric characters.");
            return false;
        } else {
        // If input is alphanumeric display confirmation
            alert("Form submitted successfully.");
            return true; 
        }
    });
});
