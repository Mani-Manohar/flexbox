console.log("Script loaded");

var hamBgr = document.querySelector(".menu");
var nav = document.querySelector(".nav");


hamBgr.addEventListener("click", function(){
    hamBgr.classList.toggle("icon");
    nav.classList.toggle("show");
});