const moment = require('moment');

function normalizer(data) {
  let result = [];
  result.push(data[0]);

  for (let i = 1; i < data.length; i++) {
    const row = normalizeRow(data[i], columnMap);
    console.log(row);
    result.push(row);
  }

  return result;
}

function normalizeRow(row, columnMap) {
  let normalizedRow = Array.from(row);
  normalizedRow[0] = normalizeTimestamp(row[0]);
  normalizedRow[1] = normalizeAddress(row[1]);
  normalizedRow[2] = normalizeZip(row[2]);
  normalizedRow[3] = normalizeName(row[3]);
  normalizedRow[4] = normalizeFooBar(row[4]);
  normalizedRow[5] = normalizeFooBar(row[5]);
  normalizedRow[6] = normalizeTotal(normalizedRow[4], normalizedRow[5]);
  normalizedRow[7] = normalizeNotes(row[7]);
  return normalizedRow;
}

function normalizeTimestamp(timestamp) {
  let normalizedTime = moment(timestamp)
    .utcOffset(-8, true) //set to Pacific time
    .utcOffset(-5, false) // convert to Eastern time
    .toISOString(true); // convert to ISO 8601 string
  return normalizedTime;
}

function normalizeAddress(address) {
  return address.normalize();
}

function normalizeZip(zip) {
  if (zip.length < 5) {
    //pad with leading zeros
    zip = '0'.repeat(5 - zip.length).concat(zip);
  }
  return zip;
}

function normalizeName(name) {
  return name.toLocaleUpperCase();
}

function normalizeFooBar(time) {
  let [hours, minutes, seconds] = time.split(':');
  let convertedSeconds = +hours * 3600 + +minutes * 60 + +seconds;
  return convertedSeconds;
}

function normalizeTotal(foo, bar) {
  return foo + bar;
}

function normalizeNotes(notes) {
  return notes.normalize();
}

module.exports = normalizer;
