// Dados dos amigos
const friends = {
    "Rickson": {
        bojiPhoto: "assets/boji/boji-3.png",
        bojiSize: "250px",
        photo: "assets/boji/boji-2.png", // Não usado diretamente, mas mantido por consistência
        message: "Rickson, você é o melhor!",
        introAudio: "assets/audios/intro.wav",
        dedicationAudio: "assets/audios/final.wav",
        song: "amigo-estou-aqui.mp3",
        songText: "Amigo estou aqui, amigo estou aqui..."
    },
    "Ana Cecília": {
        bojiPhoto: "assets/boji/boji-2.png",
        bojiSize: "200px",
        photo: "assets/boji/boji-2.png", // Não usado diretamente, mas mantido por consistência
        message: "Ana Cecília, como Sêneca disse, 'A amizade verdadeira é uma planta de crescimento lento.' Sua paciência e cuidado com as pessoas ao seu redor fazem de você uma amiga rara e preciosa, que sabe cultivar laços profundos e duradouros.",
        introAudio: "assets/audios/ana-cecilia.wav",
        dedicationAudio: "assets/audios/final.wav",
        song: "assets/songs/Santanna O Cantador - Mãos Que Oferecem Flores.mp3",
        songText: "Mãos que oferecem flores, gestos que falam de amores..."
    },
        "Ana Cecilia": {
        bojiPhoto: "assets/boji/boji-2.png",
        bojiSize: "200px",
        photo: "assets/boji/boji-2.png", // Não usado diretamente, mas mantido por consistência
        message: "Ana Cecília, como Sêneca disse, 'A amizade verdadeira é uma planta de crescimento lento.' Sua paciência e cuidado com as pessoas ao seu redor fazem de você uma amiga rara e preciosa, que sabe cultivar laços profundos e duradouros.",
        introAudio: "assets/audios/ana-cecilia.wav",
        dedicationAudio: "assets/audios/final.wav",
        song: "assets/songs/Santanna O Cantador - Mãos Que Oferecem Flores.mp3",
        songText: "Mãos que oferecem flores, gestos que falam de amores..."
    },
        "ana cecilia": {
        bojiPhoto: "assets/boji/boji-2.png",
        bojiSize: "200px",
        photo: "assets/boji/boji-2.png", // Não usado diretamente, mas mantido por consistência
        message: "Ana Cecília, como Sêneca disse, 'A amizade verdadeira é uma planta de crescimento lento.' Sua paciência e cuidado com as pessoas ao seu redor fazem de você uma amiga rara e preciosa, que sabe cultivar laços profundos e duradouros.",
        introAudio: "assets/audios/ana-cecilia.wav",
        dedicationAudio: "assets/audios/final.wav",
        song: "assets/songs/Santanna O Cantador - Mãos Que Oferecem Flores.mp3",
        songText: "Mãos que oferecem flores, gestos que falam de amores..."
    },
        "ana cecília": {
        bojiPhoto: "assets/boji/boji-2.png",
        bojiSize: "200px",
        photo: "assets/boji/boji-2.png", // Não usado diretamente, mas mantido por consistência
        message: "Ana Cecília, como Sêneca disse, 'A amizade verdadeira é uma planta de crescimento lento.' Sua paciência e cuidado com as pessoas ao seu redor fazem de você uma amiga rara e preciosa, que sabe cultivar laços profundos e duradouros.",
        introAudio: "assets/audios/ana-cecilia.wav",
        dedicationAudio: "assets/audios/final.wav",
        song: "assets/songs/Santanna O Cantador - Mãos Que Oferecem Flores.mp3",
        songText: "Mãos que oferecem flores, gestos que falam de amores..."
    }
};

let currentCard = 1;
let audioPlayed = false;
let photoRevealed = false;

