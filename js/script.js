

const menuBtn = document.querySelector(".menu-btn"),
container = document.querySelector(".container");
// console.log(menuBtn)
 
const progressBar = document.querySelector(".bar"),
        progressDot = document.querySelector(".dot"), 
        currentTimeEl = document.querySelector(".current-time"),
        currentSongNum = document.querySelector(".current-song-number"),
        DurationEl = document.querySelector(".duration");
        console.log(currentSongNum)

    

menuBtn.addEventListener("click", () => {
    container.classList.toggle('active')
});

let playing = false,
 currentSong =  0,
 shuffle = false,
 repeat = false,
 favourites = [],
 audio = new Audio();

const songs = [
    {
        title: "spell ft oxlade",
        artist: "chike ft oxlade",
        img_src: "spell.gif",
        src: "spell.mp3"
    },
    {
        title: "hard to find",
        artist: "Chike & Flavor",
        img_src: "chikeflav.gif",
        src: "1.mp3"
    },
    {
        title: "Dior",
        artist: "Sean Lifer", 
        img_src: "face.gif",
        src: "face.mp3"
    },
    {
        title: "Betty Butter",
        artist: "Mayorkun ft Davido",
        img_src: "mayokun.gif",
        src: "mayokun.mp3"
    },
    {
        title: "Declan Rice",
        artist: "ODUMODULVCK",
        img_src: "odumo.gif",
        src: "odumo.mp3"
    },
    {
        title: "Who Am I",
        artist: "Noella",
        img_src: "waploaded.gif",
        src: "whoami.mp3"
    },
    {
        title: "Wake Up /WandeCool",
        artist: "Flavour & wanderCool",
        img_src: "waploaded.gif",
        src: "Wake-Up.mp3"
    },
    {
        title: "Balance",
        artist: "Timaya",
        img_src: "waploaded.gif",
        src: "balance.mp3"
    },
    {
        title: "Mad-x-Sarz",
        artist: "Wurld ft Sarz",
        img_src: "waploaded.gif",
        src: "Mad.mp3"
    },
    {
        title: "Jamb-Question",
        artist: "Simi",
        img_src: "waploaded.gif",
        src: "jamb.mp3"
    },
    {
        title: "Senorita",
        artist: "Unknown",
        img_src: "waploaded.gif",
        src: "senorita.mp3"
    },
    {
        title: "Pain Killer",
        artist: "Sarkodie ft Runtown",
        img_src: "waploaded.gif",
        src: "painkiller.mp3"
    },
    {
        title: "Attention",
        artist: "Omay_Lay ft Justin_Bieber",
        img_src: "waploaded.gif",
        src: "attention.mp3"
    },
    {
        title: "Godly",
        artist: "Omay_Lay",
        img_src: "waploaded.gif",
        src: "Omah_Lay_-_Godly-1.mp3"
    },
    {
        title: "Itty bitty piggy",
        artist: "Nicky_Minaj",
        img_src: "waploaded.gif",
        src: "Nicki minaj _ Itty bitty piggy.mp3"
    },
    {
        title: "Bad",
        artist: "Micheal Jackson",
        img_src: "waploaded.gif",
        src: "bad.mp3"
    },
    {
        title: "MaMa",
        artist: "Mayorkun",
        img_src: "waploaded.gif",
        src: "Mayorkun-Mama-_-tooXclusive.com_.mp3"
    },
    {
        title: "Bad",
        artist: "Micheal Jackson",
        img_src: "waploaded.gif",
        src: "bad.mp3"
    },
    {
        title: "Oroma",
        artist: "Mavins_ft_LadiPoe_Ayra_Starr_Crayon_Magixx_Boy_Spy",
        img_src: "waploaded.gif",
        src: "Mavins_ft_LadiPoe_Ayra_Starr_Crayon_Magixx_Boy_Spy.mp3"
    },
    {
        title: "Monalisa",
        artist: "Lojay ft Sarz",
        img_src: "waploaded.gif",
        src: "Lojay-Ft-Sarz-Monalisa-(TrendyBeatz.com).mp3"
    },
    {
        title: "Let it Shine",
        artist: "UnKnown Artist",
        img_src: "waploaded.gif",
        src: "Let It Shine-Good to be Home (Lyrics).mp3"
    },
    {
        title: "Alcohol",
        artist: "Joeboy",
        img_src: "waploaded.gif",
        src: "Joeboy-Alcohol-New-Song-(TrendyBeatz.com).mp3"
    },
    {
        title: "Jaywillz",
        artist: "Medicine",
        img_src: "waploaded.gif",
        src: "Jaywillz-Medicine-(TrendyBeatz.com).mp3"
    },
    {
        title: "Soldie ft Simi",
        artist: "Falz ft Simi",
        img_src: "waploaded.gif",
        src: "Falz_ft_Simi_-_Soldie_Olojoro.com.mp3"
    },
    {
        title: "Foreign-x-Simi",
        artist: "Falz ft Simi",
        img_src: "waploaded.gif",
        src: "FALZ ft SIMI - Foreign _naijaextra.com.mp3"
    },
    {
        title: "Give_Me_Love",
        artist: "Ed_Sheeran",
        img_src: "waploaded.gif",
        src: "Ed_Sheeran_-_Give_Me_Love_[Official_Video](128k).m4a"
    },
    {
        title: "Running To You",
        artist: "Chike ft Simi",
        img_src: "waploaded.gif",
        src: "Chike-Ft.-Simi-Running-To-You.mp3"
    },
    {
        title: "Give_Me_Love",
        artist: "Ed_Sheeran",
        img_src: "waploaded.gif",
        src: "Ed_Sheeran_-_Give_Me_Love_[Official_Video](128k).m4a"
    },
    {
        title: "Bury_a_Friend",
        artist: "Billie Eillish",
        img_src: "waploaded.gif",
        src: "Billie_Eilish_-_bury_a_friend.mp3"
    },
    {
        title: "Rush",
        artist: "Ayra-Starr",
        img_src: "waploaded.gif",
        src: "Ayra-Starr-Rush-(JustNaija.com).mp3"
    },
    {
        title: "Beamer_(Bad_Boys)",
        artist: "Rema",
        img_src: "waploaded.gif",
        src: "Beamer_(Bad_Boys)___JustNaija.com.mp3"
    },
    {
        title: "Bad-Gang",
        artist: "Ajebutter22-ft-Falz",
        img_src: "waploaded.gif",
        src: "badgang.mp3"
    },
     {
        title: "Pretty-Girl",
        artist: "Adekunle ft Patoranking",
        img_src: "waploaded.gif",
        src: "Adekunle-Gold-Pretty-Girl-ft-Patoranking.mp3"
    },
    {
        title: "Gyration",
        artist: "F2",
        img_src: "waploaded.gif",
        src: "f2.mp3"
    },
];

