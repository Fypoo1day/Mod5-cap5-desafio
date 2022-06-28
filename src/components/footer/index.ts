export function initFooter() {
  class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const footer = document.createElement("footer");
      const style = document.createElement("style");
      footer.className = "Footer";

      footer.textContent = "Footer";

      style.innerHTML = `
          .Footer{
            font-family: "Roboto";
            font-weight: bold;
            width: 100%;
            height: 233px;
            background-color: #FFA0EA;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 113px;
           }
        `;

      shadow.appendChild(footer);
      shadow.appendChild(style);
    }
  }
  customElements.define("footer-comp", FooterComponent);
}
