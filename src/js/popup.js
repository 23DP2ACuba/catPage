window.onload = function() {
    document.getElementById("popup").style.display = "flex";
};

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});


window.addEventListener("click", function(event) {
    let popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
