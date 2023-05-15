// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Select the error modal and add the .hidden class
const errorModal = document.querySelector('#modal')
errorModal.classList.add('hidden')

// Select all the hearts and add a click event listener to each one
const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    // Invoke mimicServerCall to simulate a server request
    mimicServerCall()
      .then(() => {
        // Change the heart to a full heart and add the .activated-heart class
        heart.innerText = FULL_HEART
        heart.classList.add('activated-heart')
      })
      .catch((error) => {
        // Display the error modal and error message
        errorModal.classList.remove('hidden')
        errorModal.querySelector('#modal-message').innerText = error
        // Hide the error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 3000)
      })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