const playListContainer = document.querySelector('#playlist'),
infoWrapper = document.querySelector(".info"),
coverImage =  document.querySelector(".cover-image"),
currentSongTitle = document.querySelector('.current-song-title'),
currentFavourite = document.querySelector("#current-favourite")

function init() {
    updatePlayList(songs);
    loadSong(currentSong);
}

init();


function updatePlayList(songs) {
    // remove any existing element
    playListContainer.innerHTML = "";

    // use for each song array
    songs.forEach((song, index) => {
        
        // extract data from song
        const {title, src} = song;

            //  check if included in favourite array
        const isFavourite = favourites.includes(index);

            // create a tr for songs wrapper
            const tr = document.createElement("tr");
            tr.classList.add("song");
            tr.innerHTML = `
                    <td class="no">
                                <h5>${index + 1 + " ."}</h5>
                            </td> 
                            <td class="title">
                                <h6>${title}</h6>
                            </td>
                            <td class="length">
                                <h5>2:03</h5>
                            </td>
                            <td>
                                <img src="img/like.png"></img>
                            </td>
            `;

        playListContainer.appendChild(tr)

        // lets play song when clicked on playlist song
        tr.addEventListener('click', (e) => {
    
            currentSong = index;
            loadSong(currentSong);
            audio.play();
            container.classList.remove('active');
            coverImage.classList.add("play")
            playPauseBtn.src = 'img/pause.gif'
            playing = true;
        })

        const audioForDuration = new Audio(`${src}`);   
        audioForDuration.addEventListener('loadedmetadata', () => {
            const duration = audioForDuration.duration;
    
            let songDuration = formatTime(duration);
            tr.querySelector(".length h5").innerText = songDuration;
        });
    });

};

function formatTime(time) {
    // format time like 2:30
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    // add trailing zero if seconds is less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
};

// lets add audio play functionality

function loadSong(num) {
    // change all the titles of the current song

    infoWrapper.innerHTML = `
    <h2>${songs[num].title}</h2>
    <h3>${songs[num].artist}</h3>
    `

    currentSongTitle.innerHTML = "Streaming:  " + songs[num].title
    //  change thecover image
    document.querySelector(".cover-image").style.backgroundImage = `url(img/${songs[num].img_src})`
    
    // add src of current song to audio variable
    audio.src = `music/${songs[num].src}`
   
}
currentSongNum.innerHTML =  `
    <span>${songs.length}</span><p>
                                <span>songs</span>
`
// lets add play pause and prev functionality

