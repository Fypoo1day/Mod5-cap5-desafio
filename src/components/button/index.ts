export function initButtonComp() {
  customElements.define(
    "custom-button",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const variant =
          this.getAttribute("variant") || "start-button" || "back-button";
        var shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        const style = document.createElement("style");

        button.className = variant;

        style.innerHTML = `
            .start{
                font-weight: bold;
                font-size: 18px;
                border:solid 2px;
                border-radius: 4px;
                padding: 17px 13px;
                background-color:#9CBBE9;
                width:100%;
            }

            .back{
              font-weight: bold;
              font-size: 18px;
              border:solid 2px;
              border-radius: 4px;
              padding: 17px 13px;
              background-color:#E5E5E5;
              width:100%;
          }
          `;

        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
      }
    }
  );
}
