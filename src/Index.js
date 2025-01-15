function generatePoem(event) {
    event.preventDefault();

    function displayPoem(response) {
        let typewriter = new Typewriter("#response-poem", {
            strings: ["A happy blossom Sees you, swift as arrow"],
            autoStart: true,
            delay: 100,
            cursor: "",
            loop: false
        });
    }

    let poemButton = document.querySelector("#poem-button");
    poemButton.addEventListener("click", generatePoem);
}

let poemFormElement = document.getElementById('poem-form');
poemFormElement.addEventListener('submit', generatePoem);