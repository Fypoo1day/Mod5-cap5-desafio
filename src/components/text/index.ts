export function initTextComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "body" || "subtitle";
      var shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
        .title{
            font-size: 52px;
            font-weight: bold;
        }
        .body{
            font-size: 18px;
        }

        .subtitle{
          font-size: 22px;
          font-weight: bold;
        }
        `;

      div.className = variant;
      div.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("custom-text", TextComponent);
}
