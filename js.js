

// Открывать модальное окно
document.querySelectorAll(".cont_btn").forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Предотвратить стандартное действие ссылки
    document.getElementById("modal").classList.add("open");
  });
});


// Закрывать модальное окно
document.getElementById("modal_close").addEventListener("click", function (e) {
  e.preventDefault(); // Предотвратить стандартное действие кнопки
  document.getElementById("modal").classList.remove("open");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("open");
  }
});

document.querySelector("#modal .modal_box").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.getElementById("modal").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("open");
});



