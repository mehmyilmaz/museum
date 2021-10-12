// SLIDER

var slider = tns({
    container: '.slider-welcome__slides',
    items: 1,
    slideBy: 'page',
    mouseDrag: true,
    speed: 500,
    controlsContainer: '.slider-welcome__arrows',
    prevButton: '.slider-welcome__arrow-left',
    nextButton: '.slider-welcome__arrow-right',
    navContainer: '.slider-welcome__pagination',
    navItems: '.slider-pagination'
});

const swiper = document.getElementById('slider-welcome');

function currentSlide() { 
    var info = slider.getInfo(),
    indexCurrent = info.displayIndex;
    console.log(indexCurrent);
    document.getElementById('current').innerText = `0${indexCurrent}`;
}

swiper.addEventListener('click', currentSlide);

// GALLERY

const pictureInnerContainer = document.querySelector('.gallery__img-inner-container');
const pictureArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(pictureArr);

pictureArr.map(el => {
    let img = `<img  class="gallery__img" src="assets/img/galery/galery${el}.jpg" alt="galery${el}">`;
    pictureInnerContainer.innerHTML += img;
});

//Animation



//VIDEO

const player = document.getElementById('video-element');
const btnPlayPauseBig = document.getElementById('big-btnPlayPause');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnMute = document.getElementById('btnMute');
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');

volumeBar.addEventListener("change", function(event) {
    player.volume = event.target.value;
    let percentage = player.volume * 100;
    volumeBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percentage}%, #C4C4C4 ${percentage}%, #C4C4C4 100%)`
    if (percentage === 0 ) {
        btnMute.classList.remove("volume-on");
        btnMute.classList.add("volume-mute");
    }
    else {
        btnMute.classList.remove("volume-mute");
        btnMute.classList.add("volume-on");
    }
});

document.getElementById('btnFullScreen').disabled = true;
player.addEventListener('timeupdate', updateProgressBar, false);
player.addEventListener('ended', function() { this.pause(); }, false);	
progressBar.addEventListener("click", seek);

function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    player.currentTime = percent * player.duration;
    e.target.value = Math.floor(percent / 100);
    e.target.innerHTML = progressBar.value + '% played';
}

function playPauseVideo() {
    if (player.paused || player.ended) {
        btnPlayPause.classList.add("pause-mode");
        btnPlayPauseBig.classList.add("hidden");
        player.play(); 
    }
    else {
        btnPlayPause.classList.remove("pause-mode");
        btnPlayPauseBig.classList.remove("hidden");
        btnPlayPause.classList.add("play-mode");
        player.pause(); 
    }
}

function stopVideo() {
    player.pause();
    if (player.currentTime) player.currentTime = 0;
}

function muteVolume() {
    if (player.muted) {
        btnMute.classList.remove("volume-mute");
        btnMute.classList.add("volume-on");
        volumeBar.value = "1";
        volumeBar.style.background = "#710707";
        player.muted = false;
    }
    else {
        btnMute.classList.remove("volume-on");
        btnMute.classList.add("volume-mute");
        volumeBar.value = "0";
        volumeBar.style.background = "#C4C4C4"
        player.muted = true;
    }
}

function replayVideo() {
    resetPlayer();
    player.play();
}

function updateProgressBar() {
    var percentage = Math.floor((100 / player.duration) * player.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percentage}%, #C4C4C4 ${percentage}%, #C4C4C4 100%)`
}

function resetPlayer() {
    progressBar.value = 0;
    player.currentTime = 0;
    changeButtonType(btnPlayPause, 'play');
}  
// SLIDER




// BURGER

const menu = document.getElementById('header-menu');
const burger = document.getElementById('burger_btn');
const burger_label = document.querySelector('.burger');
const welcome_title = document.querySelector('.welcome-title-container');

burger_label.addEventListener("click", openMenu);
document.addEventListener("click", closeMenu);

function openMenu() {
    menu.classList.toggle('animate');
    welcome_title.classList.toggle('hidden');
    burger_label.classList.toggle('active');
}

function closeMenu({ target }) {
    const closest = target.closest('.burger');
    if (menu.classList.contains('animate') && !closest) {
        menu.classList.remove('animate');
        welcome_title.classList.remove('hidden');
    }
}


//MABBOX

//not it