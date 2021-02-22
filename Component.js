sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.nav.Component", {

		metadata: {
			manifest: "json"
		},

        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
			var aData = new sap.ui.model.json.JSONModel("./localService/mockdata/Employees.json");
			aData.attachRequestCompleted(()=> {
				this.getModel("employeeData").setProperty("/employeeList", aData.getData());
			})

            // create the views based on the url/hash
            this.getRouter().initialize();

			var oVisibleData = {
				"bEditSimpleForm": false,
				"bDisplaySimpleForm": true,
				"bEdit": true,
				"bDisplay": false
			 };
			 var oVisibleModel = new sap.ui.model.json.JSONModel(oVisibleData);
			 this.setModel(oVisibleModel, "oVisibleModel");
        }
	});
});