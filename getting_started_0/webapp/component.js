sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app" // giving it an id of app
            }
        },
        Init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n"); // alias to i18n model
        }
    })
})