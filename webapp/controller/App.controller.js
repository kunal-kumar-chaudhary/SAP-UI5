sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
] // pulling in our controller assets
    , function (Controller, MessageToast, JSONModel) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    onInit: function () {
        // set the data model on this view
        var oData = {
            recipient: {
                name: "UI5"
            }
        }
        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
    },
    onShowHello: function () {
        MessageToast.show("Hello World");
    }
  });
});
