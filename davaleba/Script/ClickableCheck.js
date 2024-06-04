function isElementClickable(element) {
  
  if (!element.Exists) {
    return false;
  }
  
  if (!element.VisibleOnScreen) {
    return false;
  }

  if (!element.Enabled) {
    return false;
  }
  
  return true;
}
module.exports = isElementClickable;