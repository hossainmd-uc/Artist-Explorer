async function getArtists() {
  const response = await fetch('/artists');
  const data = await response.json();

  const app = document.getElementById('app');

  const mainContainer = document.createElement("section");
  mainContainer.id = "main-content";

  const artistHeader = document.createElement("h2");
  artistHeader.textContent = "Popular Artists";
  artistHeader.id = "artist-header";

  mainContainer.appendChild(artistHeader);

  const artistGrid = document.createElement("div");
  artistGrid.className = "grid"; // Pico grid

  data.map(item => {
    const card = document.createElement("article");
    card.className = "artist-card";

    const image = document.createElement("img");
    image.src = item.image;
    image.id = "image";
    image.alt = item.name;

    const name = document.createElement("h3");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const readMore = document.createElement("a");
    readMore.textContent = "Read More";
    readMore.href = `/artists/${item.id}`;
    readMore.setAttribute("role", "button");

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(readMore);

    artistGrid.appendChild(card);
  });

  mainContainer.appendChild(artistGrid);
  app.appendChild(mainContainer);
}

const requestedID = window.location.href.split('/').pop();

if (requestedID) {
  window.location.href = '../404.html';
} else {
  getArtists();
}
