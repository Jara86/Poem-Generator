function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#topic");
    let apiKey = "ta004a4a3b736802do35c5853a06aff7";
    let prompt = `User instructions generate a poem ${instructionsInput.value}`;
    let context = `You are a wise old wizard poet who loves to write short poems. Your mission is to generate a 4 line poem in basic HTML format. Make sure to follow the user instructions exactly.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemContainer = document.querySelector("#response-poem");
    poemContainer.innerHTML = "Generating your magical poem...";
    poemContainer.classList.add("show");

    axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
    let cleanPoem = response.data.answer.replace(/'''html|```html/g, "").trim();
    let poemContainer = document.querySelector("#response-poem");

    let typewriter = new Typewriter(poemContainer, {
        strings: [cleanPoem],
        autoStart: "false",
        delay: 100,
        cursor: "",
        loop: false,
    });

    // Nach Abschluss der Animation sicherstellen, dass der Text bleibt
    typewriter.typeString(cleanPoem)
        .start()
        .callFunction(() => {
            typewriter.stop(); // Stoppe die Animation
        });
}

let poemFormElement = document.getElementById('poem-form');
poemFormElement.addEventListener('submit', generatePoem);