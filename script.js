document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuButton = document.getElementById('menuButton');
    var menuImage = document.getElementById('menuImage');

    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Change the image source based on the menu state
      var isMenuHidden = mobileMenu.classList.contains('hidden');
      menuImage.src = isMenuHidden ? './assets/menu.png' : './assets/exit-menu.png';
    });
  });