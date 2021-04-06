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

  document.querySelector(".comment-left").style.height = document.querySelector(
    ".comment-right"
  ).style.height;
  um++;
});
