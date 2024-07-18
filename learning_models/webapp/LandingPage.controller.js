sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, BindingMode, ResourceModel) {
    "use strict";

    return Controller.extend("app.LandingPage", {
        // we will initialize the model and can use it throughout the application
        onInit: function() {
            var i18n = new ResourceModel({
                bundleName: "app.i18n.i18n"
            })
            // set the i18n as a model to the view
            this.getView().setModel(i18n, "i18n");
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var mData = new JSONModel({
                "message": oBundle.getText("msg")
            });
            mData.setDefaultBindingMode(BindingMode.OneWay); // for one way binding
            this.getView().setModel(mData);
        },
        onPress: function() {
            var message = this.getView().getModel().getProperty("/message");
            MessageToast.show(message);
        }
    });
})