function transition() {
    document.body.style.overflow = 'hidden';

    document.getElementById("next").scrollIntoView({ behavior: "smooth" }); 
};
function btransition() {
    document.body.style.overflow = 'hidden';

    document.getElementById("back").scrollIntoView({ behavior: "smooth" }); 
};

function enlarge(element) {
    element.style.transform = "scale(1.5)";

    element.style.transition = "transform 0.25 ease";
}

function resetimg(element) {
    element.style.transform = "scale(1)";

    element.style.transition = "transform 0.25 ease";
}

