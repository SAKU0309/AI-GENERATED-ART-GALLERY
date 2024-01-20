const accessKey = "tLlkVIzY4KE1LIO6iHpfbGDqa2jBdq2gYUEFjrY8qAc";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-box");
const searchresults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

 async function searchIamges(){
    inputData = inputE1.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page==1){
        searchresults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        imageWrapper.appendChild(image);
        searchresults.appendChild(imageWrapper);
    });

    page++
    if(page>1){
        showMore.style.display = "block";
    }
}

formE1.addEventListener("submit", (event) =>{
    event.preventDefault();
    page=1;
    searchIamges();
});

showMore.addEventListener("click", () =>{
    searchIamges();
});