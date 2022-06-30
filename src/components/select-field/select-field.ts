export function initSelectFieldComp() {
  customElements.define(
    "select-field",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const label = this.getAttribute("label");
        var shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `
            *{
              box-sizing: border-box;
              }  
            .label{
                display:block;
              }
            .option{
                font-size: 18px;
                border:solid 2px;
                border-radius: 4px;
                 padding: 17px 13px;
                 width: 100%;
              }
          `;

        div.innerHTML = `
            <label for="select" class="label">
              <custom-text variant="body">
                ${label}
              </custom-text>
            </label>
            <select class="label option">
                <option class="option">Piedra</option>
                <option class="option">Papel</option>
                <option class="option">Tijera</option>
              </select>
          `;
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
