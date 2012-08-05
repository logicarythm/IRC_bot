var interval = 30 * 60 * 1000; // 30分
var where = '#bot_test';


function dateToString()
{
  var dt = new Date();
  var dtText = new String();
  var minutesText = new String();
  if(dt.getMinutes() == 0){
    minutesText = '00';
  }else{
    minutesText = dt.getMinutes();
  }
  dtText = dt.getHours() + ':' + minutesText;
  return dtText;
}

function messageByCase()
{
  var message = new String();
  switch(dateToString()){
    case '9:00':
      message = 'おはようございます、業務開始です。今日も1日頑張りましょう！';
      break;

    case '10:00':
      message = 'チャット担当の方はオンラインにしてください。';
      break;

    case '12:30':
      message = '遅番の方はチャットに入る準備をお願いします。';
      break;

    case '13:00':
      message = 'お昼ごはんの時間です';
      break;

    case '14:00':
      message = '日次、チャットを開始してください。午後も頑張りましょう。';
      break;

    case '15:00':
      message = 'おやつの時間です。おやつの時間です。おやつの時間です。';
      break;

    case '17:00':
      message = '残業調整と日次業務の時間です。';
      break;

    case '17:30':
      message = '遅番の方はチャットに入る準備をお願いします。';
      break;

    case '18:00':
      message = '平日朝番の方、業務終了です。お疲れ様でした。まねきねこをお忘れなく！';
      break;

    case '19:00':
      message = '土日祝日勤務の方、業務終了です。お疲れ様でした。まねきねこをお忘れなく！';
      break;
    case '20:00':
      message = '日次業務の時間です。';
      break;

    case '21:00':
      message = '平日遅番の方、業務終了です。お疲れ様でした。まねきねこをお忘れなく！';
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
