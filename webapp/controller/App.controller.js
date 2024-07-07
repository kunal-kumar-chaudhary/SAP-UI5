sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
  ], // pulling in our controller assets
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {
        // set the data model on this view
        var oData = {
          recipient: {
            name: "UI5",
          },
        };
        var oModel = new JSONModel(oData);
        `
        The created JSON model is set as the model for the current view. 
        This allows the data in oData to be used in the view for data binding.
        `;
        this.getView().setModel(oModel);
        // set i18n model on view
        var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales: [""],
            fallbackLocale: ""
        });
        this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello: function () {
        // on button press, read the message from i18n model and show it in a message toast
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
    });
  }
);
