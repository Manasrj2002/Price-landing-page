// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('pricing-toggle');
    const prices = document.querySelectorAll('.price');

    toggle.addEventListener('change', () => {
        prices.forEach(price => {
            if (toggle.checked) {
                price.textContent = price.getAttribute('data-yearly');
            } else {
                price.textContent = price.getAttribute('data-monthly');
            }
        });
    });
});