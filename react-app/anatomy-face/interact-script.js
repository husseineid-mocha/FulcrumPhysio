function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(function () {
  jQuery("path[id^=ana]").each(function (i, e) {
    anaaddEvent( jQuery(e).attr("id"));
  });
});
function anaaddEvent(id,relationId) {
  var arr = id.split("");
  var _obj = jQuery("#" + id + "," + arr.slice().join(""));
  _obj.attr({"fill":"rgba(255, 0, 0, 0)", "stroke":anaconfig.default.outlineColor});
  _obj.attr({"cursor": "default"});
  if (anaconfig[id].enabled === true) {
    _obj.attr({"cursor": "pointer"});
    _obj.hover(function () {
      jQuery("#anatip").show().html(anaconfig[id].hover);
      _obj.css({"fill":"rgba(255, 0, 0, 0.3)"});
    }, function () {
      jQuery("#anatip").hide();
      jQuery("#" + id).css({"fill":"rgba(255, 0, 0, 0)"});
    });
    if (anaconfig[id].target !== "none") {
      _obj.mousedown(function () {
        jQuery("#" + id).css({"fill":"rgba(255, 0, 0, 0.7)"});
      });
    }
    _obj.mouseup(function () {
      jQuery("#" + id).css({"fill":"rgba(255, 0, 0, 0.3)"});
      if (anaconfig[id].target === "new_window") {
        window.open(anaconfig[id].url); 
      } else if (anaconfig[id].target === "same_window") {
        window.parent.location.href = anaconfig[id].url;
      } else if (anaconfig[id].target === "modal") {
        jQuery(anaconfig[id].url).modal("show");
      }
    });
    _obj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#anatip").outerWidth(), tiph =jQuery("#anatip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#anatip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _obj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#anatip").outerWidth(), tiph =jQuery("#anatip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":"rgba(255, 0, 0, 0.7)"});
        jQuery("#anatip").show().html(anaconfig[id].hover);
        jQuery("#anatip").css({left: x, top: y});
      });
      _obj.on("touchend", function () {
        jQuery("#" + id).css({"fill":"rgba(255, 0, 0, 0)"});
        if (anaconfig[id].target === "new_window") {
          window.open(anaconfig[id].url);
        } else if (anaconfig[id].target === "same_window") {
          window.parent.location.href = anaconfig[id].url;
        } else if (anaconfig[id].target === "modal") {
          jQuery(anaconfig[id].url).modal("show");
        }
      });
    }
  }
}