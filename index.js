console.clear();
$(document).ready(function () {
  function TopBar__init() {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop == 0) {
        $(".top-bar").removeClass("hover");
      } else {
        $(".top-bar").addClass("hover");
      }
    });
  }
  TopBar__init();
});
