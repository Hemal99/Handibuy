//https://handybuy.lk/
///?s=cardpack&post_type=product

const searchBtn = document.getElementsByClassName("searchButton")[0];
const searchInput = document.getElementById("searchInput");
const searchInput1 = document.getElementById("searchInput1");
const searchBtn1 = document.getElementById('searchButton1')
const webLink = "https://handybuy.lk/";



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

searchBtn1.addEventListener("click", () => {
  try {
    if (searchInput1.value) {
      window.location.href = `${webLink}?s=${searchInput1.value}&post_type=product`;
    } else {
      window.location.href = `${webLink}`;
    }
  } catch (error) {
    console.log(error);
  }
});


//side navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
 

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
 
 
};


//cart nav
function openCart() {
  document.getElementById("myCart").style.width = "280px";
  
 // document.getElementsByClassName('body')[0].classList.toggle('half-black')

}

function closeCart() {
  document.getElementById("myCart").style.width = "0";
  document.getElementById('body').style.opacity=1
 
};
