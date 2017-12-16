window.onunload = function () {
  if (window.opener) {
    window.opener.document.body.innerHTML = "<span onclick='location.reload();'>Restart Dashboard</span>";
  }
};

var settings = JSON.parse(localStorage.getItem("dashboardConfig"));
window.onload = function () {
  document.getElementById("businessName").innerHTML = settings.businessName;
  var counter = 0;
  while (counter < settings.links.length) {
    document.getElementById("links").innerHTML = document.getElementById("links").innerHTML + "<a href='" + settings.links[counter].url + "' target='_blank'><img style='top: " + (Math.floor(counter / 3) * 60) + "px; left: " + (((counter % 3) * 20) + 20) + "%;' src='" + settings.links[counter].icon + "' class='linkIcon' title='" + settings.links[counter].name + "' onmouseover='displayAppName(" + counter + ");' /></a>";
    counter = counter + 1;
  }
};

function displayAppName(linkNumber) {
  document.getElementById("appName").innerHTML = settings.links[linkNumber].name;
}
