var appSteps = require("OrderAppSteps");
var serviceSteps = require("ServiceSteps");
var buttonSteps = require("ButtonsSteps")


function DeleteButtonTest()
{
  appSteps
  .openApp()
  .openOrder();
  
  serviceSteps
  .getNameAndAge()
  .getLocationInfo()
  .setName()
  .setAge()
  .setCity()
  .setState()
  .setZip();
  
  buttonSteps
  .checkDelete();
  
  appSteps
  .closeApp();
}
