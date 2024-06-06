var isElementClickable = require("ClickableCheck");
var clickOk = require("ClickOk")

class PaymentSteps{

  validateFieldClickable()
  {
    isElementClickable(Aliases.Orders.OrderForm.Group.WinFormsObject("MasterCard"))
    return this;
  }
  clickOnMastercard()
  {
    Aliases.Orders.OrderForm.Group.WinFormsObject("MasterCard").Click()
    clickOk();
    return this;
  }
}

module.exports = new PaymentSteps();