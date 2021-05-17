const burger=document.querySelector(".container .nav-bar .nav-list .burger");
const mobileMenu=document.querySelector(".container .nav-bar .nav-list ul");
const header=document.querySelector(" .container ");
burger.addEventListener("click",()=>{
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

});
