export function initStepOne(params) {
  const div = document.createElement("div");
  div.innerHTML = `
    <header-comp class="Header"></header-comp>
    <div class="container">
      <custom-text variant="title" class="welcome">
        Necesitamos algunos datos más
      </custom-text>
      <div class="welcome">
        <text-field label="Email" ></text-field>
      </div>
      <div class="welcome">
        <text-field label="Comida favorita" ></text-field>
      </div>
      <div class="welcome">
        <select-field label="Alguna de estas tres opciones" ></text-field>
      </div>
      <div style="padding: 0px 20px">
        <custom-button variant="start"
        class="start-button">Continuar</custom-button>
      </div>
      <div style="padding: 20px 20px;">
        <custom-button variant="back">Volver</custom-button>
      </div>
    </div>
    <footer-comp></footer-comp>
    `;
  const startButtonEl = div.querySelector(".start-button");
  startButtonEl?.addEventListener("click", function () {
    params.goTo("/thankyou");
  });
  return div;
}
