document.addEventListener("DOMContentLoaded", function() {
    let table = document.getElementById("pythagoreanTable");
    const size = 10;

    for (let i = 0; i <= size; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j <= size; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j === 0) {
                cell.textContent = '';
            } else if (i === 0) {
                cell.textContent = j;
            } else if (j === 0) {
                cell.textContent = i;
            } else {
                cell.textContent = i * j;
            }
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
});
