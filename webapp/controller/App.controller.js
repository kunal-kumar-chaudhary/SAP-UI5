sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" // pulling in the MessageToast control
] // pulling in our controller assets
    , function (Controller, MessageToast) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    onShowHello: function () {
        // show a native alert
        MessageToast.show("Hello World");
    }
  });
});
