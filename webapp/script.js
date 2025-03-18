function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function toggleCard(cardNumber) {
    let card = document.querySelectorAll('#cards .button')[cardNumber - 1];
    card.classList.toggle('active-card');
}