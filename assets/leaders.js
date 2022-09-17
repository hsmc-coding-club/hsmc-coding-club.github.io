"use strict";

let leaders = [];

leaders.push({
    full_name: "Alex Sherbrooke",
    online_name: "cabalex",
    years: "2022/2023",
    img_url: "assets/img/people/alex.png",
    online_image_url: "assets/img/people/alex-pfp.png",
    id: "alex",
    socials: {
        github: "https://github.com/cabalex",
        twitter: "https://twitter.com/cabalex",
        linkedIn: "https://www.linkedin.com/in/cabalex/"
    }
});


leaders.push({
    full_name: "Hershraj Niranjani",
    online_name: "talkierbox / sev",
    years: "2022/2023",
    img_url: "assets/img/people/hershraj.png",
    online_image_url: "assets/img/people/hershraj-pfp.gif",
    id: "hershraj",
    socials: {
        github: "https://github.com/talkierbox",
        twitter: "https://twitter.com/hershrajn",
        linkedIn: "https://www.linkedin.com/in/hershrajn/"
    }
});


// Read the data and format it into the webpage
leaders.forEach(leaderData => {
    let leaderObj = $(`
    <div class="panel extra-pad-sides">
        <p class="name">${leaderData.full_name}</p>
        <p class="years">${leaderData.years}</p>
        <p class="username">${leaderData.online_name}</p>
       <img class="person-img" id="${leaderData.id}" src="${leaderData.img_url}">
    </div>
    `);

    // Add socials
    let socialsOpening = `<div class="socials">`
    for (let prop in leaderData.socials) {
        let capL = prop[0].toUpperCase() + prop.substring(1);
        socialsOpening += `<object class="icon" data="assets/img/social-icons/${prop.toLowerCase()}.svg" type="image/svg+xml"></object> <a class="social-item" href="${leaderData.socials[prop]}" target="_blank">${capL}</a><br> `
    }
    socialsOpening += `</div>`;
    leaderObj.append($(socialsOpening));

    $(`#leaders-container`).append(leaderObj);

    // Image Hover Effect
    let fadeToggleNum = 300;
    $(`#${leaderData.id}`).hover(() => {
        $(`#${leaderData.id}`).fadeToggle(fadeToggleNum, () => {
            $(`#${leaderData.id}`).attr("src", `${leaderData.online_image_url}`);
        });
        $(`#${leaderData.id}`).fadeToggle(fadeToggleNum);
    }, () => {
        $(`#${leaderData.id}`).fadeToggle(fadeToggleNum, () => {
            $(`#${leaderData.id}`).attr("src", `${leaderData.img_url}`);
        });
        $(`#${leaderData.id}`).fadeToggle(fadeToggleNum);
    });
});

// ScrollReveal
ScrollReveal().reveal('.panel', {delay: 100});