document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const nameScreen = document.getElementById("name-screen");
    const mainScreen = document.getElementById("main-screen");
    const startButton = document.getElementById("start-button");
    const playWelcome = document.getElementById("play-welcome");
    const welcomeAudio = document.getElementById("welcome-audio");
    const submitName = document.getElementById("submit-name");

    // Botão "Começar"
    startButton.addEventListener("click", () => {
        welcomeScreen.classList.add("hidden");
        nameScreen.classList.remove("hidden");
    });

    // Botão "Ouvir Boji" (tela de boas-vindas)
    playWelcome.addEventListener("click", () => {
        welcomeAudio.play().then(() => {
            console.log("Áudio de boas-vindas tocando...");
            animateButton(playWelcome, welcomeAudio);
        }).catch(err => {
            console.error("Erro ao tocar o áudio:", err);
        });
    });

    // Botão "Entrar"
    submitName.addEventListener("click", () => {
        const name = document.getElementById("user-name").value.trim();
        if (friends[name]) {
            document.getElementById("boji-card-1").src = friends[name].bojiPhoto;
            document.getElementById("boji-card-1").style.width = friends[name].bojiSize;
            document.getElementById("greeting-text").innerText = `Olá, ${friends[name].message.split(",")[0]}!`;
            document.getElementById("intro-audio").src = friends[name].introAudio;
            document.getElementById("friend-message").innerHTML = friends[name].message; // Usar innerHTML para rich text
            document.getElementById("dedication-audio").src = friends[name].dedicationAudio;
            document.getElementById("boji-card-3").src = friends[name].bojiPhoto;
            document.getElementById("boji-card-3").style.width = friends[name].bojiSize;
            document.getElementById("song-text").innerText = friends[name].songText;
            document.getElementById("song-audio").src = friends[name].song;

            nameScreen.classList.add("hidden");
            mainScreen.classList.remove("hidden");
        } else {
            alert("Nome não encontrado! Tente 'Rickson' ou 'Ana Cecilia'.");
        }
    });
});

const playIntroButton = document.getElementById("play-intro");
const introAudio = document.getElementById("intro-audio");
playIntroButton.addEventListener("click", () => {
    playIntroButton.disabled = true;
    introAudio.play().then(() => {
        console.log("Áudio de introdução tocando...");
        animateButton(playIntroButton, introAudio);
    }).catch(err => {
        console.error("Erro ao tocar o áudio de introdução:", err);
        playIntroButton.disabled = false;
    });

    introAudio.addEventListener("ended", () => {
        console.log("Áudio de introdução terminou.");
        audioPlayed = true;
        document.getElementById("next-button").classList.remove("hidden");
    }, { once: true });
});

const photoCover = document.getElementById("photo-cover");
photoCover.addEventListener("click", () => {
    if (audioPlayed && !photoRevealed) {
        photoCover.style.animation = "fadeOut 1s forwards";
        setTimeout(() => {
            photoCover.classList.add("hidden");
            document.getElementById("friend-message").classList.remove("hidden");
            document.getElementById("play-dedication").classList.remove("hidden");
            photoRevealed = true;
            document.getElementById("next-button").classList.remove("hidden");
        }, 1000);
    } else if (!audioPlayed) {
        alert("Ouça o Boji primeiro!");
    }
});

const playDedicationButton = document.getElementById("play-dedication");
const dedicationAudio = document.getElementById("dedication-audio");
playDedicationButton.addEventListener("click", () => {
    playDedicationButton.disabled = true;
    dedicationAudio.play().then(() => {
        console.log("Áudio de dedicação tocando...");
        animateButton(playDedicationButton, dedicationAudio);
    }).catch(err => {
        console.error("Erro ao tocar o áudio de dedicação:", err);
        playDedicationButton.disabled = false;
    });
});

const playSongButton = document.getElementById("play-song");
const songAudio = document.getElementById("song-audio");
playSongButton.addEventListener("click", () => {
    playSongButton.disabled = true;
    songAudio.play().then(() => {
        console.log("Música dedicada tocando...");
        animateButton(playSongButton, songAudio);
    }).catch(err => {
        console.error("Erro ao tocar a música:", err);
        playSongButton.disabled = false;
    });
});

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", () => {
    if (currentCard > 1) {
        document.getElementById(`card-${currentCard}`).classList.add("hidden");
        currentCard--;
        document.getElementById(`card-${currentCard}`).classList.remove("hidden");
        updateButtons();
    }
});

nextButton.addEventListener("click", () => {
    if (currentCard < 3) {
        document.getElementById(`card-${currentCard}`).classList.add("hidden");
        currentCard++;
        document.getElementById(`card-${currentCard}`).classList.remove("hidden");
        updateButtons();
    }
});

function updateButtons() {
    prevButton.classList.toggle("hidden", currentCard === 1);
    nextButton.classList.toggle("hidden", (currentCard === 1 && !audioPlayed) || (currentCard === 2 && !photoRevealed) || currentCard === 3);
}

function animateButton(button, audio) {
    const duration = audio.duration * 1000; // Duração em milissegundos
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1); // Progresso de 0 a 1
        const greenValue = Math.floor(progress * 255); // Verde de 0 a 255
        button.style.backgroundColor = `rgb(0, ${greenValue}, 0)`;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            button.style.backgroundColor = "#ffffff"; // Volta ao branco no final
            button.disabled = false; // Reabilita o botão
        }
    }

    requestAnimationFrame(step);
}
