document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector(".comment-1").classList.remove("hidden");
  document.querySelector(".user-comment").textContent = document.querySelector(
    "#comment"
  ).value;
  document.querySelector(".user-name").textContent = document.querySelector(
    "#name"
  ).value;

  document.querySelector(".comment-left").style.height = document.querySelector(
    ".comment-right"
  ).style.height;
});
