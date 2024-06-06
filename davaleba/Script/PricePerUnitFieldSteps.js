var isElementClickable = require("ClickableCheck");
var clickOk = require("ClickOk")

var priceButton = Aliases.Orders.OrderForm.Group.Price;
class PricePerUnitFieldSteps{

  checkButtonClickable(){
    isElementClickable(priceButton)
    return this;
  }
  
  changePriceValue(){
    priceButton.SetText("220");
    clickOk();
    return this;
  }
  
  checkIfChanged(){
    ImageRepository.Elements.Editor.Click();
    if(priceButton.wText != "$100"){
      Log.Error("It has changed")
    }
    clickOk(); 
    return this;
  }
}

module.exports = new PricePerUnitFieldSteps();