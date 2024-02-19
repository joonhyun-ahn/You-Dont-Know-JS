const dayStart = '07:30';
const dayEnd = '17:45';

function parseTime(time) {
  const [hr, min] = time.split(':');

  return [Number(hr), Number(min)];
}

function calcEnd(start, dur) {
  const [hr, min] = parseTime(start);

  const endHr = (hr + Math.floor((min + dur) / 60)) % 24;
  const endMin = (min + dur) % 60;

  return `${endHr}:${endMin}`;
}

// e >= s : true;
function checkTime(start, end) {
  const [shr, smin] = parseTime(start);
  const [ehr, emin] = parseTime(end);

  //console.log(start, end, shr === ehr ? smin <= emin : shr < ehr);
  return shr === ehr ? smin <= emin : shr < ehr;
}

function scheduleMeeting(startTime, durationMinutes) {
  const end = calcEnd(startTime, durationMinutes);

  console.log('result =', checkTime(dayStart, startTime) && checkTime(startTime, dayEnd) && checkTime(end, dayEnd));
}

scheduleMeeting('7:00', 15);
scheduleMeeting('07:15', 30);
scheduleMeeting('07:30', 30);
scheduleMeeting('11:30', 60);
scheduleMeeting('17:00', 45);
scheduleMeeting('17:30', 30);
scheduleMeeting('18:00', 15);
scheduleMeeting('23:50', 15);
