"use strict";

/*
    For Hyperlinks, use this template:
    <a target="_blank" class="post-link" href="[link]">[Text]</a>
    Codeblocks: 
        -> <span class="code-block">[insert code here]</span>
*/

let posts = [];

posts.push({
    "title": "🖼️ Week 1 Website Showcase",
    "date": "9/16/2022",
    "previewIMG": null,
    "content": `Thanks to everyone who showed up to week #1 of coding club! Listed below are the websites that y'all made! Good job!`,
    "author": "Hershraj",
    "extra-imgs": [{url: "member-showcases/gabe/personal-website/preview.png", border: false, "caption": `<a href="member-showcases/gabe/personal-website/index.html" target="_blank">Gabe's Site</a>`}, {url: "member-showcases/ryan/personal-website/preview.png", border: false, "caption": `<a href="member-showcases/ryan/personal-website/index.html" target="_blank">Ryan's Site</a>`}]
});

posts.push({
    "title": "🚀 Starter Code & Downloads",
    "date": "8/22/2022",
    "previewIMG": "assets/img/posts/typescript.png",
    "content": `Listed below are (most) of the files you will need to download for the HSMC Coding Club <br><br>📦<a target="_blank" class="post-link" href="https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi">Node.js Download</a><br>📦<a target="_blank" class="post-link" href="https://github.com/hsmc-coding-club/hsmc-coding-club-starter-typescript/archive/refs/heads/main.zip">Starter Code</a><br>🔗<a target="_blank" class="post-link" href="https://code.visualstudio.com/download">VSCode Download</a>`,
    "author": "Hershraj",
    "extra-imgs": []
});

posts.push({
    "title": "👋 Hello World",
    "date": "8/6/2022",
    "previewIMG": null, // null or image reference or img URL
    "content": `The site is now live and this is a testing post! Looks like this thing is working! Pretty cool, right? <br><br><i>tbh it wasn't that hard but whatever lol</i> <br><br><span class="code-block">This is a testing code block!</span>`,
    "author": "Hershraj",
    "extra-imgs": [{
        url: "assets/img/club-photo-1.png", // bonus image! null or image reference or img URL
        border: true,
        caption: "Coding Club 2021 - (Left to Right) Audrey, Bren, Gabe, Alex, Hershraj"
    }]
});



// Create a function render the posts
function renderPosts(postArr) {
    let toRender = "";

    postArr.forEach((post, index) => {
        let prevImgStr;
        let extraImgStr = ``;
        
        post["extra-imgs"].forEach(extraImg => {
            // Border Settings
            let wipStringText = ``;
            wipStringText += `<img class="panel-bonus-img" style="max-height: 500px; ${extraImg.border ? "border: 2px solid white;" : "border: 0px;"} ${extraImg.caption ? "margin-bottom: 9px;" : ""}" src="${extraImg.url}">`;
            
            if(extraImg.caption) {
                wipStringText = `<div>` + wipStringText + `<div class="img-caption">${extraImg.caption.replace("[ownURL]", extraImg.url)}</div> </div>`
            }
            
            extraImgStr += wipStringText;
        })

        post.previewIMG ? prevImgStr = `<img class="large-panel-img" src="${post.previewIMG}">` : prevImgStr = ``;
        if(!post["extra-imgs"] || post["extra-imgs"].length == 0) extraImgStr = ``;

        toRender += `<div class="large-panel" id="post-${posts.length - index}">
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