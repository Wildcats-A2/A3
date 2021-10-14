document.addEventListener("DOMContentLoaded", () => {
    const characterSheet = document.querySelector("#sheet");
    const tutorialSheet = document.querySelector("#tutorial");

    document.querySelector("#linkTutorial").addEventListener("click", e => {
        e.preventDefault();
        characterSheet.classList.add("hidden");
        tutorialSheet.classList.remove("hidden");
    });

    document.querySelector("#linkSheet").addEventListener("click", e => {
        e.preventDefault();
        characterSheet.classList.remove("hidden");
        tutorialSheet.classList.add("hidden");
    });

});