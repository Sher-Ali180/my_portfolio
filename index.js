var tabliks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(link, tabname){
    for (tablink of tabliks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(link).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

function openMenu(){
    document.getElementById("menu").style.right = "0";
}

function closeMenu(){
    document.getElementById("menu").style.right = "-220";
}

window.addEventListener("DOMContentLoaded", (event) => {
  });