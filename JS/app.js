​baguetteBox.run('.gallery');

/** This function is used to filter images from the gallery by matching the search input and any words from the image captions.
 * var input = what someone types into the search bar
 * var search = needs to match words from the images caption attribute
 * Create loop that goes through all list items, and hides those who don't match the search query
 */

const input = document.getElementById('search');
const searchTerm = input.value.toLowerCase();
// console.log(searchTerm);

const caption = document.querySelectorAll('[data-caption]');
//Why doesn't data caption just give me the string? I also don't know why I need square brackets
const imageCaption = caption.textContent.toLowerCase();
// console.log(imageCaption);


function searchFunction(){
  for (i = 1; i >= 12; i++) {
    if(imageCaption.includes(searchTerm)){
      image.display = "block";
    } else {
      image.display = "none";
    }
  }
}

input.addEventListener('keyup', searchFunction);