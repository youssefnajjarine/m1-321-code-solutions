/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (var key of keys) {
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}
