document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;
    //pega o que o usuário digitou e joga em song

    if(song !== '') { //se song não estiver vazio
        let songArray = song.split('');
        //cria um array, em que cada item é um caractere
        //digitado pelo usuário
        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    //a template string ${} serve pro query selector pegar
    //o Id com base na tecla que eu digitar
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) { //Se a tecla pressionada tiver um audio
        audioElement.currentTime = 0;
        audioElement.play();
        //toque o audio da respectiva tecla
    }

    if(keyElement) {
        keyElement.classList.add('active');
        //Adiciona uma classe no elemento para o CSS colorir

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
        //Remove a classe 300ms depois 

    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
            //A ${} serve para tocar a composição conforme a tecla pressionada
        }, wait);
        wait += 250;

       
    }
}