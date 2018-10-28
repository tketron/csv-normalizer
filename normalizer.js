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
  return row;
}

function constructColumnMap(columns) {
  let columnMap = {};
  for (let i = 0; i < columns.length; i++) {
    columnMap[i] = columns[i];
  }
  return columnMap;
}

module.exports = normalizer;
