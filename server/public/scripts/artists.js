
async function getArtists () {

    const response = await fetch('artists')
    data = await response.json()

    const app = document.getElementById('app')

    const mainContainer = document.createElement("div")
    mainContainer.id = "main-content"

    const artistContainer = document.createElement("div")
    artistContainer.id = "artist-content"

    const artistHeader = document.createElement("p")
    artistHeader.textContent = "Popular Artists"
    artistHeader.id = "artist-header"

    mainContainer.appendChild(artistHeader)

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

        const infoDiv = document.createElement('div')
        const readMore = document.createElement('a')
        readMore.textContent = 'Read More'
        readMore.href = `/artists/${item.id}`
        infoDiv.appendChild(readMore)

        card.appendChild(textContent)
        card.appendChild(image);
        textContent.appendChild(infoDiv)

        artistContainer.appendChild(card);

    })

    mainContainer.appendChild(artistContainer)
    app.appendChild(mainContainer)

}

getArtists()

