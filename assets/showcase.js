let cacImgs = [`gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.png`, `gallery-4.png`, `gallery-5.jpg`]

let i = 2;
setInterval(() => {
    if(i == cacImgs.length) i = 1;
    $(`#cac-carousel`).attr(`src`, `assets/img/gallery/cac/${cacImgs[i]}`);
    i++;
}, 5000)