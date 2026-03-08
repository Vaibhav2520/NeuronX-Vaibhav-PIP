function validateForm() {
    let username = document.getElementById("username").value;
    let error = document.getElementById("error");

    if (username.trim() === "") {
        error.innerText = "Username cannot be empty";
        return false;
    }

    error.innerText = "";
    return true;
}