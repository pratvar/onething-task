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

const styles = document.getElementsByClassName('style');
const preview = document.getElementsByClassName('preview')[0];

let autoPreviewTimer;

autoPreview();
function autoPreview() {
    if(styles[0].classList.contains('active')) {
        styles[0].classList.remove('active');
        preview.style.backgroundImage = "url('images/style2.svg')";
        styles[1].classList.add('active');
    } else if(styles[1].classList.contains('active')) {
        styles[1].classList.remove('active');
        preview.style.backgroundImage = "url('images/style3.svg')";
        styles[2].classList.add('active');
    } else if(styles[2].classList.contains('active')) {
        styles[2].classList.remove('active');
        preview.style.backgroundImage = "url('images/style4.svg')";
        styles[3].classList.add('active');
    } else if(styles[3].classList.contains('active')) {
        styles[3].classList.remove('active');
        preview.style.backgroundImage = "url('images/style1.svg')";
        styles[0].classList.add('active');
    }
    autoPreviewTimer = setTimeout(autoPreview, 2500);
}

for(let i = 0; i < styles.length; i++) {
    let style = styles[i];
    style.addEventListener('click', function() {
        clearTimeout(autoPreviewTimer);
        for(let j = 0; j < styles.length; j++) {
            styles[j].classList.remove('active');
        }
        style.classList.add('active');
        if(style.classList.contains('style1')) {
            preview.style.backgroundImage = "url('images/style1.svg')";
        } else if(style.classList.contains('style2')) {
            preview.style.backgroundImage = "url('images/style2.svg')";
        } else if(style.classList.contains('style3')) {
            preview.style.backgroundImage = "url('images/style3.svg')";
        } else if(style.classList.contains('style4')) {
            preview.style.backgroundImage = "url('images/style4.svg')";
        }
    })
}