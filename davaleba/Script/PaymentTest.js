var appSteps = require("OrderAppSteps");
var buttonSteps = require("ButtonsSteps");
var paymentSteps = require("PaymentSteps");


function PaymentTest()
{
  appSteps
  .openApp()
  .openOrder();
  
  paymentSteps
  .validateFieldClickable()
  .clickOnMastercard();
  
  appSteps
  .closeApp();
}