import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initTextFieldComp } from "./components/text-field";
import { initButtonComp } from "./components/button/index";
import { initHeader } from "./components/header/index";
import { initFooter } from "./components/footer/index";

(function () {
  initTextComp();
  initTextFieldComp();
  initButtonComp();
  initHeader();
  initFooter();
  const root = document.querySelector(".root");
  initRouter(root as Element);
})();
