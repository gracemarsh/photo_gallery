​baguetteBox.run('.gallery');

// ​const search = new Filter('search', 'data-caption');

function searchFunction()
  // Declare variables

let input = document.getElementById('search');

console.log(input)

let search = input.toLowerCase();

getAttribute()

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < photo.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      image.display = "yes";
    } else {
      image.display = "none";
    }
  }
}
