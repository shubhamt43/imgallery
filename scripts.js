const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const p = document.querySelector("p");
const accessKey = "CORFCNpCkUmujGfa404HWRtohZjI8KB49e0kT7aZVgk";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((results) =>{
        const image = document.createElement('img');
        image.src = results.urls.small;
        const imgLink = document.createElement("a");
        // imgLink.href = results.links.html;
        // imgLink.target = "_blank";

        // imgLink.appendChild(image);  
        searchResult.appendChild(image);
    });
    showMoreBtn.style.display="block";
    p.style.display= "block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});


showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();

});
