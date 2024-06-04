var appSteps = require("OrderAppSteps");
var priceSteps = require("PricePerUnitFieldSteps")

function PricePerUnitFieldTest()
{
  appSteps
  .openApp()
  .openOrder();
  
  priceSteps
  .checkButtonClickable()
  .changePriceValue()
  .checkIfChanged();
  
  appSteps
  .closeApp();
}
