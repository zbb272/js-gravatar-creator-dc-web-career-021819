function paintDOMNode(id, color) {
  document.getElementById(id).style.backgroundColor = color
}

function mapMatrixToDOM(matrix, squareColor, blankColor='eee') {
  matrix.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      const color = col ? squareColor : blankColor
      paintDOMNode(`${rowIdx}-${colIdx}`, color)
    })
  })
}

function updateDOM(inputValue) {
  const identicon = new Identicon(inputValue)
  mapMatrixToDOM(identicon.matrix, identicon.color)
}
