link = document.getElementById("fake-link");
link.addEventListener("click", function (e) {
  alert(
    "Whoops, you must have hit the wrong button! Click the envelope to offer me a job."
  );
  e.target.style.visibility = "hidden";
});
