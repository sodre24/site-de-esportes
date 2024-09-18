// Exemplo de interatividade em JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.grid .item');

    images.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Você clicou em ${item.querySelector('p').textContent}`);
        });
    });
});
