document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.gif-hover').forEach(img => {
        const gif = img.getAttribute('data-gif');
        const staticImg = img.getAttribute('data-static');

        img.addEventListener('mouseenter', () => {
            img.src = gif;
        });

        img.addEventListener('mouseleave', () => {
            img.src = staticImg;
        });
    });
});
