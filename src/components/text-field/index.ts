export function initTextFieldComp() {
  customElements.define(
    "text-field",
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
          .input{
              font-size: 18px;
              border:solid 2px;
              border-radius: 4px;
               padding: 17px 13px;
               width: 100%;
            }
        `;

        div.innerHTML = `
          <label class="label">
            <custom-text variant="body">
              ${label}
            </custom-text>
          </label>
          <input type="text" class="input" />
        `;
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
