var state = true;
function playSong(){
    let audio = document.getElementById("audio-capitulo");
    state = !state

    if (state) {
        audio.play()
    }else{
        audio.pause()
    }
    changeIcon() 
}


function changeIcon(){
    var image = document.querySelector("#play-pause")
    if(state) {
        image.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill")
        
    }else{
        image.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill")
    }
}


let num = document.getElementById("capitulo").innerText.slice(9)
function nextSong(){
    if (num == 10) {return}

    let text = document.getElementById("capitulo")
    text.innerText = "Capítulo " + ++num
    changeChapter()
}


function prevSong(){
    if (num == 1) {return}

    let text = document.getElementById("capitulo")
    text.innerText = "Capítulo " + --num
    changeChapter()
}


function changeChapter(){
    let audio = document.getElementById("audio-capitulo")
    audio.src = "./books/dom-casmurro/" + num + ".mp3"
}

