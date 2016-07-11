exports.rgbToHex = function(red, green, blue) {
  var redHex = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex = blue.toString(16);

  return pad(redHex) + pad(greenHex) + pad(blueHex);
};

function pad(hex) {
  return (hex.length === 1 ? "0" + hex : hex);
}

exports.hexToRgb = function(hex) {
  var redRgb = parseInt(hex.substring(0,2), 16);
  var greenRgb = parseInt(hex.substring(2,4), 16);
  var blueRgb = parseInt(hex.substring(4,6), 16);

  return [redRgb, greenRgb, blueRgb];
};
