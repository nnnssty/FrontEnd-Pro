
    function changeColor() {
    const paragraph = document.getElementById("text");
    const button = document.getElementById("btn");

    if (paragraph.style.color === "red") {
        paragraph.style.color = "black";
        button.textContent = "Змінити колір";
    } else {
        paragraph.style.color = "red";
        button.textContent = "Повернути колір";
    }
}