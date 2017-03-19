'use strict';

const ansi = require('ansi');
const output = ansi(process.stdout);

module.exports = displayPaletteDisplayData;

function rgbToHex(r, g, b){
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function displayPaletteDisplayData(paletteData){
    output.write('\n\n');
    output.white().write(`Palette: `);
    output.white().bold().write(`${paletteData.name}\n\n`);
    output.reset();

    paletteData.colors.forEach((color) => {
        let rgb = `rgb(${color.r}, ${color.g}, ${color.b})`;
        let hex = rgbToHex(color.r, color.g, color.b);
        output.white().write(`${color.name}, ${rgb}, ${hex}\n`);
        output.hex(hex).write('████████████████████\n\n');
    });

    output.write('\n\n');

    output.reset();
}
