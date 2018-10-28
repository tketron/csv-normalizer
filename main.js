const parse = require('csv-parse');
const stringify = require('csv-stringify');
const normalizer = require('./normalizer');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    parse(chunk, (err, data) => {
      if (err) {
        console.error(err);
      }
      const result = normalizer(data);
      stringify(result, (err, output) => {
        if (err) {
          console.error(err);
        }
        process.stdout.write(output);
      });
    });
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
