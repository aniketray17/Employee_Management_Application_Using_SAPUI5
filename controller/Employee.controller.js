sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.Employee", {
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			oView.bindElement({
				path : "/employeeList/"+oArgs.index,
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				},
				model:"employeeData"
			});
		},
		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		onEdit : function(){
			var oVisibleModel = this.getOwnerComponent().getModel("oVisibleModel");
			oVisibleModel.setProperty("/bEditSimpleForm", true);
			oVisibleModel.setProperty("/bDisplaySimpleForm", false);
			oVisibleModel.setProperty("/bEdit", false);
			oVisibleModel.setProperty("/bDisplay", true);
		},
		onSave : function(){
			var oVisibleModel = this.getOwnerComponent().getModel("oVisibleModel");
			oVisibleModel.setProperty("/bEditSimpleForm", false);
			oVisibleModel.setProperty("/bDisplaySimpleForm", true);
			oVisibleModel.setProperty("/bEdit", true);
			oVisibleModel.setProperty("/bDisplay", false);
		}
	});
});