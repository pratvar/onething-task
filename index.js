let isOpen = false;
function nav() {
    const button = document.querySelector('#navBtn');
    const links = document.querySelector('#navlinks');
    if(!isOpen) {
        button.innerHTML = "close";
        links.style.visibility = "visible";
        links.style.height = "350px";
        isOpen = true;
    } else {
        button.innerHTML = "menu";
        links.style.height = "0";
        links.style.visibility = "hidden";
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

slideshow();

function slideshow() {
    const slides = document.getElementsByClassName('slide');
    for(let i = 0; i < slides.length; i++) {
        let s = slides[i].classList;
        if(s.contains('one')) {
            s.remove('one'); s.add('three');
        }
        else if(s.contains('two')) {
            s.remove('two'); s.add('one');
        }
        else if(s.contains('three')){
            s.remove('three'); s.add('two');
        }
    }
    setTimeout(slideshow, 2500);
}