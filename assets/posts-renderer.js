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