/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderSup, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos | Teny", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-2mxdoeuz> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-2mxdoeuz": true })} </header> <main data-astro-cid-2mxdoeuz> <section class="py-10 flex justify-center" data-astro-cid-2mxdoeuz> <form class="rounded-[20px] shadow-lg m-10 flex flex-col p-10" data-astro-cid-2mxdoeuz> <h2 class="text-[30px] font-bold" data-astro-cid-2mxdoeuz>Dejanos un mensaje</h2> <p class="text-[20px]" data-astro-cid-2mxdoeuz>Si tiene alguna duda, sugerencia o cualquier pregunta háganosla saber, para poder brindar un mejor servicio, Metal Hierro estará encantado de ayudarle!</p> <div class="flex w-full justify-between pt-10 px-10" data-astro-cid-2mxdoeuz> <div class="flex flex-col w-full mr-28" data-astro-cid-2mxdoeuz> <label for="name" data-astro-cid-2mxdoeuz>Nombres <span data-astro-cid-2mxdoeuz>*</span></label> <input type="text" id="name" name="name" required data-astro-cid-2mxdoeuz> </div> <div class="flex flex-col w-full mr-28" data-astro-cid-2mxdoeuz> <label for="lastname" data-astro-cid-2mxdoeuz>Apellidos <span data-astro-cid-2mxdoeuz>*</span></label> <input type="text" id="lastname" name="lastname" required data-astro-cid-2mxdoeuz> </div> </div> <label class="px-10 pt-10" for="mail" data-astro-cid-2mxdoeuz>Correo <span data-astro-cid-2mxdoeuz>*</span></label> <input class="mx-10" type="email" id="mail" name="mail" data-astro-cid-2mxdoeuz> <label class="px-10 pt-10" for="subject" data-astro-cid-2mxdoeuz>Asunto <span data-astro-cid-2mxdoeuz>*</span></label> <input class="mx-10" type="text" id="subject" name="subject" data-astro-cid-2mxdoeuz> <label class="px-10 pt-10" for="message" data-astro-cid-2mxdoeuz>Mensaje o Comentario <span data-astro-cid-2mxdoeuz>*</span></label> <textarea class="mx-10" id="message" name="message" required data-astro-cid-2mxdoeuz></textarea> <!-- No soy un robot --> <div class="p-10" data-astro-cid-2mxdoeuz> <input type="checkbox" id="robot" name="robot" required data-astro-cid-2mxdoeuz> <label for="robot" data-astro-cid-2mxdoeuz>No soy un robot</label> </div> <input class="bg-sky-500 hover:bg-sky-700 font-bold text-[20px] ml-10" type="submit" value="Enviar" data-astro-cid-2mxdoeuz> </form> </section> </main> <footer data-astro-cid-2mxdoeuz> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2mxdoeuz": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/contacto.astro";
const $$url = "/contacto";

export { $$Contacto as default, $$file as file, $$url as url };
