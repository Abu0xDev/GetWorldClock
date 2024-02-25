const moment = require('moment-timezone');

function convertTime(currentTime, currentZone, targetZone) {
  return moment.tz(currentTime, currentZone).tz(targetZone).format();
}

// Example usage:
// console.log(convertTime(new Date(), 'UTC', 'America/New_York'));
