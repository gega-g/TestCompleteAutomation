var isElementClickable = require("ClickableCheck");
var clickOk = require("ClickOk")

class CustomerNameSteps{

  validateFieldClickable()
  {
    isElementClickable(Aliases.Orders.OrderForm.Group.Customer)
    return this;
  }

  addName(name)
  {
    Aliases.Orders.OrderForm.Group.Customer.SetText(name)
    clickOk();
    return this;
  }

  validateName(name) {
    ImageRepository.Elements.Editor.Click()
      var actualName = Aliases.Orders.OrderForm.Group.Customer.wText;
      if (actualName !== name) {
        Log.Error(`Validation failed`);
      }else{
        clickOk();
      }
      return this;
    }
}

module.exports = new CustomerNameSteps();