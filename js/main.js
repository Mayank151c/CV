
window.onmouseover = function()
{
	var img = document.getElementByTagName("img");
	img.style.border = "2px solid red";
}

var codeforcesHTML;

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://codeforces.com/profile/mayank_010501", true);
  xhttp.send();
}