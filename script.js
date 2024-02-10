
const myVideo = document.getElementById('siteVideo');

function playVid() {
    myVideo.play();
}

function pauseVid() {
    myVideo.pause();
}


function hamburgerMenu() {
    let x = document.getElementById("visible");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

