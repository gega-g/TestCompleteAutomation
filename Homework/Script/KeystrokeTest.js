var KeystrokeSteps = require("KeystrokeSteps")
var appSteps = require("OrderAppSteps")

function call()
{
  appSteps
  .openApp()
  .openOrder();  

  KeystrokeSteps
  .fillStateField()
  .copyWordFromStateField();
  
  appSteps
  .closeApp();
}