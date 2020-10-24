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

const acc = document.getElementsByClassName('accordion');
for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {

        let icon = acc[i].childNodes[1];
        if(icon.innerHTML == 'expand_less') icon.innerHTML = 'expand_more';
        else icon.innerHTML = 'expand_less';

        let panel = this.nextElementSibling;
        
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginTop = '0';
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.marginTop = '16px';
        }
    });
}