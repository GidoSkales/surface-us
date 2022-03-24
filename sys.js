(function () {
  document.getElementById("clear").addEventListener("click", function () {
    document.querySelector(".render").innerHTML = "";
  });

  document.getElementById("forms").addEventListener("submit", (s) => {
    s.preventDefault();
    fetch(
      `https://api.unsplash.com/search/photos?&query=${s.target.elements.search.value}&client_id=dmKyr8pE9N2ZsJm_htuP9iifZlGo1A8uKjmNGvlXius&per_page=40`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.results.length) {
          throw new Error(`Data Not Found`);
        }
        data.results.forEach((img) => {
          $(".render").append(`<img src='${img.urls.regular}'>`);
        });
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      });

    s.target.elements.search.value = "";
    s.target.elements.search.addEventListener("input", () => {
      document.querySelector(".render").innerHTML = "";
    });
  });
})();
