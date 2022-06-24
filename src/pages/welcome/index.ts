export function initWelcome(params) {
  const div = document.createElement("div");
  div.className = "page-welcome";
  div.innerHTML = `
    <header-comp class="Header"></header-comp>

    <div class="container">
    <custom-text variant="title" class="welcome">
      Te damos la bienvenida a esta página
    </custom-text>


    <custom-text variant="body" class="welcome">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?
    </custom-text>

    <custom-text variant="subtitle" class="welcome">
      Para continuar ingresá tu nombre
    </custom-text>

    <div>
     <text-field label="Nombre" class="welcome"></text-field>
    </div>
    <div>
      <custom-button class="start-button">Comenzar</custom-button>
    </div>

    </div>

    <footer-comp></footer-comp>
    `;
  const startButtonEl = div.querySelector(".start-button");
  startButtonEl?.addEventListener("click", function () {
    params.goTo("/step-1");
  });
  // div.addEventListener("click", () => {
  //   params.goTo("/b");
  // });
  return div;
}
