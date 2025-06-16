
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const closeMenuButton = document.getElementById('close');
console.log(closeMenuButton);

menu.addEventListener('click', () => {
    mobileMenuContainer.style.display = 'flex';
});
closeMenuButton.addEventListener('click', () => {

    mobileMenuContainer.style.display = 'none';
});
