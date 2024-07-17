sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("demoproject.controller.Main", {
      go_to_next_screen: function () {
        MessageToast.show(
          "Congrats! You have successfully navigated to the next screen"
        );
        this.byId("app").to(this.byId("intro"));
      },
      onInit: function () {
            var data = new JSONModel({
                features: [
                    "Enterprise-Ready Web Toolkit",
                    "Powerful Development Concepts",
                    "Feature-Rich UI Controls",
                    "Consistent User Experience",
                    "No Vendor Lock-In",
                    "Build on Open Standards",
                ]
            });
            // this model is attached to some view, that is what we are getting and setting the model to the view
            // by doing this we can access the model in view and bind the data to the controls
            this.getView().setModel(data); // default model
      },
      // onChange function takes a event handler as a parameter
      onChange: function (oEvt) {
            var bState = oEvt.getParameter("state");
            this.byId("ready").setVisible(bState);
      } 
    });
  }
);
