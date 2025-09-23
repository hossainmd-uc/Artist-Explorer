
async function getArtists () {

    const response = await fetch('artists')
    data = await response.json()

    const app = document.getElementById('app')

    const cardContainer = document.createElement("div")
    cardContainer.id = "main-content"
    
    data.map(item => {
        const card = document.createElement("div");
        card.id = "card";

        const textContent = document.createElement("div")
        textContent.id = "textContent"


        const name = document.createElement("h1");
        name.textContent = item.name;
        textContent.appendChild(name);

        const description = document.createElement("p");
        description.textContent = item.description;
        textContent.appendChild(description);

        const image = document.createElement("img");
        image.src = item.image;
        image.id = "image"

        card.appendChild(textContent)
        card.appendChild(image);

cardContainer.appendChild(card);

    })


    app.appendChild(cardContainer)

}

getArtists()

