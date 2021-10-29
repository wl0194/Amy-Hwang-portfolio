// //contact form button
function validate () {
    var fullName = document.getElementById("#name");
    var emailAddress = document.getElementById("#email");
    var text = document.getElementById(.form-control);
    if (fullName.value == "") {
        alert("Please input your full name.");
        return false;
    }
    alert("Thank you for your message!");
    return true;
}