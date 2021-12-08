let slideData = [
  {
    img: "./images/jimmychou.jpg",
    quote: '"Software of the decade"',
    name: "- Jimmy Chou, professional poker player",
  },
  {
    img: "./images/jasonles.jpg",
    quote: '"Simply incredible"',
    name: "- Jason Les, professional poker player",
  },
  {
    img: "./images/chrisferguson.jpg",
    quote: '"It seriously helped my game"',
    name: "- Chris Ferguson, professional poker player",
  },
];

document.querySelectorAll(".slide-button").forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelectorAll(".slide-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    const index = parseInt(e.target.getAttribute("data-slide")) - 1;

    document.getElementById("testimonial-img").src = slideData[index].img;
    document.getElementById("testimonial-quote").innerText =
      slideData[index].quote;
    document.getElementById("testimonial-name").innerText =
      slideData[index].name;
  });
});
