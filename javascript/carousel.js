let delay = 10 * 1000; // 10 seconds
let nextImageButton = document.getElementById("carousel-next-image");

// automatically change carousel image.
setInterval(() => {
    nextImageButton.click();
}, delay);
