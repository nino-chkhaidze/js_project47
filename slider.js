let data = [
  {
    id: 1,
    title: "",
    imageUrl:
      "https://cdn.futura-sciences.com/sources/images/dossier/1308/03-1308.jpg",
  },

  {
    id: 2,
    title: "",
    imageUrl:
      "https://www.teahub.io/photos/full/346-3464522_2499x1195-the-giza-pyramid-complex-hd-giza-necropolis.jpg",
  },
  {
    id: 3,
    title: "",
    imageUrl:
      "http://4.bp.blogspot.com/-hFF2bgoP8gI/UPpZhYEjBtI/AAAAAAAACHw/_QDS_oIg4Dc/s1600/Forbidden+City+Beijing+Shenwumen+Gate.JPG",
  },
  {
    id: 4,
    title: "",
    imageUrl: "https://wallpaperaccess.com/full/1565546.jpg",
  },
];

let sliderContainer = document.getElementById("slider");
let arrowLeftBtn = document.getElementById("arrow-left");
let arrowRightBtn = document.getElementById("arrow-right");

let sliderIndex = 0;

function createImg(item) {
  sliderContainer.style.backgroundImage = `url(${item.imageUrl})`;
  sliderContainer.style.backgroundRepeat = "no-repeat";
  sliderContainer.style.backgroundSize = "cover";
}

function createH2tag(item) {
  let h2tag = document.createElement("h2");
  h2tag.innerText = item.title;
  h2tag.classList.add("slider-title");
  return h2tag;
}

function setSlider() {
  sliderContainer.innerText = "";
  createImg(data[sliderIndex]);
  let title = createH2tag(data[sliderIndex]);
  let dots = createDots();

  sliderContainer.appendChild(title);
  sliderContainer.appendChild(dots);
  let dotElements = dots.querySelectorAll(".dot");

  dotElements[sliderIndex].classList.add("active");
}

function arrowLeft() {
  if (sliderIndex === 0) {
    sliderIndex = data.length - 1;
  } else {
    sliderIndex--;
  }
  setSlider();
}

function arrowRight() {
  if (sliderIndex === data.length - 1) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  setSlider();
}

arrowLeftBtn.addEventListener("click", arrowLeft);
arrowRightBtn.addEventListener("click", arrowRight);

setInterval(() => {
  arrowRight();
}, 3000);

function createDots() {
  let dots = document.createElement("div");
  dots.classList.add("dots");
  data.forEach((elemetn) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", elemetn.id - 1);

    dot.onclick = function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlider();
    };
    dots.appendChild(dot);
  });
  return dots;
}
setSlider();
