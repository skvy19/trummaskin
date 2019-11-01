
function playAudio(index) { 
    console.log(index)
    const sound = document.querySelectorAll('audio')[index];
    sound.play(); 
} 
