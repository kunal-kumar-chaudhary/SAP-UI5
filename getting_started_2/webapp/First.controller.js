sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("app.First", {
    CopyToSecondTextArea: function (oEvt) {
      let sValue = oEvt.getParameters().value;
      let oSecondTextArea = this.byId("copy_text_area");
      oSecondTextArea.setValue(sValue);
    },
  });
});
