
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const closeMenuButton = document.getElementById('close');
// console.log(closeMenuButton);
menu.addEventListener('click', () => {
    mobileMenuContainer.style.display = 'flex';
});
closeMenuButton.addEventListener('click', () => {

    mobileMenuContainer.style.display = 'none';
});

// const test = (n)=>{
//   return(x)=>{
//     return n+x
//   }
// }
// let j = test(30);
// console.log(j(32));


// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(console.log("respone recieved"))
//   },3000)
// })
// const try_it = async()=>{
//   let response = await promise
// console.log(response);
// }

// try_it()
// console.log("still going");


 
