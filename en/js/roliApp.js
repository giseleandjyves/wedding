/*roli*/
// document.getElementById("roliButton").onclick = function (e) {
//   e.preventDefault();
//   location.href = "about.html";
// };

var roliLogoKiElt = document.getElementById("roli-logo-ki");
var roliLogoDeElt = document.getElementById("roli-logo-de");

setInterval(() => {
  if (roliLogoKiElt.style.display == "block") {
    roliLogoKiElt.style.display = "none";
    roliLogoDeElt.style.display = "block";
  } else {
    roliLogoKiElt.style.display = "block";
    roliLogoDeElt.style.display = "none";
  }
}, 3000);
