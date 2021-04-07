const music = document.querySelector(".music");
const home = document.querySelector(".home");
const election = document.querySelector(".election");
const movie = document.querySelector(".movie");
const crime = document.querySelector(".crime");

const type = ["sports", "crime", "election", "movie"];
const color = ["green", "red", "pink", "blue"];

for (i = 1; i <= 4; i++) {
  document.querySelector(`.article-${i}-type`).textContent = `${type[i - 1]}`;
  document.querySelector(`.article-${i}-type`).style.backgroundColor = `${
    color[i - 1]
  }`;

  document.querySelector(`.article-${i}-heading`).textContent = `top ${
    10 * i
  } news of the year ${2022 - i} related to ${type[i - 1]}  `;
}

music.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "music";
    document.querySelector(`.article-${i}-type`).style.backgroundColor =
      "orange";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } english songs of the year ${2022 - i}`;
  }
});

home.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = `${type[i - 1]}`;
    document.querySelector(`.article-${i}-type`).style.backgroundColor = `${
      color[i - 1]
    }`;

    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } news of the year ${2022 - i} related to ${type[i - 1]}  `;
  }
});

election.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "election";
    document.querySelector(`.article-${i}-type`).style.backgroundColor = "pink";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } political leaders of the year ${2022 - i}`;
  }
});

crime.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "crime";
    document.querySelector(`.article-${i}-type`).style.backgroundColor = "red";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } crime free city of the year ${2022 - i}`;
  }
});

movie.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "movie";
    document.querySelector(`.article-${i}-type`).style.backgroundColor = "blue";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } english movies of the year ${2022 - i}`;
  }
});
