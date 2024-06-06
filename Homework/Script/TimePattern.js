function TimePattern() {
var Today = aqDateTime.Today();

var year = aqDateTime.GetYear(Today);
var month = aqDateTime.GetMonth(Today);
var day = aqDateTime.GetDay(Today);

var dateString = String(year) + String(month) + String(day);

var multiplied = 1;

for (var i = 0; i < dateString.length; i++) {
  var digit = parseInt(dateString[i]);
  if (digit !== 0) {
    multiplied *= digit;
  }
}
Log.Message("Pattern: "+"dge-"+day+" tve-"+month+" weli-"+year)
Log.Message("Namravli: " + multiplied);
}