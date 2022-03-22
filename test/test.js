const isEqual = function (actual, expected, description) {
  const result = actual === expected;
  const status = result ? '✅' : '❌';
  console.log(`${status} ${description}`);
}

exports.isEqual = isEqual;