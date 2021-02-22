sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.nav.controller.AddEmployee", {
       onSaveData : function(){
        var oModel = this.getView().getModel("employeeData");
        var newData = oModel.getProperty("/newData");
        var len = oModel.getProperty("/employeeList").length;
        var x = oModel.getProperty("/employeeList");
        if(this.byId("empFirst").getValue()=="" || this.byId("empLast").getValue()=="" ||
        this.byId("empAddress").getValue()=="" || this.byId("empCity").getValue()=="" || this.byId("empAmount").getValue()==""
        || this.byId("empRegion").getValue()=="" || this.byId("empDate").getValue()=="" || this.byId("empDepartment").getValue()=="" ||
        this.byId("empCountry").getValue()=="" || this.byId("empContact").getValue()=="" || this.byId("empOwnsVehicle").getValue()=="" ||
        this.byId("empVehicle").getValue()==""){
           alert("Please fill all details");
           return;
        }

      //   if(x.contains(this.byId("empContact").getValue())){
      //       alert("User already registered");
      //       return;
      //   }
        newData.EmployeeID = len + 1;
        oModel.getProperty("/employeeList").push(newData);
        oModel.refresh();

         var oRouter = this.getOwnerComponent().getRouter();
         oRouter.navTo("appHome",{},true);

       },
       savePname: function () {
         var name = this.byId("empFirst").getValue();
         if (name == "") {
             this.byId("empFirst").setValueState("Error");
         }
         else {
             this.byId("empFirst").setValueState("Success");
         }
     },
     saveLName: function () {
      var name = this.byId("empLast").getValue();
      if (name == "") {
          this.byId("empLast").setValueState("Error");
      }
      else {
          this.byId("empLast").setValueState("Success");
      }
  },
   saveAddress:function(){
      var name = this.byId("empAddress").getValue();
      if (name == "") {
         this.byId("empAddress").setValueState("Error");
      }
      else {
         this.byId("empAddress").setValueState("Success");
      }
   },
   saveCity:function(){
      var name = this.byId("empCity").getValue();
      if (name == "") {
         this.byId("empCity").setValueState("Error");
      }
      else {
         this.byId("empCity").setValueState("Success");
      }
   },
   saveAmount : function(){
      var name = this.byId("empAmount").getValue();
      if (name == "") {
         this.byId("empAmount").setValueState("Error");
      }
      else {
         this.byId("empAmount").setValueState("Success");
      }
   },
   saveRegion : function(){
      var name = this.byId("empRegion").getValue();
      if (name == "") {
         this.byId("empRegion").setValueState("Error");
      }
      else {
         this.byId("empRegion").setValueState("Success");
      }
   },
   saveDate : function(){
      var name = this.byId("empDate").getValue();
      if (name == "") {
         this.byId("empDate").setValueState("Error");
      }
      else {
         this.byId("empDate").setValueState("Success");
      }
   },
   saveDepartment : function(){
      var name = this.byId("empDepartment").getValue();
      if (name == "") {
         this.byId("empDepartment").setValueState("Error");
      }
      else {
         this.byId("empDepartment").setValueState("Success");
      }
   },
   saveCountry : function(){
      var name = this.byId("empCountry").getValue();
      if (name == "") {
         this.byId("empCountry").setValueState("Error");
      }
      else {
         this.byId("empCountry").setValueState("Success");
      }
   },
   savePhone : function(){
      var name = this.byId("empContact").getValue();
      if (name == "") {
         this.byId("empContact").setValueState("Error");
      }
      else {
         this.byId("empContact").setValueState("Success");
      }
   },
   saveOwnsVehicle : function(){
      var name = this.byId("empOwnsVehicle").getValue();
      if (name == "") {
         this.byId("empOwnsVehicle").setValueState("Error");
      }
      else {
         this.byId("empOwnsVehicle").setValueState("Success");
      }
   },
   saveVehicle : function(){
      var name = this.byId("empVehicle").getValue();
      if (name == "") {
         this.byId("empVehicle").setValueState("Error");
      }
      else {
         this.byId("empVehicle").setValueState("Success");
      }
   }


    });
 });