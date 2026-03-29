
const toggleBtn = 
document.getElementById("theme-toggle") ;
toggleBtn.addEventListener("click" , ()=> {
    document.body.classList.toggle("dark")
    
    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀"
    } else {
        toggleBtn.textContent = "🌙"
    }
})

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("XwfeAiWsju5f_kdpq");

  document.getElementById("contact-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_049exwb", "template_5ec25us", this)
      .then(function() {
        alert("Message sent successfully ✅");
      }, function(error) {
        alert("Failed ❌");
        console.log(error);
      });
  });
});

let topBtn = document.querySelector(".topbtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}