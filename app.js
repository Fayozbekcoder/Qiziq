const sur = document.querySelector(".sur");
const pul = document.querySelector(".som");
const orta = document.querySelector(".vv");
const sum = document.querySelector(".sum");

const oy = {
  basic: 19.99,
  professional: 24.99,
  master: 39.99,
};

const yil = {
  basic: 39.99,
  professional: 49.99,
  master: 59.99,
};

let count = 0;
sur.addEventListener("click", () => {
  document.querySelector(".oy").classList.toggle("tranzishn");
  document.querySelector("body").classList.toggle("bcg");
  document.querySelector(".title").classList.toggle("oq");
  document.querySelector(".yil").classList.toggle("oq");
  if (count == 0) {
    yangila(yil);
    count = 1;
  } else {
    yangila(oy);
    count = 0;
  }
});
function yangila(param) {
  document.querySelector(".som").textContent = `${param.basic}`;
  document.querySelector(".vv").textContent = `${param.professional}`;
  document.querySelector(".sum").textContent = `${param.master}`;
}

// sur.addEventListener("click", function () {
//   document.querySelector(".oy").classList.toggle("tranzishn");
//   pul.textContent = "$30.99";
//   orta.textContent = "$40.99";
//   sum.textContent = "$60.99";
// });
// yolgon.addEventListener("click", function () {
//   yangila();
// });
