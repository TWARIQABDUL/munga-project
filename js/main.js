
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const closeMenuButton = document.getElementById('close');
// console.log(closeMenuButton);
menu.addEventListener('click', () => {
    mobileMenuContainer.style.display = 'flex';
});
closeMenuButton.addEventListener('click', () => {

    mobileMenuContainer.style.display = 'none';
});

function multiplier(factor) {
  return  (number)=> {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
 
