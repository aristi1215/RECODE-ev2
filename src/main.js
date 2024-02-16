let burguer = document.getElementById("burguer");
let mobileMenu = document.getElementById("mobile-menu");
let closeMenu = document.getElementById("close-menu")
let body = document.querySelector("body")

burguer.onclick = () =>{
    mobileMenu.classList.remove("hidden")
    mobileMenu.classList.remove("translate-x-[100rem]")
    mobileMenu.classList.add("translate-x-[0]")
    body.classList.add("overflow-y-hidden")
}
closeMenu.onclick = () =>{ 

    mobileMenu.classList.remove("translate-x-[0]")
    mobileMenu.classList.add("translate-x-[100rem]")
    body.classList.remove("overflow-y-hidden")
}