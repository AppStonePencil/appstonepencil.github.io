if (localStorage.getItem("dashboardConfig") != null) {
  var dashboard = {
    "left" : 0,
    "width" : 300,
    "height" : 500,
    "windowSlide" : function () {
      dashboard.left = dashboard.left + 10;
      dashboard.dashboardWindow.moveTo(dashboard.left, 0);
      if (dashboard.left < screen.width) {
        setTimeout(function () {
          dashboard.windowSlide();
        }, 1);
      }
    }
  };
  dashboard.dashboardWindow = window.open('app.html', '', 'width=' + dashboard.width + ', height=' + dashboard.height);
  dashboard.windowSlide();
  window.setInterval(function () {
    if (dashboard.dashboardWindow) {
      dashboard.dashboardWindow.resizeTo(dashboard.width, dashboard.height);
    }
  }, 10);
} else {
  document.write("Ask your system administrator to setup Dashboard");
}
