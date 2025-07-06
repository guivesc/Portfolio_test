document.addEventListener('DOMContentLoaded', function () {
    const gifContainers = document.querySelectorAll('.gif');

    gifContainers.forEach(container => {
        const img = container.querySelector('.gif-hover');
        const gifSrc = img.getAttribute('data-gif');
        const staticSrc = img.getAttribute('data-static');

        container.addEventListener('mouseover', () => {
            img.src = gifSrc;
        });

        container.addEventListener('mouseout', () => {
            img.src = staticSrc;
        });
    });
});
