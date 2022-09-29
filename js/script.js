document.addEventListener('DOMContentLoaded', () => {
//1 
// Створити сторінку, що показує нумерований список пісень:
    let playList = [
        {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
        },
        {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
        },
        {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
        },
        {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
        },
        {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
        },
        {
        author: "AC/DC",
        song:"BACK IN BLACK"
        },
        {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
        },
        {
        author: "METALLICA",
        song:"ENTER SANDMAN"
        }
    ];
    const PLAYLIST = document.createElement('ol');
    const SONGS = document.getElementById('song-list');
        playList.forEach(obj => (
        PLAYLIST.innerHTML += `<li><p>${obj.author}<br>
        ${obj.song}</p></li>`
        ));
        SONGS.append(PLAYLIST);

//2 
// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
// На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.
    const OPEN = document.querySelector('#open');
    const CLOSE = document.querySelector('#close');
    const MODAL = document.querySelector('.window');
    OPEN.onclick = function(){
        MODAL.classList.toggle('window--visually');
    }
    CLOSE.onclick = function(){
        MODAL.classList.remove('window--visually');
    }

//3
// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
   let node = null;
   const CIRCLE = document.getElementsByClassName('on');
   for(let i = 0; i < CIRCLE.length; i++){
    CIRCLE[i].style.opacity = "0.5";
   }
   const SWITCHER = document.getElementById('switch-color');
   
    SWITCHER.onclick = () => selectNextNode();

    let i = 0;

    function selectNextNode(){
        for(let i = 0; i < CIRCLE.length; i++){
            CIRCLE[i].style.opacity = "0.5";
           }
        CIRCLE[i].style.opacity = "1";
        i++;
        if(i >= 3) i = 0;
    }
});