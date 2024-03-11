sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, msg, JSONModel) {
    "use strict";

    return Controller.extend("helloworld.controller.App", {
      onInit: function () {
        const oData = {
          user: "Tom",
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel, "test");
      },
      onPress: function (evt) {
        msg.show(evt.getSource().getId() + " Pressed");
      },
    });
  }
);
