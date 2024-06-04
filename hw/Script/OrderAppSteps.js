function openApp()
{
  TestedApps.Orders.Run()
  aqObject.CheckProperty(Aliases.Orders.MainForm, "Exists", cmpEqual, true);
}

function openOrder()
{
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...")
}

function close()
{
  TestedApps.Orders.Terminate()
  aqObject.CheckProperty(Aliases.Orders.MainForm, "Exists", cmpEqual, false);
}
module.exports.openApp = openApp;
module.exports.openOrder = openOrder;
module.exports.close = close;