// Collapsable quiz things

console.log("Yes I'm working");

var coll = document.getElementsByClassName("card-year");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display){
      content.style.display = "block";
    } else {
      content.style.display = "block";
    } 
  });
}
// The countdown timer
