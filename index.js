//https://handybuy.lk/
///?s=cardpack&post_type=product

const searchBtn = document.getElementsByClassName("searchButton")[0];
const searchInput = document.getElementById("searchInput");
const webLink = "https://handybuy.lk/";

const imageContainer = document.getElementsByClassName("imageContainer1");
const imageContainer2 = document.getElementsByClassName("imageContainer2");
const quickView = document.getElementsByClassName("quickView");
const image = document.getElementsByClassName("card-img-top");
const cartIcon = document.querySelector(".imageCartIcon");

let span = document.createElement("SPAN");
let icon = document.createElement("i");
let newSpan = document.createElement("SPAN");

//toggle quickView
console.log(quickView[0]);
//Slider card hover EventListener
for (let i = 0; i < imageContainer.length; i++) {
  imageContainer[i].addEventListener("mouseover", () => {
    // quickView[0].classList.add("visible");

    image[i].src = "./assets/carousel/rose-22-259x194.jpg";

    span.className = "imageCartIcon";

    icon.className = "fal fa-shopping-bag";

    span.appendChild(icon);
    imageContainer[i].appendChild(span);

    newSpan.className = "quickView";
    newSpan.setAttribute("data-toggle", "modal");
    newSpan.setAttribute("data-target", "#exampleModalCenter");
    newSpan.textContent = "Quick View";

    imageContainer[i].appendChild(newSpan);
  });

  imageContainer[i].addEventListener("mouseout", () => {
    // quickView[0].classList.remove("visible");
    span.className = "";
    icon.className = "";
    newSpan.className = "";
    newSpan.textContent = "";
    image[i].src = "./assets/carousel/DSC04674-copy-259x259.jpg";
  });
}

for (let i = 0; i < imageContainer2.length; i++) {
  imageContainer2[i].addEventListener("mouseover", () => {
    // quickView[0].classList.add("visible");

    image[i].src = "./assets/carousel/rose-22-259x194.jpg";

    span.className = "imageCartIcon";

    icon.className = "fal fa-shopping-bag";

    span.appendChild(icon);
    imageContainer2[i].appendChild(span);

    newSpan.className = "quickView";
    newSpan.setAttribute("data-toggle", "modal");
    newSpan.setAttribute("data-target", "#exampleModalCenter");
    newSpan.textContent = "Quick View";
    

    imageContainer2[i].appendChild(newSpan);
  });

  imageContainer2[i].addEventListener("mouseout", () => {
    // quickView[0].classList.remove("visible");
    span.className = "";
    icon.className = "";
    newSpan.className = "";
    newSpan.textContent = "";
    image[i].src = "./assets/carousel/DSC04674-copy-259x259.jpg";
  });
}

// for(let i=0;i<imageContainer.length;i++){

// }

//search EventListener
searchBtn.addEventListener("click", () => {
  try {
    if (searchInput.value) {
      window.location.href = `${webLink}?s=${searchInput.value}&post_type=product`;
    } else {
      window.location.href = `${webLink}`;
    }
  } catch (error) {
    console.log(error);
  }
});


