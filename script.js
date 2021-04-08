const music = document.querySelector(".music");
const home = document.querySelector(".home");
const election = document.querySelector(".election");
const movie = document.querySelector(".movie");
const crime = document.querySelector(".crime");

const type = ["sports", "crime", "election", "movie"];
const color = ["#7cffcb", "red", "pink", "blue"];
image = [
  "url(sports.jfif)",
  "url(crime.jpg)",
  "url(election.jfif)",
  "movie.jpg",
];

musicImage = [
  "url(music.jfif)",
  "url(music2.jfif)",
  "url(music3.jfif)",
  "url(music4.jfif)",
];

politicsImage = [
  "url(election.jfif)",
  "url(politics1.jpg)",
  "url(politics2.jpg)",
  "url(politics3.png)",
];

moviesImage = [
  "url(movie.jpg)",
  "url(movies2.jfif)",
  "url(movies3.jfif)",
  "url(movies4.jfif)",
];

crimeImage = [
  "url(crime.jpg)",
  "url(crime1.jfif)",
  "url(crime2.jfif)",
  "url(crime3.jfif)",
];

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
