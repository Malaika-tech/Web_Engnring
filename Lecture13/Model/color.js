import Color from 'color';

const color = Color('#ff5733'); // Initialize with a hex color

console.log("Hex:", color.hex());
console.log("RGB:", color.rgb().string());
console.log("HSL:", color.hsl().string());
console.log("CMYK:", color.cmyk().string());
