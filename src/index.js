document.addEventListener("DOMContentLoaded", event => {
  const form = document.getElementById("identicon-form");
  form.addEventListener("submit", ev => {
    ev.preventDefault();

    document.querySelectorAll(".fill").forEach(span => (span.className = ""));

    const input = ev.target.querySelector("input");
    const value = input.value;
    input.value = "";
    const setColor = "blue";
    identicon(value);
    // Identicon.renderIdenticon(value);
  });
});
