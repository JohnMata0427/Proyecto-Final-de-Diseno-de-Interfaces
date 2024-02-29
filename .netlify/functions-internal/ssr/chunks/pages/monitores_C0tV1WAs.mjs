/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderSup, e as dataMonitores, c as $$Productos, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
import { F as Filtrar } from './hardware_SA482czr.mjs';
/* empty css                              */

const $$Astro = createAstro();
const $$Monitores = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monitores;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categor\xEDa Monitores | Teny", "data-astro-cid-3n2xxyuo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-3n2xxyuo> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-3n2xxyuo": true })} </header> <main data-astro-cid-3n2xxyuo> <img class="h-full w-full" src="/assets/images/banners/Banner Monitores.png" alt="Oferta 1" data-astro-cid-3n2xxyuo> <section class="flex justify-between py-10" data-astro-cid-3n2xxyuo> <div class="ml-5" data-astro-cid-3n2xxyuo> ${renderComponent($$result2, "Filtrar", Filtrar, { "client:visible": true, "setFiltro": "categorias", "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Filtrar.jsx", "client:component-export": "default", "data-astro-cid-3n2xxyuo": true })} </div> <div class="flex flex-wrap justify-center gap-y-7 gap-x-4" data-astro-cid-3n2xxyuo> ${dataMonitores.map((producto, index) => renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": producto.id, "nombre": producto.nombre, "precio": producto.precio, "cantidad": 1, "src": producto.src, "className": (index + 1) % 4 === 0 ? "" : "mr-5", "data-astro-cid-3n2xxyuo": true })}`)} </div> </section> </main> <footer data-astro-cid-3n2xxyuo> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-3n2xxyuo": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/monitores.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/monitores.astro";
const $$url = "/categorias/monitores";

export { $$Monitores as default, $$file as file, $$url as url };
