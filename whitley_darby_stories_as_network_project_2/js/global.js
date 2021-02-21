window.addEventListener("load", function () {

    const open = document.getElementsByClassName('.svg-inline--fa');
    const modalContainer = document.getElementsByClassName('.modalContainer');
    const close = document.getElementsByClassName('.close');

    open(0).addEventListener('click', () => {
        modalContainer.classList.add('show');
    })

    close(1).addEventListener('click', () => {
        modalContainer.classList.remove('show');
    })



})
