var button = document.querySelector('#click');
var container = document.querySelector('#container')
var counter = document.querySelector('#counter')
var clear = document.querySelector('#clear')
var colorRed = document.querySelector('.redcolor')
var colorPink = document.querySelector('.pinkcolor')
var colorGreen = document.querySelector('.greencolor')
var colorBlue = document.querySelector('.bluecolor')


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
    var images = container.querySelectorAll('img');
        var count = images.length;
        console.log(count);
        counter.innerHTML = count;
        alert('whoa you did it!');

});


colorRed.addEventListener('click', function (event) {
    console.log(event.target.style.backgroundColor)
    var colorRed = document.querySelector('.redcolor').style.backgroundColor
    var images = container.querySelectorAll('img');
    console.log(colorRed);
    images.forEach(function (img) {
     img.style.backgroundColor = colorRed;
});

});

colorPink.addEventListener('click', function (event) {
    console.log(event.target.style.backgroundColor)
    var colorRed = document.querySelector('.pinkcolor').style.backgroundColor
    var images = container.querySelectorAll('img');
    console.log(colorPink);
    images.forEach(function (img) {
     img.style.backgroundColor = colorPink;
});

});

colorGreen.addEventListener('click', function (event) {
    console.log(event.target.style.backgroundColor)
    var colorRed = document.querySelector('.greencolor').style.backgroundColor
    var images = container.querySelectorAll('img');
    console.log(colorGreen);
    images.forEach(function (img) {
     img.style.backgroundColor = colorGreen;
});

});

colorBlue.addEventListener('click', function (event) {
    console.log(event.target.style.backgroundColor)
    var colorRed = document.querySelector('.bluecolor').style.backgroundColor
    var images = container.querySelectorAll('img');
    console.log(colorBlue);
    images.forEach(function (img) {
     img.style.backgroundColor = colorBlue;
});

});


// var images = container.querySelectorAll('img');
// console.log(color);
// images.forEach(function (img) {
//     img.style.backgroundColor = color;
// });