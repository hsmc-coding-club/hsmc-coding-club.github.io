"use strict";

/*
    For Hyperlinks, use this template:
    <a target="_blank" class="post-link" href="[link]">[Text]</a>
    Codeblocks: 
        -> <span class="code-block">[insert code here]</span>
*/

let posts = [];

posts.push({
    "title": "🚀 Starter Code & Downloads",
    "date": "8/22/2022",
    "previewIMG": "assets/img/posts/typescript.png",
    "content": `Listed below are (most) of the files you will need to download for the HSMC Coding Club <br><br>📦<a target="_blank" class="post-link" href="https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi">Node.js Download</a><br>📦<a target="_blank" class="post-link" href="https://github.com/hsmc-coding-club/hsmc-coding-club-starter-typescript/archive/refs/heads/main.zip">Starter Code</a><br>🔗<a target="_blank" class="post-link" href="https://code.visualstudio.com/download">VSCode Download</a>`,
    "author": "Hershraj",
    "extra-img": {
        url: null, // bonus image! null or image reference or img URL
        border: false
    } 
});

posts.push({
    "title": "👋 Hello World",
    "date": "8/6/2022",
    "previewIMG": null, // null or image reference or img URL
    "content": `The site is now live and this is a testing post! Looks like this thing is working! Pretty cool, right? <br><br><i>tbh it wasn't that hard but whatever lol</i> <br><br><span class="code-block">This is a testing code block!</span>`,
    "author": "Hershraj",
    "extra-img": {
        url: "assets/img/club-photo-1.png", // bonus image! null or image reference or img URL
        border: true
    } 
});



// Create a function render the posts
function renderPosts(postArr) {
    let toRender = "";

    postArr.forEach(post => {
        let prevImgStr = `<img class="large-panel-img" src="${post.previewIMG}">`;
        let extraImgStr = `<img class="panel-bonus-img" style="max-height: 400px;" src="${post["extra-img"].url}">`;
        
        // Border Settings
        post["extra-img"].border ? extraImgStr = `<img class="panel-bonus-img" style="max-height: 400px;" src="${post["extra-img"].url}">` : extraImgStr = `<img class="panel-bonus-img" style="max-height: 400px; border: 0px solid black;" src="${post["extra-img"].url}">`;

        if(!post.previewIMG) prevImgStr = ``;
        if(!post["extra-img"].url) extraImgStr = ``;

        toRender += `<div class="large-panel">
            <div class="panel-row">
                ${prevImgStr}
                <p class="panel-description"><span class="panel-header">${post.title}</span> <br><span class="author">📝 ${post.author}</span><br><span class="date">🕑 ${post.date}</span><br><br>
                ${post.content.toString()}
                </p>
            </div>
            ${extraImgStr}
        </div>`
    });

    document.getElementById("posts-container").innerHTML = toRender;
};

// Utilize it
renderPosts(posts);

// ScrollReveal
ScrollReveal().reveal('.panel', {delay: 150});
ScrollReveal().reveal('.large-panel', {delay: 150});