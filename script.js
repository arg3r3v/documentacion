document.addEventListener('DOMContentLoaded', function() {
    const flipperLinks = document.querySelectorAll('.flipper');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupCaption = document.getElementById('popup-caption');
    const closeBtn = document.querySelector('.popup-close');

    flipperLinks.forEach(function(flipperLink) {
        flipperLink.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = flipperLink.getAttribute('data-img');
            const captionText = flipperLink.getAttribute('data-caption');
            popupImg.src = imgSrc;
            popupCaption.textContent = captionText;
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
