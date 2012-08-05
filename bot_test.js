var interval = 30 * 60 * 1000; // 30分
var where = '#bot_test';


function dateToString()
{
  var dt = new Date();
  var dtText = new String();
  dtText = dt.getHours() + ':' + dt.getMinutes();
  return dtText;
}

function messageByCase()
{
  var message = new String();
  switch(dateToString()){
    case '09:00':
      message = '業務開始';
      break;

    case '13:00':
      message = 'お昼ごはんの時間です';
      break;

    case '12:30':
      message = 'あと30分';
      break;

    default:
      message = '';
      break;
  }
  return message;
}

function showTime()
{
  send(where, '-----' + dateToString() + ' です-----' + messageByCase());
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
