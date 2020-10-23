let isOpen = false;
function nav() {
    if(!isOpen) {
        document.querySelector('#navBtn').innerHTML = "close";
        document.querySelector('#navlinks').style.visibility = "visible";
        document.querySelector('#navlinks').style.height = "350px";
        isOpen = true;
    } else {
        document.querySelector('#navBtn').innerHTML = "menu";
        document.querySelector('#navlinks').style.height = "0";
        document.querySelector('#navlinks').style.visibility = "hidden";
        isOpen = false;
    }
}