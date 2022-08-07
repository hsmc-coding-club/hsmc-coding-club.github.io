"use strict";

let cacImgs = [`gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.png`, `gallery-4.png`, `gallery-5.jpg`, `gallery-6.jfif`];

let cacIndex = 0;
setInterval(() => {
    cacIndex++;
    $(`#cac-carousel`).fadeToggle(500, () => {
        $(`#cac-carousel`).attr(`src`, `assets/img/gallery/cac/${cacImgs[cacIndex % cacImgs.length]}`);
        cacIndex = cacIndex % cacImgs.length; // Save Memory Just in Case 
        $(`#cac-carousel`).fadeToggle(500);
    });
}, 5000);