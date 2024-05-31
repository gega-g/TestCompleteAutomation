var appSteps = require("OrderAppSteps");
var orderSteps = require("CreateOrder");

function createOrderWithTwoUsers()
{
  appSteps.openApp();
  orderSteps.CreateOrder1();
  orderSteps.CreateOrder2();
  orderSteps.CreateOrder3();
  appSteps.close();
}
