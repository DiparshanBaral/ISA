function handleClick() {
    const searchInput = document.getElementById("search-input");
    const movie = searchInput.value;
    fetchData(movie);
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        const searchInput = document.getElementById("search-input");
        const movie = searchInput.value;
        fetchData(movie);
        event.preventDefault();
    }
}
async function fetchData(){
    let movie = document.getElementById("search-input").value;
    console.log(movie)
    let response = await fetch(`https://www.omdbapi.com/?apikey=908fcfdc&s=${movie}`);
    const datas = await response.json();
    console.log(datas.Search)
    var container = document.getElementById("container");
    let movieRow = null;
    for (let i = 0; i < datas.Search.length; i++) {
        const div = document.createElement("div");
        const obj = datas.Search[i];
        const movieWrapper = document.createElement("div");
        movieWrapper.classList.add("movie-wrapper");
        movieWrapper.appendChild(div);
        const titleElement = document.createElement("h2");
        titleElement.innerHTML = obj.Title;
        div.appendChild(titleElement);
        const posterElement = document.createElement("img");
        posterElement.src = obj.Poster;
        div.appendChild(posterElement);
        const yearElement = document.createElement("p");
        yearElement.innerHTML = obj.Year;
        div.appendChild(yearElement);
        if (i % 3 === 0) {
            movieRow = document.createElement("div");
            movieRow.classList.add("movie-row");
            container.appendChild(movieRow);
        };
        movieRow.appendChild(movieWrapper);
        container.appendChild(div);
    };
    
};