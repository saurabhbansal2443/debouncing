let inputBar = document.getElementById("in");
let count = 0;

let debouceFunction = function (cb, delay) {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      cb.apply(context, [...args]);
    }, delay);
  };
};
inputBar.addEventListener("keydown",
  debouceFunction(function () {
    console.log(" KEy down ", ++count);
  }, 300)
);
