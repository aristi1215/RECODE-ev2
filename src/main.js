let burguer = document.getElementById("burguer");
let mobileMenu = document.getElementById("mobile-menu");
let closeMenu = document.getElementById("close-menu")
let body = document.querySelector("body")
let imgsContainers = document.getElementsByClassName("our-creations-container-desktop")

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

for (let i = 0; i < imgsContainers.length; i++) {
    imgsContainers[i].addEventListener("mouseover", function(){
        imgsContainers[i].children[1].style.transform = "scale(1.2)";
    });

    imgsContainers[i].addEventListener("mouseout", function(){
        imgsContainers[i].children[1].style.transform = "scale(1)";
    });
}