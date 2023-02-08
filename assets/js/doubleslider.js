  // top slider function
  function moveTopSlider(direction) {
    // select current active image
    let currentActive = document.querySelector('.top-slider-image.active');
    let currentSelect = document.querySelector('#top-slider-select option:checked');

    // check if direction is next or prev
    if (direction === 'next') {
      // move to next image
      let nextActive = currentActive.nextElementSibling;
      let nextSelect = currentSelect.nextElementSibling;

      // check if next image exists
      if (nextActive) {
        // remove active class from current image
        currentActive.classList.remove('active');
        currentSelect.selected = false;

        // add active class to next image
        nextActive.classList.add('active');
        nextSelect.selected = true;

        // update price display
        let price = nextSelect.dataset.price;
        document.querySelector('.price-display').innerHTML = price;
      }
    } else {
      // move to prev image
      let prevActive = currentActive.previousElementSibling;
      let prevSelect = currentSelect.previousElementSibling;

      // check if prev image exists
      if (prevActive) {
        // remove active class from current image
        currentActive.classList.remove('active');
        currentSelect.selected = false;

        // add active class to prev image
        prevActive.classList.add('active');
        prevSelect.selected = true;

        // update price display
        let price = prevSelect.dataset.price;
        document.querySelector('.price-display').innerHTML = price;
      }
    }

    // update total price
    updateTotalPrice();
  }

  // bottom slider function
  function moveBottomSlider(direction) {
    // select current active image
    let currentActive = document.querySelector('.bottom-slider-image.active');
    let currentSelect = document.querySelector('#bottom-slider-select option:checked');

    // check if direction is next or prev
    if (direction === 'next') {
      // move to next image
      let nextActive = currentActive.nextElementSibling;
      let nextSelect = currentSelect.nextElementSibling;

      // check if next image exists
      if (nextActive) {
        // remove active class from current image
        currentActive.classList.remove('active');
        currentSelect.selected = false;

        // add active class to next image
        nextActive.classList.add('active');
        nextSelect.selected = true;

        // update price display
        let price = nextSelect.dataset.price;
        document.querySelector('.bottom-price-display').innerHTML = price;

      }
    } else {
      // move to prev image
      let prevActive = currentActive.previousElementSibling;
      let prevSelect = currentSelect.previousElementSibling;

      // check if prev image exists
      if (prevActive) {
        // remove active class from current image
        currentActive.classList.remove('active');
        currentSelect.selected = false;

        // add active class to prev image
        prevActive.classList.add('active');
    prevSelect.selected = true;

    // update price display
    let price = prevSelect.dataset.price;
    document.querySelector('.bottom-price-display').innerHTML = price;

  }
}

// update total price
updateTotalPrice();
}

// function to update total price
function updateTotalPrice() {
// select current prices of top and bottom sliders
let topPrice = document.querySelector('#top-slider-select option:checked').dataset.price;
let bottomPrice = document.querySelector('#bottom-slider-select option:checked').dataset.price;

// convert prices to numbers
topPrice = parseInt(topPrice.replace('$', ''));
bottomPrice = parseInt(bottomPrice.replace('$', ''));

// calculate total price
let totalPrice = topPrice + bottomPrice;

// update total price display
document.querySelector('.total-price-displays').innerHTML = 'Total Price: $' + totalPrice;
}

// add event listeners to prev and next buttons
document.querySelector('.top-slider-prev').addEventListener('click', () => {
moveTopSlider('prev');
});
document.querySelector('.top-slider-next').addEventListener('click', () => {
moveTopSlider('next');
});
document.querySelector('.bottom-slider-prev').addEventListener('click', () => {
moveBottomSlider('prev');
});
document.querySelector('.bottom-slider-next').addEventListener('click', () => {
moveBottomSlider('next');
});

// add event listener to select dropdown
document.querySelector('#top-slider-select').addEventListener('change', (e) => {
let selectedOption = e.target.options[e.target.selectedIndex];
let selectedPrice = selectedOption.dataset.price;
document.querySelector('.price-display').innerHTML = selectedPrice;

// remove active class from current image
let currentActive = document.querySelector('.top-slider-image.active');
currentActive.classList.remove('active');

// add active class to selected image
let selectedImage = document.querySelector(`.top-slider-image[data-id="${selectedOption.value}"]`);
selectedImage.classList.add('active');

// update total price
updateTotalPrice();
});

document.querySelector('#bottom-slider-select').addEventListener('change', (e) => {
let selectedOption = e.target.options[e.target.selectedIndex];
let selectedPrice = selectedOption.dataset.price;
document.querySelector('.bottom-price-display').innerHTML = selectedPrice;

// remove active class from current image
let currentActive = document.querySelector('.bottom-slider-image.active');
currentActive.classList.remove('active');

// add active class to selected image
let selectedImage = document.querySelector(`.bottom-slider-image[data-id="${selectedOption.value}"]`);
selectedImage.classList.add('active');

// update total price
updateTotalPrice();
});

// initial call to update total price
updateTotalPrice();
