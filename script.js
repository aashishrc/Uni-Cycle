// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const dob = document.getElementById("dob").value;
//     const university = document.getElementById("university").value;
//     const universityEmail = document.getElementById("universityEmail").value;
//     const address1 = document.getElementById("address1").value;
//     const city = document.getElementById("city").value;
//     const state = document.getElementById("state").value;
//     const zipCode = document.getElementById("zipCode").value;   
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirmPassword").value;

//     if (!firstName || !lastName || !dob || !university || !universityEmail || !address1 || !city || !state || !zipCode || !password || !confirmPassword) {
//         alert("All fields are required");
//         console.log("All are required")
//         event.preventDefault();
//     } else if (password !== confirmPassword) {
//         alert("Passwords do not match");
//         var divtext = document.getElementById("confirmPasswordStatus");
//         divtext.innerHTML = "Passwords do not match";
//         divtext.style.display ="inline";
//         divtext.style.color ="red";
//         event.preventDefault();
//     } else if (!isValidEmail(email)) {
//         alert("Invalid email format");
//         event.preventDefault();
//     } else if (!validateName(firstName) || !isValidName(lastName)) {
//         alert("Full Name and Last Name should not contain numbers or special characters");
//         event.preventDefault();
//     }
// });


var firstName = document.getElementById("firstName");
firstName.addEventListener("input",validateName);

function validateName(){
    firstName = document.getElementById("firstName");
    const name = firstName.value
    var divtext = document.getElementById("firstNameStatus");
    var nameRegex = /^[a-zA-Z]+$/;
    if (!name){
        divtext.innerHTML = "Text Field cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(!nameRegex.test(name)){
        divtext.innerHTML = "Text Field cannot have numbers or special characters";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(name.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(name.trim().length == 1  ){
        divtext.innerHTML ="Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}


var lastName = document.getElementById("lastName");
lastName.addEventListener("input",validateLastName)

function validateLastName(){
    const lname = lastName.value
    var divtext = document.getElementById("lastNameStatus");
    var nameRegex = /^[a-zA-Z]+$/;
    if(!lname){
        divtext.innerHTML = "Last Name cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    if(!nameRegex.test(lname)){
        divtext.innerHTML = "Text Field cannot have numbers or special characters";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(lname.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(lname.trim().length <= 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        validateForm()
        return true;
    }
}

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validateEmail)

function validateEmail(){
    {
        var divtext = document.getElementById("emailIdStatus");
        var regex = /[A-Za-z]+@northeastern\.edu/i;
        if(!emailId.value){
            divtext.innerHTML = "Email cannot be empty";
            divtext.style.display ="inline";
            divtext.style.color ="red";
            return false;
        }
        if (!regex.test(emailId.value)){
            divtext.innerHTML = "Incorrect Email";
            divtext.style.display ="inline";
            divtext.style.color ="red";
            return false;
        }
        else{
            divtext.style.display ="none";
            return true;
        }
    }
}

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validatePhoneNumber)

function validatePhoneNumber(){
    var divtext = document.getElementById("phoneNumberStatus");
    var phoneRegex = /^\d{10}$/;
    if(!phoneNumber.value){
        divtext.innerHTML = "Phone Number cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    if (!phoneRegex.test(phoneNumber.value)) {
        divtext.innerHTML = "Invalid Phone Number format (10 digits without hyphens).";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

var address1 = document.getElementById("address1");
address1.addEventListener("input", validateAddress)

function validateAddress(){
    var divtext = document.getElementById("address1Status");
    var addregex = /^[a-zA-Z0-9\s,.'-]+$/;
    if(!address1.value){
        divtext.innerHTML = "Address cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    if (!addregex.test(address1.value)){
        divtext.innerHTML = "Address cannot have special characters";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(address1.value.trim().length > 30  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(address1.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

var city = document.getElementById("city");
city.addEventListener("input",validateCity)

function validateCity(){
    var divtext = document.getElementById("cityStatus");
    if(city.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(city.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

var state = document.getElementById("state");
state.addEventListener("input",validateState)

function validateState(){
    var divtext = document.getElementById("stateStatus");
    if(state.value.trim().length > 20  ){
        divtext.innerHTML = "Text Field too long";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(state.value.trim().length === 1  ){
        divtext.innerHTML = "Text Field too short";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

var zipcode = document.getElementById("zipCode");
zipcode.addEventListener("input",validateZipCode)

function validateZipCode(){
    var divtext = document.getElementById("zipCodeStatus");
    var zipRegex =/^\d{5}$/;
    if(!zipcode.value){
        divtext.innerHTML = "Zip Code cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    if (!zipRegex.test(zipcode.value)) {
        divtext.innerHTML = "Invalid ZipCode format (e.g., xxxxxx).";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}


var password = document.getElementById("password")
password.addEventListener("input",validatePassword)

function validatePassword(){
    console.log("inside if")
    var divtext = document.getElementById("passwordStatus")
    var lengthRegex = /[A-Za-z\d@$!%*?&]{8,20}/;
    var specialCharactersRegex = /(?=.*[@$!%*?&])/;
    var digitRegex = /(?=.*\d)/;
    var uppercaseRegex = /(?=.*[A-Z])/;
    var lowercaseRegex = /(?=.*[a-z])/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if(!password){
        divtext.innerHTML = "Password cannot be empty";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    if(!lengthRegex.test(password.value)){
        divtext.innerHTML = "Invalid Password format: Password length should be between 8 and 20 characters";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(!specialCharactersRegex.test(password.value)){
        divtext.innerHTML = "Invalid Password format: Password should have at least one special character (@a,*,#,%,!,^,&..)";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(!digitRegex.test(password.value)){
        divtext.innerHTML = "Invalid Password format: Password should have at least one digit betwen 0-9";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(!uppercaseRegex.test(password.value)){
        divtext.innerHTML = "Invalid Password format: Password should have at least one uppercase letter";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else if(!lowercaseRegex.test(password.value)){
        divtext.innerHTML = "Invalid Password format: Password should have at least one lowercase letter";
        divtext.style.display ="inline";
        divtext.style.color ="red";
        return false;
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

var confirmpassword = document.getElementById("confirmPassword")
confirmpassword.addEventListener("input",validateConfirmPassword)

function validateConfirmPassword(){
    var divtext = document.getElementById("confirmPasswordStatus");
    if(!confirmpassword.value){
        divtext.innerHTML = "Please re-enter the password";
        divtext.style.display ="inline";
        divtext.style.color ="red";
    }
    if (password.value !== confirmpassword.value) {
        divtext.innerHTML = "Passwords do not match";
        divtext.style.display ="inline";
        divtext.style.color ="red";
    }
    else{
        divtext.style.display ="none";
        return true;
    }
}

function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidName(name) {
    // Check if the name contains only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}
