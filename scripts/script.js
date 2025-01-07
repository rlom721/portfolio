var email = "rafaela.lomboy@gmail.com";

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function copyText() {
    var text = email;

    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
}
  
let element = document.getElementById("fadeIn");
let opacity = 0;
let fadeIn = setInterval(() => {
   if (opacity >= 1) {
      clearInterval(fadeIn);
   }
   element.style.opacity = opacity;
   opacity += 0.01;
}, 10);