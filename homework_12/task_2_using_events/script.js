const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('button')) {
        const buttonText = event.target.textContent;
        alert('Клікнуто на кнопку: ' + buttonText);
    }
});
