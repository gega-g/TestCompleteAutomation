var appSteps = require("OrderAppSteps");
var paymentSteps = require("PaymentSteps");
var buttonSteps = require("ButtonsSteps")

function EditButtonTest()
{
  appSteps
  .openApp()
  .openOrder();
  
  paymentSteps
  .clickOnMastercard;
  
  buttonSteps
  .checkEditor;
  
  appSteps
  .closeApp();
}
