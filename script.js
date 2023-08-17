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

let recommend = document.getElementById("recommend");
let submit = document.getElementById("submit");
var Mscore = 0;
var Cscore = 0;
var Escore = 0;
submit.onclick = function() {
//   Med
  if (document.getElementById("Mcorrect1").checked) {
    Mscore++;
  }
  if (document.getElementById("Mcorrect2").checked) {
    Mscore++;
  }
  if (document.getElementById("Mcorrect3").checked) {
    Mscore++;
  }
//   Coding
  if (document.getElementById("Ccorrect1").checked) {
    Cscore++;
  }
  if (document.getElementById("Ccorrect2").checked) {
    Cscore++;
  }
  if (document.getElementById("Ccorrect3").checked) {
    Cscore++;
  }
//   Engineering
if (document.getElementById("Ecorrect1").checked) {
    Escore++;
  }
  if (document.getElementById("Ecorrect2").checked) {
    Escore++;
  }
  if (document.getElementById("Ecorrect3").checked) {
    Escore++;
  }
  if (Mscore > Escore && Mscore > Cscore){
    recommend.innerHTML ="You should go for the Med field! Click Opportunities above and click Medical.";
  }
  if (Escore > Mscore && Escore > Cscore){
    recommend.innerHTML = "You should go for the Engineering field! Click Opportunities above and click Engineering";  }
  if (Cscore > Escore && Cscore > Mscore){
    recommend.innerHTML = "You should go for the Coding field! Click Opportunities above and click coding.";  }
}