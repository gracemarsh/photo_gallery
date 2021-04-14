// ​baguetteBox.run('.gallery');

/**
 * This function is used to filter images from the gallery by matching the search input and any words from the image captions.
 * var input = what someone types into the search bar
 * var search = needs to match words from the images caption attribute
 * Create loop that goes through all list items, and hides those who don't match the search query
 */

let input = document.getElementById("searchBar");

function searchFunction() {
  for (i = 0; i <= 11; i++) {
    let img = document.querySelectorAll("a")[i];

    let searchTerm = input.value.toLowerCase();

    let dataCaption = img.getAttribute("data-caption");
    const imageCaption = dataCaption.toLowerCase();

    if (imageCaption.includes(searchTerm)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  }
}

input.addEventListener("keyup", searchFunction);
