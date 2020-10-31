let forms = document.querySelector("#forms");

forms.addEventListener("submit", (s)=> {

    let search = document.querySelector("#search").value;
    console.log(search);
    let result = document.querySelector("#random-photos");

    let firstUrl = "https://api.unsplash.com/search/photos?&query=";
    let secUrl = "&client_id=dmKyr8pE9N2ZsJm_htuP9iifZlGo1A8uKjmNGvlXius&per_page=40";
    let allUrl = firstUrl+search+secUrl;
    console.log(allUrl);

    s.preventDefault();
    fetch(allUrl)
    .then((res)=>{
        return res.json();
    })
    .then((data) =>{
        console.log(data)
        data.results.forEach(photo => {
           let image = `
           <img src="${photo.urls.regular}"/>
            `;
            $("#random-photos").append(image);
        });
    })

});

// https://api.unsplash.com/search/?&query=