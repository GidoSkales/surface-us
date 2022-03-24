(function () {
  document.querySelector("#forms").addEventListener("submit", (s) => {
    s.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?&query=${
        document.querySelector("#search").value
      }&client_id=dmKyr8pE9N2ZsJm_htuP9iifZlGo1A8uKjmNGvlXius&per_page=40`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((img) => {
          $("#random-photos").append(`<img src='${img.urls.regular}'>`);
        });
      });
  });
})();
