const btnEl = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

btnEl.addEventListener("click", async function () {
  try {
    animeContainer.style.display = "none";
    btnEl.innerText = "Loading...";
    const url = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    btnEl.innerText = "Get Image";
    animeContainer.style.display = "block";
    animeImgEl.src = data.urls.small;
    animeNameEl.textContent = data.alt_description;
    animeNameEl.style.display = "block";
    animeImgEl.style.display = "inline-block";
  } catch (error) {
    animeNameEl.textContent = "Error, Please try again later..";
    btnEl.innerText = "Get Image";
    animeImgEl.style.display = "none";
    animeContainer.style.display = "block";
  }
});

/*

ORIGINALLY FOR ANIME IMAGE GENERATOR, BELOW CODE IS CORRECT BUT API NOT AVAILABLE ANYMORE,
I CHANGED RANDOM IMAGES WITH THE ABOVE CODE WHICH IS ACTIVE
------------------------------------------------------------------------------------------
const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
btnEl.disabled = true;
btnEl.innerText = "Loading...";
amineNameEl.innerText = "Updating...";
animeImgEl.src = "spinner.svg";
const response = await fetch("https://api.catboys.com/img");
const data = await response.json();
btnEl.disabled = false;
btnEl.innerText = "Get Anime";
animeContainerEl.style.display = "block";
animeImgEl.src = data.url;
amineNameEl.innerText = data.artist;
  } catch (error) {
console.log(error);
btnEl.disabled = false;
btnEl.innerText = "Get Anime";
amineNameEl.innerText = "An error happened, please try again";
  }
});

*/
