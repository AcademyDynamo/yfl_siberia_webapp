document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".jersey").forEach(button => {
        button.addEventListener("click", () => {
            alert(`�� ������� �������: ${button.dataset.position}`);
        });
    });
});