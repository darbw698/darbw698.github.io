window.addEventListener("load", function () {

// Find all popup icons
var popups = document.querySelectorAll('.icon');
// Loop through each popup using `forEach`
popups.forEach(function(popup) {
  // Add a `click` event listener to each individual popup
  popup.addEventListener('click', function() {
    // Use the `closest` function to get the parent container for this individual
    // set of popups. Remember that each popup will have different content in it, 
    // so you can't just hide and show all the modals. You need to get the modal
    // that corresponds to this popup.
    var thisPopupSet = this.closest('.flexbox-item');
    // Get the first modalContainer within this set
    var thisModalContainer = thisPopupSet.querySelectorAll('.modalContainer')[0];
    // Add the `show` class to the individual modalContainer
    thisModalContainer.classList.add('show');
  });
});
// Find all close buttons
var closeButtons = document.querySelectorAll('.close');
// Find all modal containers
var allModalContainers = document.querySelectorAll('.modalContainer');
// Loop through each close button
closeButtons.forEach(function(closeButton) {
  // Add a `click` event listener to this individual button
  closeButton.addEventListener('click', function() {
    // When a close button is clicked, loop through all modal containers
    allModalContainers.forEach(function(modalContainer) {
      // Remove the `show` class from each individual modal
      modalContainer.classList.remove('show');
    });
  });
});


})
