let current_menu_btn = document.getElementById('menu-btn');
let menu_btn = 'media/hambr.png';
let wrong_btn = 'media/wrong.png';

let toggle_menu = document.getElementById('menu-opts-box');

current_menu_btn.addEventListener(onclick, () => {
    if (current_menu_btn.getAttribute('src') === menu_btn){
        current_menu_btn.setAttribute('src', wrong_btn);
        console.log("menu clicked");
        toggle_menu.style.display = "block";
    } else {
        current_menu_btn.setAttribute('src', menu_btn);
        console.log("wrong clicked");
        toggle_menu.style.display = "none";
    }
});


// our tourism styling script
let 

