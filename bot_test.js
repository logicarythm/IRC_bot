var interval = 30 * 60 * 1000; // 30分
var where = '#bot_test';


function dateToString()
{
  var dt = new Date();
  var dtText = new String();
  dtText = dt.getHours() + ':' + dt.getMinutes() + ' です';
  return dtText;
}

function showTime()
{
  send(where, dateToString());
  setNextTimer();
}

function setNextTimer()
{
  var now = new Date().getTime();
  var next = (Math.floor(now / interval) +1) * interval;
  setTimeout(showTime, next - now);
}

function event::onLoad()
{
  setNextTimer();
}

