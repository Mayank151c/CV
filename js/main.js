
// collapse the navbar button in mobile screen if scroll event occur.
window.onscroll = function() {
  document.getElementById("navbarText").classList.add("collapsing");
  document.getElementsByTagName("header").style.display = "none";
}

window.onload = function(){
  document.body.style.backgroundColor ="";
}

