function handleSubmit(e) {
  e.preventDefault()

  const inputValue = e.target.querySelector("input").value
  const identicon = new Identicon(inputValue)

  mapMatrixToDOM(identicon.blankMatrix)
  updateDOM(identicon)

  e.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
