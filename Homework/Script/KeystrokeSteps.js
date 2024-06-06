class KeystrokeSteps{
  fillStateField()
  {
    Aliases.Orders.Orderform.Group.State_.Keys("თბილისი, თამარაშვილის N1, 0182")
    return this;
  }
  
  copyWordFromStateField(){
    
    Aliases.Orders.Orderform.Group.State_.Keys("[Shift]");
    
    while (true) {
      Aliases.Orders.Orderform.Group.State_.Keys("[Left]");
      var selectedText = Sys.Desktop.ActiveWindow().Keys("^c");
      if (selectedText == ",") {
       break;
      }
    }
//  ვერ მოვასწარი ნახვა როგორ დამეჭირა და გამეჩერებინა შიფტზე რომ მომენიშნა სიტყვა :/  
    Log.Message(Sys.Clipboard)    
    return this;
    }
}
module.exports = new KeystrokeSteps();
