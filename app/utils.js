exports.capitalize = function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

exports.buildJSONPart = function buildJSONPart (part) {
  return JSON.stringify(part, null, 2).replace(/\n/g, '\n  ')
}

exports.isChecked = function isChecked (choices, value) {
  return choices.includes(value)
}
