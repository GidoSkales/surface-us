document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const searchBar = document.querySelector(".search");
const searchIcon = document.querySelector(".click");
const renderItems = document.querySelector(".render");

const initApp = () => {
  const display = () => {
    searchIcon.addEventListener("click", () => {
      searchBar.classList.toggle("search__active");
    });
    searchBar.addEventListener("keypress", () => {
      document.querySelector(".render").classList.add("render__active");
    });
  };
  display();
};

const formSubmission = () => {
  (function () {
    document.querySelector("#search").addEventListener("input", (s) => {
      s.preventDefault();

      fetch(
        `https://api.unsplash.com/search/photos?&query=${s.target.value}&client_id=dmKyr8pE9N2ZsJm_htuP9iifZlGo1A8uKjmNGvlXius&per_page=40`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          data.results.forEach((img) => {
            $(".render").append(`<img src='${img.urls.regular}'>`);
          });
        });
    });
  })();
};
formSubmission();

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", (clear) => {
  clear.preventDefault();
  document.querySelector(".render").innerHTML = "";
});
