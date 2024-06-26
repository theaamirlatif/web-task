// navbar
navbar = document.querySelector(".menus").querySelectorAll("a"); 
console.log(navbar);
navbar.forEach(element => {
        element.addEventListener("click", function(){
        navbar.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active");
    })
});

// video slider
function videoUrl(url) {
    document.getElementById("slider").src = url;
}
