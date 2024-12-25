const id = document.getElementById("circles");
console.log(id.innerHTML)/*ispise child element od id circlesa*/

const classs = document.getElementsByClassName("circle");
console.log(classs[2])/*ispise treci element klase circle*/

const tagara = document.getElementsByTagName("h1");
console.log(tagara[0].innerText)/*ispre prvi element sa tagom h1 i njegov text*/

const kveri = document.querySelector(".circle");
console.log(kveri)/*ispise prvi element koji nadje u klasi circle*/

const kveriAll = document.querySelectorAll(".circle");
console.log(kveriAll)/*ispise sve elemente koje nadje u klasi circle*/

let createdEl = document.createElement("div");
console.log(createdEl)

const innerhatemel = createdEl.innerHTML = "testeateatawaw";
console.log(innerhatemel, "test")
id.insertBefore(createdEl,kveri);
console.log(id.innerHTML)

const btn = document.querySelector("button");
function random255(){
  return Math.floor(Math.random() * 255)
}
btn.addEventListener("click", () => {
  const rndmclr = `rgb(${random255()}, ${random255()}, ${random255()})`;
  document.body.style.backgroundColor = rndmclr;
});
