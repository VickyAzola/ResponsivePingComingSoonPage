const errorMessage = document.getElementById("errorMessage");
const emailForm = document.getElementById("emailForm")


let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;      


function validForm(event) {
    let form = document.forms["submit"]["email"].value;
    if (form == "" || !form.match(emailFormat)) {
        emailForm.style.borderColor= "#FF5263"
        errorMessage.textContent = "Please provide a valid email adress";
        errorMessage.style.marginBottom = "1.5rem";
        return false;
    } else {
        errorMessage.textContent = ""
        emailForm.style.borderColor= "#C2D3FF"
        errorMessage.style.marginBottom = "0rem";
        alert("Thank you for subscribing!");
        event.preventDefault()
    }
}
