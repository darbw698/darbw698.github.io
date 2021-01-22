window.addEventListener("load",function() {
    const grid = document.getElementsByClassName(".grid-container");

    var squares = document.querySelectorAll('.square');

    function changeColor(e) {
        var square = e.target;
        square.dataset.hovered = true;
    }

    squares.forEach(function(square) {
        square.addEventListener('mouseover', changeColor);

        
    });
    
    function removeAllElements(){
        squares.forEach(function(square) {
            removeElement(square)
        });
    }

    function removeElement(square) {
        square.dataset.hovered = false;
    }

    var erase = document.getElementById("erase");
    erase.addEventListener('click',removeAllElements);

   
    

    


})