document.getElementById("inputButton").addEventListener("click", redirectToPrompt);
document.getElementById("redirectButton").addEventListener("click", redirectToInput);

function redirectToPrompt() {
    const link = prompt("Введіть посилання:");
    if (link) {
        localStorage.setItem("savedLink", link);
    }
}

function redirectToInput() {
    const savedLink = localStorage.getItem("savedLink");
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Посилання ще не введено.");
    }
}
