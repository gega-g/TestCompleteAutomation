function threeNumInt(num1, num2, num3) {
  
      if (num1 < 100 || num1 > 999 || num2 < 100 || num2 > 999 || num3 < 100 || num3 > 999) {
        Log.Error("Error: All numbers must be in the range 100-999.");
        return;
    }
  
    function multiplied(num) {
        var str = aqConvert.IntToStr(num);
        var valueAfterMultiply = 1;
        for (var i = 0; i < str.length; i++) {
            valueAfterMultiply *= aqConvert.StrToInt(aqString.GetChar(str, i));
        }
        return valueAfterMultiply;
    }
    
    var firstNumToStr = aqConvert.IntToStr(multiplied(num1));
    var secondNumToStr = aqConvert.IntToStr(multiplied(num2));
    var thirdNumToStr = aqConvert.IntToStr(multiplied(num3));
    
    var finalNumber = firstNumToStr + secondNumToStr + thirdNumToStr;

    
    Log.Message(finalNumber);
}

function usage(){
    threeNumInt(111,231,123)
}