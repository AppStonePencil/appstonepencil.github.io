window.onunload = function () {
  window.opener.document.getElementById("restartDbrd").style.display = "block";
};

var settings = JSON.parse(localStorage.getItem("dashboardConfig"));
window.onload = function () {
  document.getElementById("businessName").innerHTML = settings.businessName;
  var counter = 0;
  while (counter < settings.links.length) {
    document.getElementById("links").innerHTML = document.getElementById("links").innerHTML + "<img style='top: " + (Math.floor(counter / 3) * 60) + "px; left: " + (((counter % 3) * 20) + 20) + "%;' src='" + settings.links[counter].icon + "' class='linkIcon' title='" + settings.links[counter].name + "' onmouseover='displayAppName(" + counter + ");' onclick='openLink(" + counter + ");' />";
    counter = counter + 1;
  }
};

function displayAppName(linkNumber) {
  document.getElementById("appName").innerHTML = settings.links[linkNumber].name;
}

function updateStatsField(fieldNumber, value) {
  window.opener.document.getElementById("stats").getElementsByTagName("code")[fieldNumber].innerHTML = value;
}

window.setInterval(function () {
  updateStatsField(0, self.screenLeft);
  updateStatsField(1, self.screenTop);
}, 10);

function addHistory(text) {
  var historyContainer = window.opener.document.getElementById("history").getElementsByTagName("div")[0];
  var currentDate = new Date();
  historyContainer.innerHTML = "<p>" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + " - " + text + "</p>" + historyContainer.innerHTML;
}

function openLink(linkNumber) {
  window.open(settings.links[linkNumber].url);
  addHistory("Link opened: " + settings.links[linkNumber].name);
}
