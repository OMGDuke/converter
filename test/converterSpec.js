var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts red to hex", function() {
      var redHex = converter.rgbToHex(255,0,0);
      expect(redHex).to.equal("ff0000");
    });
    it("converts green to hex", function() {
      var greenHex = converter.rgbToHex(0,255,0);
      expect(greenHex).to.equal("00ff00");
    });
    it("converts blue to hex", function() {
      var blueHex = converter.rgbToHex(0,0,255);
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts red to rgb", function() {
      var redRgb = converter.hexToRgb("ff0000");
      expect(redRgb).to.deep.equal([255,0,0]);
    });
    it("converts green to rgb", function() {
      var greenRgb = converter.hexToRgb("00ff00");
      expect(greenRgb).to.deep.equal([0,255,0]);
    });
    it("converts blue to rgb", function() {
      var blueRgb = converter.hexToRgb("0000ff");
      expect(blueRgb).to.deep.equal([0,0,255]);
    });
  });
});
