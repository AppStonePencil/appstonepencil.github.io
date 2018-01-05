function getJSON(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url, false);
    Httpreq.send();
    return JSON.parse(Httpreq.responseText);
}

var urlValues = JSON.parse(decodeURIComponent(window.location.hash.replace("#", "")));
var videoData = getJSON(urlValues.videoDatabase);

window.onload = function () {
	if (videoData[urlValues.videoId] != undefined) {
		document.getElementsByTagName("video")[0].src = videoData[urlValues.videoId].location;
    		document.getElementById("videoInfo").getElementsByTagName("p")[0].innerHTML = videoData[urlValues.videoId].name;
    		document.getElementById("videoInfo").getElementsByTagName("p")[1].innerHTML = videoData[urlValues.videoId].desc;
    		document.getElementById("playButton").parentElement.onmouseover = function () {
      			document.getElementById("playButton").style.display = "block";
      			document.getElementById("videoInfo").style.display = "none";
    		};
    		document.getElementById("playButton").parentElement.onmouseout = function () {
      			document.getElementById("playButton").style.display = "none";
      			document.getElementById("videoInfo").style.display = "block";
    		};
		document.getElementById("playButton").onclick = function () {
			this.parentElement.style.display = "none";
			document.getElementsByTagName("video")[0].style.display = "block";
			document.getElementsByTagName("video")[0].play();
		};
	} else {
		console.error("Video does not exist!");
		document.body.innerHTML = "Cannot find video ID: " + urlValues.videoId;
	}
};
