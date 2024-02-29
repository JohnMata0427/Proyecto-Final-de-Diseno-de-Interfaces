/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderSup, g as dataPerifericos, c as $$Productos, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
import { F as Filtrar } from './hardware_SA482czr.mjs';
/* empty css                                */

const $$Astro = createAstro();
const $$Perifericos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Perifericos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Categor\xEDa Perifericos | Teny", "data-astro-cid-mg5s2m7y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-mg5s2m7y> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-mg5s2m7y": true })} </header> <main data-astro-cid-mg5s2m7y> <img class="h-full w-full" src="/assets/images/banners/Banner Perifericos.png" alt="Oferta 1" data-astro-cid-mg5s2m7y> <section class="flex justify-between py-10" data-astro-cid-mg5s2m7y> <div class="ml-5" data-astro-cid-mg5s2m7y> ${renderComponent($$result2, "Filtrar", Filtrar, { "client:visible": true, "setFiltro": "categorias", "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Filtrar.jsx", "client:component-export": "default", "data-astro-cid-mg5s2m7y": true })} </div> <div class="flex flex-wrap justify-center gap-y-7 gap-x-4" data-astro-cid-mg5s2m7y> ${dataPerifericos.map((producto, index) => renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": producto.id, "nombre": producto.nombre, "precio": producto.precio, "cantidad": 1, "src": producto.src, "className": (index + 1) % 4 === 0 ? "" : "mr-5", "data-astro-cid-mg5s2m7y": true })}`)} </div> </section> </main> <footer data-astro-cid-mg5s2m7y> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-mg5s2m7y": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/perifericos.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/perifericos.astro";
const $$url = "/categorias/perifericos";

export { $$Perifericos as default, $$file as file, $$url as url };
