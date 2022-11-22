console.log("Script loaded");

var hamBgr = document.querySelector(".menu");
var nav = document.querySelector(".nav");


hamBgr.addEventListener("click", function(){
    hamBgr.classList.toggle("icon");
    nav.classList.toggle("show");
});

document.addEventListener("click", function (e) {
    // console.log(e.target.classList[1]);

    if(e.target.classList[1] !== "icon") {
        nav.classList.toggle("show");
        hamBgr.classList.toggle("icon");
        // console.log("YES");
    }
});
