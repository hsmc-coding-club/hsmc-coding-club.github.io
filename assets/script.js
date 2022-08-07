$('body').addClass('stop-scrolling');

setTimeout(() => {
    $('body').removeClass('stop-scrolling');
}, 500);

// Setup the Navbar
let navbarObj = Array.from(document.getElementsByClassName(`navbar`));
navbarObj[0].innerHTML = `
    <img class="coding-club-logo" src="assets/img/main-logo-no-bg.png" draggable="false">
    <img class="hsmc-logo" src="assets/img/hsmc-logo.png" draggable="false">
    <a href="index.html" class="navbar-link">Home</a>
    <div class="divider">/</div>
    <a href="leaders.html" class="navbar-link">Leaders</a>
    <div class="divider">/</div>
    <a href="showcase.html" class="navbar-link">Showcase</a>
    <div class="divider">/</div>
    <a href="posts.html" class="navbar-link">Posts</a>
    <div class="divider">/</div>
    <a href="https://discord.gg/HuCeNbqMCn" class="navbar-link" target="_blank">Discord</a>
    <div class="divider">/</div>
    <a href="https://github.com/hsmc-coding-club" class="navbar-link" target="_blank" style="padding-right: 20px">GitHub</a>
`;