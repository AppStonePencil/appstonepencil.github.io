var pencilVideo = {
  "playerUrl" : "http://pencil.appstone.net/video",
  "getVideoCode" : function (videoId) {
    return pencilVideo.playerUrl + "#" + encodeURIComponent(JSON.stringify({"videoId" : videoId, "videoDatabase" : pencilVideo.databaseUrl}));
  },
  "loadVideo" : function (videoIds) {
    if (videoIds.length === document.getElementsByClassName("pencilVideoContainer").length) {
      var counter = 0;
      while (counter < videoIds.length) {
        document.getElementsByClassName("pencilVideoContainer")[counter].src = pencilVideo.getVideoCode(videoIds[counter]);
        document.getElementsByClassName("pencilVideoContainer")[counter].style.border = "none";
        counter = counter + 1;
      }
    } else {
      console.error("There are " + videoIds.length + " video Ids provided, but there are " + document.getElementsByClassName("pencilVideoContainer").length + " containers with the class 'pencilVideoContainer'");
    }
  }
}
