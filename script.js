document.addEventListener('DOMContentLoaded', function() {
    const flipperLinks = document.querySelectorAll('.flipper');
  
    flipperLinks.forEach(function(flipperLink) {
      const popup = flipperLink.querySelector('.popup');
      const closeBtn = popup.querySelector('.close');
  
      flipperLink.addEventListener('click', function(e) {
        e.preventDefault();
        popup.style.display = 'block';
      });
  
      closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
      });
    });
});