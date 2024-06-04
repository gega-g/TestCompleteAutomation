class OrderAppSteps {
  openApp() {
    TestedApps.Orders.Run();
    aqObject.CheckProperty(Aliases.Orders.MainForm, "Exists", cmpEqual, true);
    return this;
  }

  openOrder() {
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    return this;
  }

  closeApp() {
    TestedApps.Orders.Terminate();
    aqObject.CheckProperty(Aliases.Orders.MainForm, "Exists", cmpEqual, false);
    return this;
  }
}

module.exports = new OrderAppSteps();
