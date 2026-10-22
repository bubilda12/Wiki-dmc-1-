let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.testnav')

burger.addEventListener("click", function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})