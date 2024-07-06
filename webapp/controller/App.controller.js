sap.ui.define(["sap/ui/core/mvc/Controller"] // pulling in our controller assets
    , function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    onShowHello: function () {
        // show a native alert
        alert("hello there, button pressed!");
    }
  });
});
