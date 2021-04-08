const music = document.querySelector(".music");
const home = document.querySelector(".home");
const election = document.querySelector(".election");
const movie = document.querySelector(".movie");
const crime = document.querySelector(".crime");

const type = ["sports", "crime", "election", "movie"];
const color = ["#7cffcb", "red", "pink", "blue"];
image = [
  "url(./assets/sports.jfif)",
  "url(./assets/crime.jpg)",
  "url(./assets/election.jfif)",
  "url(./assets/movie.jpg)",
];

musicImage = [
  "url(./assets/music.jfif)",
  "url(./assets/music2.jfif)",
  "url(./assets/music3.jfif)",
  "url(./assets/music4.jfif)",
];

politicsImage = [
  "url(./assets/election.jfif)",
  "url(./assets/politics1.jpg)",
  "url(./assets/politics2.jpg)",
  "url(./assets/politics3.png)",
];

moviesImage = [
  "url(./assets/movie.jpg)",
  "url(./assets/movies2.jfif)",
  "url(./assets/movies3.jfif)",
  "url(./assets/movies4.jfif)",
];

crimeImage = [
  "url(./assets/crime.jpg)",
  "url(./assets/crime1.jfif)",
  "url(./assets/crime2.jfif)",
  "url(./assets/crime3.jfif)",
];

featuredImages = [
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/music4.jfif)",
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/crime2.jfif)",
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/election.jfif)",
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/sports.jfif)",
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/movies3.jfif)",
  "linear-gradient(#ff005d70, #ff005d70),url(./assets/music2.jfif)",
];

for (i = 1; i <= 6; i++) {
  document.querySelector(`.card_${i}`).style.backgroundImage = `${
    featuredImages[i - 1]
  }`;
}

for (i = 1; i <= 4; i++) {
  document.querySelector(`.article-${i}-type`).textContent = `${type[i - 1]}`;
  document.querySelector(`.article-${i}-type`).style.backgroundColor = `${
    color[i - 1]
  }`;

  document.querySelector(`.article-${i}-heading`).textContent = `top ${
    10 * i
  } news of the year ${2022 - i} related to ${type[i - 1]}  `;

  document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
    image[i - 1]
  }`;
}

home.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = `${type[i - 1]}`;
    document.querySelector(`.article-${i}-type`).style.backgroundColor = `${
      color[i - 1]
    }`;

    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } news of the year ${2022 - i} related to ${type[i - 1]}  `;
    3;
    document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
      image[i - 1]
    }`;
  }
});

music.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "music";
    document.querySelector(`.article-${i}-type`).style.backgroundColor =
      "orange";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } english songs of the year ${2022 - i}`;

    document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
      musicImage[i - 1]
    }`;
  }
});

election.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "election";
    document.querySelector(`.article-${i}-type`).style.backgroundColor =
      "#fc5296";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } political leaders of the year ${2022 - i}`;
    document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
      politicsImage[i - 1]
    }`;
  }
});

crime.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "crime";
    document.querySelector(`.article-${i}-type`).style.backgroundColor = "red";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } crime free city of the year ${2022 - i}`;
    document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
      crimeImage[i - 1]
    }`;
  }
});

movie.addEventListener("click", function () {
  for (i = 1; i <= 4; i++) {
    document.querySelector(`.article-${i}-type`).textContent = "movie";
    document.querySelector(`.article-${i}-type`).style.backgroundColor = "blue";
    document.querySelector(`.article-${i}-heading`).textContent = `top ${
      10 * i
    } english movies of the year ${2022 - i}`;
    document.querySelector(`.article-${i}-left`).style.backgroundImage = `${
      moviesImage[i - 1]
    }`;
  }
});
