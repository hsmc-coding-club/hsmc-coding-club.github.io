"use strict";

// Viewport
$('head').append(`<meta name="viewport" content="height=device-height,initial-scale=1,maximum-scale=0.6,user-scalable=no"/>`);

// Scrolling
$('body').addClass('stop-scrolling');

setTimeout(() => {
    $('body').removeClass('stop-scrolling');
}, 500);

// Setup the Navbar
let navbarObj = Array.from(document.getElementsByClassName(`navbar`));
navbarObj[0].innerHTML = `
    <img class="coding-club-logo" src="assets/img/main-logo-no-bg.png" height="20px" draggable="false">
    <img class="hsmc-logo" src="assets/img/hsmc-logo.png" height="20px" draggable="false">
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
    <a href="https://github.com/hsmc-coding-club" class="navbar-link" target="_blank">GitHub</a>
    <div class="divider hide-on-mobile">/</div>
    <a href="/hsmc-code" class="navbar-link hide-on-mobile" target="_blank" style="padding-right: 20px">Code!</a>
`;

// Setup the footer
$(`#footer`).append(`<p style="padding: 2px; text-align: center; font-size: 18px; margin: 4px;" class="panel-description"> <object class="icon" data="assets/img/social-icons/github.svg" type="image/svg+xml"></object>   <a href="https://github.com/hsmc-coding-club/hsmc-coding-club.github.io" class="post-link" target="_blank" style="font-weight: normal; margin: 1px;">Source Code - Site Programming by Hershraj and Alex</a></p>`)

// Highlight the current page in the navbar
let ref = window.location.pathname.replace("/", "");
$(`a[href="${ref}"]`).addClass(`chosen-navbar-link`);
if(ref == "") $(`a[href="index.html"]`).addClass(`chosen-navbar-link`);