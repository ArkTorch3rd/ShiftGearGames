window.onscroll = function() {navigation()}
var navbar = document.getElementsByClassName("button");
var stickybar = navbar.offsetTop;
function navigation(){
    if (window.pageYOffset >= stickybar){
        navbar.classList.add("stickybar")
    }else{
        navbar.classList.remove("stickybar")
    }
}