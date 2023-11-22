let checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", function() {
        for (let i = 0; i < document.querySelector("table").rows.length; i++) {
            let celda = document.querySelector("table").rows[i].cells[index];

            if (celda) {
                celda.style.display = this.checked ? "" : "none";
            }
        }
    });
});
