let posts = [];
// For Hyperlinks, use this template:
// <a target="_blank" class="post-link" href="[link]">[Text]</a>

posts.push({
    "title": "👋 Hello World",
    "date": "8/6/2022",
    "previewIMG": null, // null or image reference or img URL
    "content": `The site is now live and this is a testing post! Looks like this thing is working! Pretty cool, right? <br><br><i>tbh it wasn't that hard but whatever lol</i>`,
    "author": "Hershraj",
    "extra-img": {
        url: "assets/img/club-photo-1.png", // bonus image! null or image reference or img URL
        border: true
    } 
});

renderPosts(posts);

ScrollReveal().reveal('.panel', {delay: 150});
ScrollReveal().reveal('.large-panel', {delay: 150});