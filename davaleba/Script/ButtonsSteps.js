var isElementClickable = require("ClickableCheck");
var clickOk = require("ClickOk")

class ButtonsSteps{
  
  checkEditor(){
    var editButton = ImageRepository.Elements.Editor;
    isElementClickable(editButton)
    editButton.Click()
    clickOk();
    return this;
  }
  
  checkDelete(){
    var deleteButton = ImageRepository.Elements.Delete;
    isElementClickable(deleteButton)
    deleteButton.Click()
    NameMapping.Sys.Orders.dlgConfirmation.btnYes.Click()    
    return this;
  }
}

module.exports = new ButtonsSteps();