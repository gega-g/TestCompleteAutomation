function EventControl1_OnStopTest(Sender)
{
    var stopTime = aqDateTime.Now();    
    Log.Message("Event completed at: " + stopTime);
}