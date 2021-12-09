let slideData = [
  {
    img: "./images/thumbnail.jpg",
    title: "Project #1",
    description:
      "An example project will go here that demonstrates a use case of the Pluribus API.",
  },
  {
    img: "./images/thumbnail.jpg",
    title: "Project 2",
    description:
      "Example project #2 will go here that demonstrates a use case of the Pluribus API.",
  },
  {
    img: "./images/thumbnail.jpg",
    title: "Project 3",
    description:
      "Example project #3 will go here that demonstrates a use case of the Pluribus API.",
  },
];

document.querySelectorAll(".slide-button").forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelectorAll(".slide-button").forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    const index = parseInt(e.target.getAttribute("data-slide")) - 1;

    document.getElementById("project-img").src = slideData[index].img;
    document.getElementById("project-title").innerText = slideData[index].title;
    document.getElementById("project-description").innerText =
      slideData[index].description;
  });
});
