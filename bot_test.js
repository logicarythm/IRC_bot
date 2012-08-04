var interval = 30 * 60 * 1000; // 10分
var where = '#bot_test';

function showTime()
{
  send(where, new Date().toString() + ' になりました');
  setNextTimer();
}

function setNextTimer()
{
  var now = new Date().getTime();
  var next = (Math.floor(now / interval) +1) * interval;
  setTimeout(showTime, next - now)
}

function event::onLoad()
{
  setNextTimer();
}
