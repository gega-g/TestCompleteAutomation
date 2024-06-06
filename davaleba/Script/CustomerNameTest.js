var appSteps = require("OrderAppSteps");
var nameSteps = require("CustomerNameSteps");


function CustomerNameTest()
{
  appSteps
  .openApp()
  .openOrder();
  
  nameSteps
  .validateFieldClickable()
  .addName(Project.Variables.customerName = "user")
  .validateName(Project.Variables.customerName);
  
  appSteps
  .closeApp();
}
