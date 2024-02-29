/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { e as dataMonitores, f as dataLaptops, d as dataHardware, g as dataPerifericos, $ as $$HeaderSup, c as $$Productos, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$CategoriasCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoriasCard;
  const { title, image, href, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`h-[420px] w-[260px] flex flex-col items-center justify-between rounded-[20px] shadow-lg bg-gradient-to-b from-[#150E3C] to-[#D9D9D9] ${className}`, "class")}${addAttribute(href, "href")}> <div class="flex items-center justify-center h-full"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class=""> </div> <div class="flex items-center justify-center bg-gris-oscuro w-full h-[60px] rounded-b-[20px]"> <h2 class="font-medium text-[27px]">${title}</h2> </div> </a>`;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/CategoriasCard.astro", void 0);

function TrabajamosCon() {
  return /* @__PURE__ */ jsx("div", { className: "box-border overflow-hidden", children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-center items-center animate-scroll space-x-4 whitespace-nowrap relative", children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { className: "", src: "/assets/images/icons/samsung.png", alt: "Samsung" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { className: "", src: "/assets/images/icons/lg.png", alt: "LG" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { className: "", src: "/assets/images/icons/sony.png", alt: "Sony" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("img", { className: "", src: "/assets/images/icons/apple.png", alt: "Apple" }) })
  ] }) });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allData = [dataMonitores[dataMonitores.length - 1], dataLaptops[dataLaptops.length - 1], dataHardware[dataHardware.length - 1], dataPerifericos[dataPerifericos.length - 1]];
  const productos = allData.map((data) => {
    return {
      id: data.id,
      nombre: data.nombre,
      precio: data.precio,
      src: data.src
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda Tecnol\xF3gica | Tecny", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-j7pv25f6": true })} </header> <main data-astro-cid-j7pv25f6> <img class="h-[75vh]" src="./assets/images/banners/Banner Inicio.png" alt="Oferta 1" data-astro-cid-j7pv25f6> <section class="pt-5 pb-16" data-astro-cid-j7pv25f6> <h2 class="text-[44px] font-normal mb-5 text-center text-morado-primario mt-3" data-astro-cid-j7pv25f6>Categorías</h2> <div class="flex flex-wrap justify-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CategoriasCard", $$CategoriasCard, { "title": "Hardware", "image": "./assets/images/categories/Categoria Hardware.png", "href": "/categorias/hardware", "className": "mr-5", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoriasCard", $$CategoriasCard, { "title": "Perifericos", "image": "./assets/images/categories/Categoria Perifericos.png", "href": "/categorias/perifericos", "className": "mr-5", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoriasCard", $$CategoriasCard, { "title": "Monitores", "image": "./assets/images/categories/Categoria Monitores.png", "href": "/categorias/monitores", "className": "mr-5", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategoriasCard", $$CategoriasCard, { "title": "Laptops", "image": "./assets/images/categories/Categoria Laptops.png", "href": "/categorias/laptops", "data-astro-cid-j7pv25f6": true })} </div> </section> <section data-astro-cid-j7pv25f6> <h2 class="text-[44px] mb-5 text-center text-morado-primario font-normal" data-astro-cid-j7pv25f6>Trabajamos con</h2> <div class="bg-morado-primario" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TrabajamosCon", TrabajamosCon, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/TrabajamosCon.jsx", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </section> <section class="my-10" data-astro-cid-j7pv25f6> <h2 class="text-[44px] mb-5 text-center text-morado-primario font-normal mt-3" data-astro-cid-j7pv25f6>Productos Nuevos</h2> <div class="flex flex-wrap justify-center" data-astro-cid-j7pv25f6> ${productos.map((producto, index) => renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": producto.id, "nombre": producto.nombre, "precio": producto.precio, "cantidad": 1, "src": producto.src, "className": (index + 1) % 4 === 0 ? "" : "mr-5", "data-astro-cid-j7pv25f6": true })}`)} </div> </section> </main> <footer data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/index.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
