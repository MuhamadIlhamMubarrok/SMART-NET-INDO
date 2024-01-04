document.addEventListener("DOMContentLoaded", function () {
  var mobileMenu = document.getElementById("mobileMenu");
  var menuButton = document.getElementById("menuButton");
  var menuImage = document.getElementById("menuImage");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    var isMenuHidden = mobileMenu.classList.contains("hidden");
    menuImage.src = isMenuHidden ? "./assets/menu.png" : "./assets/exit-menu.png";
  });

  var submenuToggles = document.querySelectorAll(".submenu-toggle");
  submenuToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var submenuId = toggle.getAttribute("data-submenu");
      var submenu = document.getElementById("submenu-" + submenuId);
      submenu.classList.toggle("hidden");

      var arrowIcon = toggle.querySelector("ion-icon");
      if (submenu.classList.contains("hidden")) {
        arrowIcon.setAttribute("name", "arrow-dropdown");
      } else {
        arrowIcon.setAttribute("name", "arrow-dropup");
      }
    });
  });
});
