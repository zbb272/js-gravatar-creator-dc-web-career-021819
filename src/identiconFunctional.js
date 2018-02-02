const identicon = (() => {

  const addFill = cell => {
    document.querySelector(`span[data-index="${cell.index}"]`).className =
      "fill";
  };

  const removeEvens = (cell) => cell.value % 2 === 1;

  const withIndex = (value, index) => ({ index, value });

  const flatten = (acc, cur) => [...acc, ...cur];

  const mirrorRow = ([a, b, c]) => [a, b, c, b, a];

  const chunk = (arr, size) => {
    if (arr.length <= size) {
      return arr.length === size ? [arr] : [];
    } else {
      return [arr.slice(0, size), ...chunk(arr.slice(size), size)];
    }
  };

  const setColor = ([r, g, b]) => {
    document.documentElement.style.setProperty(
      "--fill-color",
      `rgb(${r}, ${g}, ${b})`
    );
  };

  return value => {
    const hex = md5.array(value);
    setColor(hex);

    chunk(hex, 3)
      .map(mirrorRow)
      .reduce(flatten)
      .map(withIndex)
      .filter(removeEvens)
      .forEach(addFill);
  };
})();
