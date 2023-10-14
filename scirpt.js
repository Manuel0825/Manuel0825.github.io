// Get the elements by their classes
const playButtons = document.querySelectorAll('.MemeButton');
const memeImages = document.querySelectorAll('.meme-img');

// Add a click event listener to each button
playButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    // Play the animation by removing and adding the class
    memeImages[index].classList.remove('paused');
    memeImages[index].classList.add('play-animation');
  });
});