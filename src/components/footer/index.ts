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
            width: 100%;
            height: 233px;
            background-color: #FFA0EA;
            border: none;
            margin: 0;
            margin-top: 113px;
            padding: 0;
           }
        `;

      shadow.appendChild(footer);
      shadow.appendChild(style);
    }
  }
  customElements.define("footer-comp", FooterComponent);
}
