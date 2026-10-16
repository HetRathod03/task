const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", function () {
    const ingredientsSection = document.querySelector(".ingredients");

    ingredientsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});