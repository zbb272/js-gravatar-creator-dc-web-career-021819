class Identicon {

  constructor(userString, size=5, blankColor=false) {
    this.size = size
    this.blankColor = blankColor || 238
    this.hashArr = this._generateHashArr(userString)
    this.RGBArr = this._generateIdenticonRGB()
    this.color = this._formatRGBStyle(this.RGBArr)
    this.matrix = this._generateValueMatrix()
  }

  _generateHashArr(str) {
    return (str === '') ? new Array(15).fill(this.blankColor) : md5.array(str).slice(0, 15)
  }

  _generateIdenticonRGB() {
    // what would be really fun to ensure vibrant unique colors:
    // dominantColorCount = random choice [1, 2]
    // 15/3 === 5, so we grab the highest value out of two of the sections and a low/medium value out of the remaining section
    // use that for RGB (select which sections we derive the high values from by whichever have the highest 1 or 2 so the hashing nature remains true)
    // the sections we chose order lines up to the RGB order.
    return this.hashArr.slice(0, 3)
  }

  _formatRGBStyle([r, g, b]) {
    return `rgb(${r}, ${g}, ${b})`
  }

  _getDefaultMatrix(rows, cols) {
    // almost sure you can't use list initialization for the second fill value of blank arrays because it copies the reference for the same array to all the values which is just CRAZY don't even get me STARTED!
    return new Array(rows).fill().map(row => Array(cols).fill(1))
  }

  _generateValueMatrix() {
    const matrix = this._getDefaultMatrix(this.size, this.size)
    this.hashArr.forEach((currInt, idx) => {
      const rowIdx = Math.floor(idx / 3)
      const colIdx = idx % 3
      const value = currInt % 2 ? true : false
      matrix[rowIdx][colIdx] = value
      matrix[rowIdx][4 - colIdx] = value
    })
    return matrix
  }

}
