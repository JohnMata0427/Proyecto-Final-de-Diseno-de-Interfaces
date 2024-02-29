/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderSup, d as dataHardware, c as $$Productos, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                             */

function Filtrar({ setFiltro }) {
  const [value, setValue] = useState(0);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const applyFilter = () => {
    setFiltro(`Precio: ${value}`);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-[300px] border-[#dadada] border-solid border-[1px] rounded-[15px] shadow-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-black text-[20px] font-extrabold pb-3 px-5 pt-5", children: "Filtrar por Subcategorías" }),
    /* @__PURE__ */ jsx("h3", { className: "text-black font-bold text-[18px] px-5", children: "Hardware" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-4 px-5", children: [
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Procesadores" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Procesadores" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Mainboards" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Mainboards" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Memorias RAM" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Memorias RAM" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Almacenamiento" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Almacenamiento" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Tarjetas de Video" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Tarjetas de Video" })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "pb-1", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", onChange: (e) => setFiltro(e.target.checked ? "Fuentes de Poder" : "") }),
        /* @__PURE__ */ jsx("span", { className: "text-black pl-2", children: "Fuentes de Poder" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("hr", { className: "border-[#dadada] w-full" }),
    /* @__PURE__ */ jsx("h2", { className: "text-black text-[20px] font-extrabold py-3 px-5", children: "Filtrar Por Precio" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-5 pb-5", children: [
      /* @__PURE__ */ jsx("input", { className: "py-3", type: "range", min: "0", max: "5000", step: "100", value, onChange: handleOnChange }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("label", { className: "text-black text-[18px] my-3", children: [
          "Precio: $0 - $",
          value
        ] }),
        /* @__PURE__ */ jsx("button", { className: "bg-gris-oscuro text-[18px] rounded-[10px] w-20", onClick: applyFilter, children: "Filtrar" })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Hardware = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hardware;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categor\xEDa Hardware | Teny", "data-astro-cid-rddvn7x3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-rddvn7x3> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-rddvn7x3": true })} </header> <main data-astro-cid-rddvn7x3> <img class="h-full w-full" src="/assets/images/banners/Banner Hardware.png" alt="Oferta 1" data-astro-cid-rddvn7x3> <section class="flex justify-between py-10" data-astro-cid-rddvn7x3> <div class="ml-5" data-astro-cid-rddvn7x3> ${renderComponent($$result2, "Filtrar", Filtrar, { "client:visible": true, "setFiltro": "categorias", "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Filtrar.jsx", "client:component-export": "default", "data-astro-cid-rddvn7x3": true })} </div> <div class="flex flex-wrap justify-center gap-y-7 gap-x-4" data-astro-cid-rddvn7x3> ${dataHardware.map((producto, index) => renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": producto.id, "nombre": producto.nombre, "precio": producto.precio, "cantidad": 1, "src": producto.src, "className": (index + 1) % 4 === 0 ? "" : "mr-5", "data-astro-cid-rddvn7x3": true })}`)} </div> </section> </main> <footer data-astro-cid-rddvn7x3> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-rddvn7x3": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/hardware.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/hardware.astro";
const $$url = "/categorias/hardware";

const hardware = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Hardware,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Filtrar as F, hardware as h };
