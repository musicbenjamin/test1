document.querySelectorAll(".circle").forEach(circle => {
  circle.addEventListener("click", function () {

    const color = window.getComputedStyle(this).backgroundColor;

    document.body.style.backgroundColor = color;

  });
});