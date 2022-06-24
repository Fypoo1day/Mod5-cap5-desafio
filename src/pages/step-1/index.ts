export function initStepOne(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h1>Página Step-1</h1>
    `;
  div.addEventListener("click", () => {
    params.goTo("/b");
  });
  return div;
}
