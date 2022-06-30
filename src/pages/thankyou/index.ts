export function initThankYou(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <header-comp class="Header"></header-comp>
  <div class="container">
    <custom-text variant="title" class="welcome">
      Gracias
    </custom-text>
    <custom-text variant="body" class="welcome">
      Toda la información que nos brindaste es muy importante
    </custom-text>
    <div style="padding: 0px 20px">
        <custom-button class="start-button"
        variant="start">de nada</custom-button>
      </div>
  </div>
  <footer-comp></footer-comp>
    `;
  const startButtonEl = div.querySelector(".start-button");
  startButtonEl?.addEventListener("click", function () {
    params.goTo("/welcome");
  });
  return div;
}
