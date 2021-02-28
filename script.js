const togglebar = document.getElementsByClassName('toggle-button')[0];
const navlinks = document.getElementsByClassName('nav-links')[0];

togglebar.addEventListener('click',()=>{
    navlinks.classList.toggle('active');
});