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
  document.querySelector("#forms").addEventListener("submit", (event) => {
    event.preventDefault();
    const parseURL = `https://api.unsplash.com/search/photos?&query=${searchBar.value}&client_id=dmKyr8pE9N2ZsJm_htuP9iifZlGo1A8uKjmNGvlXius&per_page=40`;
    //
    fetch(parseURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.results.forEach((photo) => {
          console.log(photo.urls.regular);
          const image = `
           <img src="${photo.urls.regular}"/>`;
          $(".render").append(image);
        });
      });
  });
};
formSubmission();

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", (clear) => {
  clear.preventDefault();
  document.querySelector(".render").innerHTML = "";
});
