const links = document.querySelectorAll(".list");
const indicator = document.querySelector(".indicator");

links.forEach((item, index) => {
  item.addEventListener("click", () => {
    links.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
    indicator.style.transform = `
        translateX(calc(
            ${index * 70}px
        ))
      `;
  });
});
