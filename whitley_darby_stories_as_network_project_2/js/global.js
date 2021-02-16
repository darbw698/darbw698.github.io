window.addEventListener("load",function() {
   
    const open = document.getElementsByClassName ('.open');
    const modal_container = document.getElementsByClassName ('.modal-container');
    const close = document.getElementsByClassName ('.close');

    open.addEventListener('click',() => {
        modal_container.classList.add('show');
    })

    close.addEventListener('click',() => {
        modal_container.classList.remove('show');
    })
    


})
