function makeAnimeCard(name, img, score, synopsis ) {
    let cardEl = document.createElement("article");
    cardEl.className = "anime__card";

    let imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.className = "anime__img"; 
    imgEl.alt = "anime photo";
    cardEl.appendChild(imgEl);

    let containerEl = document.createElement("div");
    containerEl.className = "anime__info";

    let titleEl = document.createElement("h2");
    titleEl.className = "anime__title";
    titleEl.innerText = name;
    containerEl.appendChild(titleEl);

    let synEl = document.createElement("p");
    synEl.className = "anime__synopsis";
    synEl.innerText = synopsis;
    containerEl.appendChild(synEl);

    let scoreEl = document.createElement("div");
    scoreEl.className = "anime__score";
    scoreEl.innerText = score;
    containerEl.appendChild(scoreEl);

    cardEl.appendChild(containerEl);

    
    let body = document.querySelector("body");
    body.appendChild(cardEl);
}

let url = "https://api.jikan.moe/v4/top/anime?type=tv";

async function fetchAmine(){
   let response = await fetch(url);
   let json = await response.json();
   
   for(let i = 0; i < 10; i++){
       let animeData = json.data[i];
       makeAnimeCard( animeData.title, animeData.images.webp.large_image_url,animeData.score,animeData.synopsis);
   }
}

fetchAmine();








