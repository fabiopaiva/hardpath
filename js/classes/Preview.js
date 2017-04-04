(function() {
    const ready = () => {
        const carousel = document.querySelector('#carousel-example-generic');
        const previewContainer = document.querySelector('.zoom-preview-container');
        const preview = document.querySelector('.zoom-preview');
        const images = carousel.querySelectorAll('img');
        //@TODO: Improve the math to calc offset and threshold
        const offsetX = (carousel.clientWidth / 2) - 20;
        const offesetY = 210;
        let thresholdX = 0.9;
        let thresholdY;

        const height = document.querySelector('.main-container').clientHeight - carousel.clientHeight;
        previewContainer.style.height = `${height}px`;

        const mouseover = (event) => {
            preview.style.backgroundImage = `url(${event.target.src})`;
            preview.style.backgroundPositionX = `${offsetX}px`;
            preview.style.backgroundPositionY = `${offesetY}px`;

            thresholdX = (event.target.width * 100 / event.target.naturalWidth) / 100;
            thresholdY = (event.target.height * 100 / event.target.naturalHeight) / 100;

        };

        const mousemove = (event) => {
            preview.style.backgroundPositionX = `${offsetX - (event.offsetX / thresholdX)}px`;
            preview.style.backgroundPositionY = `${offesetY -  (event.offsetY / thresholdY)}px`;
        };

        images.forEach(
            image => {
                image.addEventListener('mouseover', mouseover)
                image.addEventListener('mousemove', mousemove)
            }
        );
    }
    document.addEventListener('DOMContentLoaded', ready, false);
})();