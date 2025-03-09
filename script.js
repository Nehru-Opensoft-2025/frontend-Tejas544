document.addEventListener("DOMContentLoaded", function () {
    let toggles = document.querySelectorAll(".level, .sublevel");

    toggles.forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
            event.stopPropagation(); 
            
            let childUl = toggle.querySelector(":scope > ul");  
            
            if (childUl) {
                childUl.style.display = childUl.style.display === "block" ? "none" : "block";
            }
        });
    });
});
