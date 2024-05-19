document.addEventListener('DOMContentLoaded', function() {
    const flipperLinks = document.querySelectorAll('.flipper');
  
    flipperLinks.forEach(function(flipperLink) {
        const popup = flipperLink.nextElementSibling;
        const closeBtn = popup.querySelector('.popup-close');
  
        flipperLink.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'block';
        });
  
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(function(popup) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        });
    });
});
