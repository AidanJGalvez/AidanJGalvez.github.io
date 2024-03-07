function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 // Close the dropdown if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }


const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
  body.style.position = 'fixed';
});

closeModal.addEventListener("click", () => {
  modal.close();
});

document.querySelector('section').addEventListener('click', function() {
  document.querySelector('.smalldesc').classList.toggle('expand');
});

var acc = document.getElementsByClassName("filters");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



