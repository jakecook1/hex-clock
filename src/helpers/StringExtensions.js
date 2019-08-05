export const hexToLuma = (colour) => {
    const hex = colour.replace(/#/, '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    let luma = [0.299 * r, 0.587 * g, 0.114 * b].reduce((a, b) => a + b) / 255;
    return luma > 0.5 ? 'black' : 'white';
};