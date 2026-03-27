var typed= new Typed(".text", {
    strings:["Java Backend Developer", "Programmer", "Software Engineer"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    loop: true

})

window.addEventListener("scroll", function () {

    let skills = document.querySelector(".skill-heading");
    let position = skills.getBoundingClientRect().top;
    let screenPosition = window.innerHeight - 100;

    if (position < screenPosition && position > 0) {
        skills.classList.add("active");
    } else {
        skills.classList.remove("active");
    }

});

window.addEventListener("scroll", function () {

    let left = document.querySelector(".left-slide");
    let right = document.querySelector(".right-slide");

    let position = left.getBoundingClientRect().top;
    let screenPosition = window.innerHeight - 100;

    if (position < screenPosition) {
        left.classList.add("show");
        right.classList.add("show");
    }

});