//https://handybuy.lk/
///?s=cardpack&post_type=product

const searchBtn = document.getElementsByClassName("searchButton")[0];
const searchInput = document.getElementById("searchInput");
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


//side navigation

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
 

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
 
 
};
