export function initHeader() {
  class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");
      const style = document.createElement("style");
      div.className = "Header";

      div.textContent = "Header";

      style.innerHTML = `
        .Header{
          font-family: "Roboto";
          font-weight: bold;
          width: 100%;
          height: 60px;
          background-color: #FF8282;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 41px;
         }
      `;

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("header-comp", HeaderComponent);
}
