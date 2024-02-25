// convertTime.js
const moment = require('moment-timezone');

function convertTime(currentTime, currentZone, targetZone) {
  return moment.tz(currentTime, currentZone).tz(targetZone).format();
}

// Example usage:
const currentTime = new Date(); // Use any input time here
const currentZone = 'UTC'; // Replace with the actual current time zone
const targetZone = 'America/New_York'; // Replace with the desired target time zone

console.log(convertTime(currentTime, currentZone, targetZone));
