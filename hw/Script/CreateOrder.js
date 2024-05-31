var orderAppSteps = require("OrderAppSteps");

function CreateOrder1()
{
  orderAppSteps.openOrder()
  Aliases.Orders.OrderForm.Group.Customer.SetText("User1")
  Aliases.Orders.OrderForm.Group.Street.SetText("Street1")
  Aliases.Orders.OrderForm.Group.City.SetText("Kutaisi")
  Aliases.Orders.OrderForm.ButtonOK.Click()
}
function CreateOrder2()
{                          
  orderAppSteps.openOrder()
  Aliases.Orders.OrderForm.Group.Customer.SetText("User2")
  Aliases.Orders.OrderForm.Group.State_.SetText("Samegrelo")
  Aliases.Orders.OrderForm.Group.City.SetText("Walenjixa")
  Aliases.Orders.OrderForm.ButtonOK.Click()
}
function CreateOrder3()
{
  orderAppSteps.openOrder()
  Aliases.Orders.OrderForm.Group.Customer.SetText("User3")
  Aliases.Orders.OrderForm.Group.Zip.SetText("40125")
  Aliases.Orders.OrderForm.Group.CardNo.SetText("123467890")
  Aliases.Orders.OrderForm.ButtonOK.Click()
}
module.exports.CreateOrder1 = CreateOrder1;
module.exports.CreateOrder2 = CreateOrder2;
module.exports.CreateOrder3 = CreateOrder3;