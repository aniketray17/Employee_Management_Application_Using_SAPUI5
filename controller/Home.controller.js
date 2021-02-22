sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController,Filter,FilterOperator) {
	"use strict";
	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
        onListItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("employeeData");
			this.getOwnerComponent().getRouter().navTo("employee",{
				index:oCtx.getPath().split("/")[oCtx.getPath().split("/").length-1],
				employeeId : oCtx.getProperty("EmployeeID")
			});
		},
		onFilterEmployees:function(oEvent){
			var aFilter =[];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("FirstName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("employeeList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onNavToEmployees : function(){
			this.getView().getModel("employeeData").setProperty("/newData",{
				"EmployeeID": "",
				"LastName": "",
				"FirstName": "",
				"Address": "",
				"City": "",
				"Deposit": "",
				"Region": "",
				"JoiningDate" : "",
				"Department" : "",
				"Country": "",
				"HomePhone": "",
				"Own_Vehicle":"",
				"Vehicle_Type":""
				
			});
			this.getOwnerComponent().getRouter().navTo("addEmployee");
		}
	});
});