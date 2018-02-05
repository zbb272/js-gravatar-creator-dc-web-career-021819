function handleSubmit(e) {
  e.preventDefault()
  const inputValue = e.target.querySelector("input").value
  updateDOM(inputValue)
  e.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
