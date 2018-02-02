function paintDOMNode(id, color) {
  document.getElementById(id).style.backgroundColor = color
}

function mapMatrixToDOM(matrix, color='#eee') {
  matrix.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      if (col) {
        paintDOMNode(`${rowIdx}-${colIdx}`, color)
      }
    })
  })
}

function updateDOM(identicon) {
  mapMatrixToDOM(identicon.matrix, identicon.color)
}
