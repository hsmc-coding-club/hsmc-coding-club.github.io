let cacImgs = [`gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.png`, `gallery-4.png`, `gallery-5.jpg`];

let cacIndex = 0;
setInterval(() => {
    cacIndex++;
    $(`#cac-carousel`).fadeToggle(1000, () => {
        $(`#cac-carousel`).attr(`src`, `assets/img/gallery/cac/${cacImgs[cacIndex % cacImgs.length]}`);
    });
    $(`#cac-carousel`).fadeToggle(1000);
}, 5000);