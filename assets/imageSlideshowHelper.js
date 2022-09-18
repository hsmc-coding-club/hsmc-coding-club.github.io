// This uses JQuery to work
function generateImageSlideshow(imageURLArray, imagePath, carouselElementID, secondsBetweenImages, imageClasses) {
    // Preload Images
    function preloadImage(url, id){
        let img = new Image();
        img.src = url;
        img.id = id;
        imageClasses.forEach(function (ll) {
            img.classList.add(ll);
        });
        return img;
    }
    
    imageURLArray.forEach((img, index) => {
        imageURLArray[index] = preloadImage(`${imagePath}/${img}`, `${carouselElementID}-${index}`);
    });
    
    $(`#${carouselElementID}`).replaceWith(imageURLArray[0]);

    let cacIndex = 0;
    setInterval(() => {
        let curIndex = cacIndex % imageURLArray.length;
        // console.log(`Displaying image index ${(cacIndex + 1) % imageURLArray.length}...`);
        $(`#${carouselElementID}-${curIndex}`).fadeToggle(700, () => {
            $(`#${carouselElementID}-${curIndex}`).replaceWith(imageURLArray[(cacIndex + 1) % imageURLArray.length]);
            $(`#${carouselElementID}-${(cacIndex + 1) % imageURLArray.length}`).hide();
            $(`#${carouselElementID}-${(cacIndex + 1) % imageURLArray.length}`).fadeToggle(700);
            cacIndex++;
        });
    }, secondsBetweenImages * 1000);
}
