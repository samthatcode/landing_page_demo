document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('mobile-nav');
    });
});


function myFunction() {
    document.getElementById('demo').innerHTML = "Paragraph Changed"
    console.log("Paragraph CHanged!!")
    // document.write("Welcome");
    // window.alert("Welcome to the Demo Page");
}

let names = ["Charles", "Lawal", "Saheed"]
console.log("Names of IT Stuedents present", names)
