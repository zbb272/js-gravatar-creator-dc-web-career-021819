class Identicon {
  static renderIdenticon(value) {
    const hex = md5.array(value);
    this.setColor(hex);

    this.chunk(hex, 3)
      .map(this.mirrorRow)
      .reduce(this.flatten)
      .map(this.withIndex)
      .filter(this.removeEvens)
      .forEach(this.addFill);
  }

  static setColor([r, g, b]) {
    document.documentElement.style.setProperty(
      "--fill-color",
      `rgb(${r}, ${g}, ${b})`
    );
  }

  static chunk(arr, size) {
    if (arr.length <= size) {
      return arr.length === size ? [arr] : [];
    } else {
      return [arr.slice(0, size), ...this.chunk(arr.slice(size), size)];
    }
  }

  static mirrorRow([a, b, c]) {
    return [a, b, c, b, a];
  }

  static flatten(acc, curr) {
    return [...acc, ...curr];
  }

  static withIndex(value, index) {
    return { index, value };
  }

  static removeEvens(obj) {
    return obj.value % 2 === 1;
  }

  static addFill(cell) {
    document.querySelector(`span[data-index="${cell.index}"]`).className =
      "fill";
  }
}
