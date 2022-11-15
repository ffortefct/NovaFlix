let delay = 4 * 1000; // 4 seconds
let nextImageButton = document.getElementById("carousel-next-image");

// automatically change carousel image.
setInterval(() => {
    nextImageButton.click();
}, delay);
