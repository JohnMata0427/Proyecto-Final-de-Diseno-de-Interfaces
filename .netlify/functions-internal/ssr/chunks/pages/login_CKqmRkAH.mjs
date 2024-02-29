/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$Layout } from './_id__ug0n81Bs.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */

function PasswordInput() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible(!isVisible);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("input", { type: isVisible ? "text" : "password", id: "password", placeholder: "Contraseña" }),
    /* @__PURE__ */ jsx("button", { onClick: handleClick, children: "Mostrar/Ocultar" })
  ] });
}

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda Tecnol\xF3gica | Tecny" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex justify-between"> <img class="h-[100vh]" src="/assets/images/banners/Banner Login.webp" alt=""> <div> <form action=""> <h2>Iniciar Sesión en la Tienda Tecnológica Tecny</h2> <label for="usuario">Ingrese su usuario:</label> <input type="text" id="usuario" placeholder="Usuario"> <label for="password">Ingrese su contraseña:</label> ${renderComponent($$result2, "PasswordInput", PasswordInput, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/PasswordInput.jsx", "client:component-export": "default" })} <div> <input type="checkbox"> <span>Recordar usuario</span> </div> <button>Log In</button> </form> </div> </main> ` })} `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/auth/login.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/auth/login.astro";
const $$url = "/auth/login";

export { $$Login as default, $$file as file, $$url as url };
