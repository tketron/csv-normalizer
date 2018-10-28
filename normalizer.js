function normalizer(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    if (i > 0) {
      row = normalizeRow(row);
    }
    console.log(row);
    result.push(row);
  }
  // convert result back to csv
  return result;
}

function normalizeRow(row) {
  return row;
}

module.exports = normalizer;
