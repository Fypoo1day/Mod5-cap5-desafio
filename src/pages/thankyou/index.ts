export function initThankYou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Página Thank You</h1>
    `;
  div.addEventListener("click", () => {
    params.goTo("/b");
  });
  return div;
}