const playPauseBtn = document.querySelector('#playpause'),
 nextBtn = document.querySelector('#next'),
 prevBtn = document.querySelector('#prev');

 playPauseBtn.addEventListener("click", () => {
    if(playing) {
        // pause is already playing
        playPauseBtn.src = 'img/play.gif';
        coverImage.classList.remove("play")
        playing = false;
        audio.pause();
    }else {
        // if not playing 
        playPauseBtn.src = 'img/pause.gif'
        coverImage.classList.toggle("play")
        playing = true;
        audio.play();
    }
 });


 function nextSong() {

    // shuffle  when playlist next song
if(shuffle) {
    shuffleFunc();
    loadSong(currentSong)
}
     // if current song is not last in playlist
  else if(currentSong < songs.length - 1 ) {
        // load next sond
        currentSong++;
    } else {
        // else if its last song then play first
        currentSong = 0;
    }
    loadSong(currentSong)

    // after load if song wasplaying current too
    // we need if song wasplaying intead of ret rurning
    if(playing) {
        audio.play();
    }
 }

//  call the function
 nextBtn.addEventListener("click", nextSong)

// previous song
function prevSong() {

    // shuffle  when playlist next song
 if(shuffle) {
    shuffleFunc();
    loadSong(currentSong)
    
}

    // if prev is first songgo to last song
   else if(currentSong > 0 ) {
        currentSong--;
    }else {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong)

    // after load if song wasplaying current too

    if(playing) {
        audio.play();
    }
}

prevBtn.addEventListener("click", prevSong);

    // if after adding to playlist rerender to show favourites
    updatePlayList(songs);


// also add to favourite current playing when heart is touched
currentFavourite.addEventListener("click", () => {
    currentFavourite.classList.toggle("active")
    addToFavourits(currentSong)
})

// lets  suffle funtionality

const shuffleBtn = document.querySelector("#shuffle");

function shuffleSongs() {
    // if shuffle shuffle is false make if run true
    shuffle = !shuffle;
    shuffleBtn.classList.toggle("active")
}

shuffleBtn.addEventListener("click", shuffleSongs);

//if shuffle true shuffle songs when playing next song

function shuffleFunc() {
    if (shuffle) {
        // select random song from playlist
        currentSong = Math.floor(Math.random() *  songs.length)
    } 
    // if shuffle is false do nothing
}

// repeat function 

const repeatBtn = document.querySelector("#repeat")

function repeatSong() {
    if(repeat == 0 ) {
        // if repeat is off turn it on
        repeat = 1;
        repeatBtn.classList.add("active")
    }else if(repeat == 1){
        // if  repeat 1 that is only   current song make it 2 that means repeat plalist
        repeat = 2;
        repeatBtn.classList.add("active")
    } else {
        // else turn of repeat
        repeat = 0;
        repeatBtn.classList.remove("active")
    }
}

repeatBtn.addEventListener("click", repeatSong)

// now if repeat on on audio end
audio.addEventListener("ended", () => {
    if(repeat == 1) {
    // if repeatcurrent songs
    // agaign load current song
    loadSong(currentSong)
    audio.play();
    } else if(repeat == 2) {
        // if repeat playlist
        nextSong()
        audio.play()
    }else {
        // if repeat  off
        // just play all playlist
        if(currentSong == songs.length -1) {
            // if its last song in playlist playing first
            
    // shuffle  when playlist next song
if(shuffle) {
    shuffleFunc();
    loadSong(currentSong)
}

    // if current song is not last in playlist
  else if(currentSong < songs.length - 1 ) {
        // load next sond
        currentSong++;
    } else {
        // else if its last song then play first
        currentSong = 0;
    }
    loadSong(currentSong)

    // after load if song wasplaying current too
    // we need if song wasplaying intead of ret rurning
    if(playing) {
        audio.play();
    }
        }else {
            // if not last song continue
            nextSong();
            audio.play();
        }
    }
})

// lets add progress bar

// progress function

function progress() {
    // get duration and current time from audio
    let {duration, currentTime } = audio;

    // if one not a number make it 0

    isNaN(duration) ? (duration = 0) : duration;
    isNaN(currentTime) ? (currentTime = 0) : currentTime;


    // update elment time
    currentTimeEl.innerHTML = formatTime(currentTime);
    DurationEl.innerHTML = formatTime(duration);


    // lets move the progressdot
    let progresPercentage = (currentTime / duration) *100;
     progressDot.style.left = `${progresPercentage}%`

} 

// update progres bar audio timeout event

audio.addEventListener("timeupdate", progress);

// change progress when clicked


function setProgress(e) { 
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

progressBar.addEventListener("click", setProgress)

const volumeIcon = document.querySelector("#volume-icon"),
        currentVolume = document.querySelector("#volume"),
         showVolume = document.querySelector("#show-volume");


volumeIcon.addEventListener("click", muteSound)
currentVolume.addEventListener("change", changeVolume)

// mute sound
function  muteSound() {
    audio.volume = 0;
    showVolume.innerHTML = 0;
    currentVolume.value = 0;
    volumeIcon.src = "img/no-sound.png"
}

// chenge volume
function changeVolume() {
    showVolume.innerHTML = currentVolume.value;
    audio.volume = currentVolume.value / 100;
    volumeIcon.src = "img/volume.png"
    if(currentVolume.value == 0) {
    volumeIcon.src = "img/no-sound.png"
    }
}
 