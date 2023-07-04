
async function fetchData(){
    let movie = document.getElementById("search-input").value;
    console.log(movie)
    let response = await fetch(`https://www.omdbapi.com/?apikey=908fcfdc&s=${movie}`);
    const datas = await response.json();
    console.log(datas.Search)
    var c = document.getElementById("movie1");
    for (let i = 0; i < datas.length; i++) {
        const div = document.createElement("div");
        const obj = datas[i];
        c.innerHTML = datas.Search[0].Title;
        

        container.appendChild(div);
    
    
    // c.innerHTML = datas.Search[0].Year;
    };
    
};