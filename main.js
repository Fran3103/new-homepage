const menuBtn = document.querySelector('.menu_mobile');
const closeBtn = document.querySelector('.menu_close');
const  menuMobile = document.querySelector('.menu');



menuBtn.addEventListener('click', () =>{

    menuOpen (menuMobile);


})


closeBtn.addEventListener('click', ()=>{
    menuClose(menuMobile);
})

function menuOpen(menuMobile){
    menuMobile.style.display = 'flex';
}

function menuClose(menuMobile, menuDesktop){
menuMobile.style.display = 'none';

}