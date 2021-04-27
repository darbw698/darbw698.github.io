var infoContainer = document.getElementById("about");
console.log(infoContainer);

var backButton = document.getElementById("home");
console.log(backButton);

var newEntry = document.getElementById("add-button");
console.log(newEntry);

<<<<<<< Updated upstream
about.addEventListener("click", () => {
      document.getElementById("container").style.display = "block";
      document.getElementById("container").scrollTop = 0;
=======
// about.addEventListener("click", () => {
//       document.getElementById("container").style.display = "block";
//       document.getElementById("container").scrollTop = 0;

// });

// home.addEventListener("click", () => {
//     document.getElementById("container").style.display = "none";
//     document.getElementById("container").scrollTop = 0;
// });
>>>>>>> Stashed changes

});

home.addEventListener("click", () => {
    document.getElementById("container").style.display = "none";
    document.getElementById("container").scrollTop = 0;
});

newEntry.addEventListener("click", () => {

});