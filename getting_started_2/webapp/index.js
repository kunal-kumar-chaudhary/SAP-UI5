// index.html is pointing to index.js
// here we will import the view and place it in the content div

sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
    "use strict";
    XMLView.create({ viewName: "app.First" }).then(function (oView) {
      oView.placeAt("content");
    });
  });
  