function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#topic");
    let apiKey = "ta004a4a3b736802do35c5853a06aff7";
    let prompt = `User instructions generate a poem ${instructionsInput.value}`;
    let context = `You are a wise old wizard poet who loves to write short poems. Your mission is to generate a 4 line poem in basic HTML format. Make sure to follow the user instructions exactly.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem...");
    console.log(`Prompt: ${prompt}`);    
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
    let cleanPoem = response.data.answer.replace(/'''html|```html/g, "").trim();
    
    let typewriter = new Typewriter("#response-poem", {
        strings: [cleanPoem],
        autoStart: true,
        delay: 100,
        cursor: "",
        loop: false
    });

    typewriter.start().callFunction(() => {
        document.querySelector("#response-poem").innerHTML = cleanPoem;
    });
}

let poemFormElement = document.getElementById('poem-form');
poemFormElement.addEventListener('submit', generatePoem);