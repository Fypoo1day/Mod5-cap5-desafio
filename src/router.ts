import { initWelcome } from "./pages/welcome";
import { initStepOne } from "./pages/step-1";
import { initThankYou } from "./pages/thankyou";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStepOne,
  },
  {
    path: /\/thankyou/,
    component: initThankYou,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    console.log("el handleRoute route recibió una nueva ruta ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
