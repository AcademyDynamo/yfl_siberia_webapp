document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".jersey").forEach(button => {
        button.addEventListener("click", () => {
            alert(`Вы выбрали позицию: ${button.dataset.position}`);
        });
    });
});