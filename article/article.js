let um = 1;

document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector(`.comment-${um}`).classList.remove("hidden");

  document.querySelector(
    `.user-comment${um}`
  ).textContent = document.querySelector("#comment").value;
  document.querySelector(".user-name").textContent = document.querySelector(
    "#name"
  ).value;

  document.querySelector(`.user-comment${um}`).style.width = "80%";

  document.querySelector(`.user-comment${um}`).style.margin = "auto";
  document.querySelector(`.Comment-display`).style.height = `${150 * um}px`;

  document.querySelector(".comment-left").style.height = document.querySelector(
    ".comment-right"
  ).style.height;
  um++;
});

document.querySelector(".like").addEventListener("click", function () {
  if (Number(document.querySelector(".like").textContent == 106)) {
    document.querySelector(".like").textContent = "105";

    document.querySelector(".like").style.color = "red";
  } else {
    document.querySelector(".like").textContent = "106";
    document.querySelector(".like").style.color = "blue";
  }
});
