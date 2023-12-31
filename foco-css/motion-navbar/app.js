let links = document.querySelectorAll("li");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove o active classs from all li tags
    links.forEach((item) => item.classList.remove("active"));

    // Add active class
    link.classList.add("active");

    indicator.style.transform = `
        translateX(calc(
            ${index * 90}px
        ))
      `;
  });
});
