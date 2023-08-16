// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown buttons
    var dropdowns = document.getElementsByClassName("dropbtnG");
    
    // Add click event listener to each dropdown button
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
});