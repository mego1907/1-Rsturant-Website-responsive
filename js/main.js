// Navbar
var navbar = document.querySelector(".navbar");
// Navbar-Btn
var navbarBtn = document.querySelectorAll("ul li a");
// Drop Down-Btn
var dropBtn = document.querySelector("#dropdown-btn");
// Drop Down Icon
var dropIcon = document.querySelector(".navbar-nav .nav-link .fa-caret-up");
// Drop Down Menu
var dropMenu = document.getElementById("d-down-menu");


// Add Active Class in Navbar Link
for(let i = 0; i < navbarBtn.length; i++){
    navbarBtn[i].addEventListener("click", () => {
        navbarBtn.forEach((item) => {item.classList.remove('active')})
        navbarBtn[i].classList.add("active");
    })
}


// Add Scrolling Class when I Make A Scroll
window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop> 0){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
})


// Drop Down
dropBtn.addEventListener("click", () => {
    dropMenu.classList.toggle("active");
    dropIcon.classList.toggle("active")
})


// Tabs
var taps = document.querySelectorAll('.tap-wrap');
var tapsButton = document.querySelectorAll(".gallery ul li");

tapsButton.forEach(function(tab, tabIndex) {
    tab.addEventListener("click", function() {
        tapsButton.forEach(function(tab){
            tab.classList.remove("selected")
        });
        tab.classList.add("selected")

        taps.forEach(function(content, contentIndex){
            if(contentIndex == tabIndex){
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        })
    });
});
