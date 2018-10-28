function normalizer(data) {
  let result = [];
  result.push(data[0]);

  const columnMap = constructColumnMap(data[0]);
  console.log(columnMap);
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

function constructColumnMap(columns) {
  let columnMap = {};
  for (let i = 0; i < columns.length; i++) {
    columnMap[i] = columns[i];
  }

  // for (let key of columnMap) {
  //   if (typeof columnMap[key] === 'string') {
  //     columnMap[key] = getTransformFunction()
  //     //get appropriate function
  //   }
  // }

  return columnMap;
}

function normalizeTimestamp(timestamp) {
  return timestamp;
}

function normalizeAddress(address) {
  return address;
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
  return time;
}

function normalizeTotal(foo, bar) {
  return foo + bar;
}

function normalizeNotes(notes) {
  return notes;
}

module.exports = normalizer;
