const parse = require('csv-parse');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    parse(chunk, (err, data) => {
      if (err) {
        console.error(err);
      }
      process.stdout.write(`${data}`);
      // console.log(data);
    });
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
