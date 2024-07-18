sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
], function(Controller, MessageToast, JSONModel, BindingMode) {
    "use strict";

    return Controller.extend("app.LandingPage", {
        // we will initialize the model and can use it throughout the application
        onInit: function() {
            var mData = new JSONModel({
                "message": "this is a message shown in UI5 demo"
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