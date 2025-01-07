document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function copyText() {
    var copyText = "rafaela.lomboy@gmail.com";

    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard: " + copyText);
}

window.onload = function() {
    const title = document.getElementById(".hero-text");
    title.classList.add("fade-in");
};