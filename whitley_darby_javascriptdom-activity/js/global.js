var button = document.querySelector('#click');
var container = document.querySelector('#container')
var counter = document.querySelector('#counter')
var clear = document.querySelector('#clear')
var color = document.querySelector('.color')


button.addEventListener('click', function (event) {
    var image = document.createElement('img');
    image.src = 'assets/breakdown.jpeg';
    image.style.left = (100 * Math.random()) + '%';
    image.style.top = (100 * Math.random()) + '%';
    container.appendChild(image);
    var images = container.querySelectorAll('img');
    var count = images.length;
    console.log(count);
    counter.innerHTML = count;
});

container.addEventListener('click', function (event) {
    console.log(event.target.tagName);
    if (event.target.tagName == 'IMG'); {
        event.target.remove();
        var images = container.querySelectorAll('img');
        var count = images.length;
        console.log(count);
        counter.innerHTML = count;
    }
});

clear.addEventListener('click', function (event) {
    container.innerHTML = clear;

});

color.addEventListener('click', function (event) {
    console.log(event.target);
    var color = document.querySelector('#square1').style.backgroundColor
    var images = container.querySelectorAll('img');
    console.log(color);
    images.forEach(function (img) {
        img.style.backgroundColor = color;
    });
});
