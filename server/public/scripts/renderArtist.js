async function renderArtist () {
  let data;

  try {
    const response = await fetch('/artists');
    data = await response.json();
  } catch (exception) {
    console.log(exception);
  }

  const app = document.getElementById('app');
  const mainContainer = document.createElement("div");
  mainContainer.id = "main-content";

  const requestedID = parseInt(window.location.href.split('/').pop());

  if (data) {
    const item = data.find(item => item.id === requestedID);

    const card = document.createElement("div");
    card.id = "detail-card";

    const textContent = document.createElement("div");
    textContent.id = "detail-text-content";

    const name = document.createElement("h1");
    name.textContent = item.name;
    textContent.appendChild(name);

    const description = document.createElement("p");
    description.textContent = item.description;
    textContent.appendChild(description);

    const image = document.createElement("img");
    image.src = item.image;
    image.id = "detail-image";

    card.appendChild(textContent);
    card.appendChild(image);

    mainContainer.appendChild(card);
    app.appendChild(mainContainer);
  }
}

renderArtist();
