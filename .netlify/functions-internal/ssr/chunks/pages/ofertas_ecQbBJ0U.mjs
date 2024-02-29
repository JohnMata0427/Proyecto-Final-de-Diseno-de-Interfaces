/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderSup, c as $$Productos, a as $$Footer, b as $$Layout } from './_id__ug0n81Bs.mjs';
import { F as Filtrar } from './hardware_SA482czr.mjs';
/* empty css                            */

const dataOfertas = [
	{
		id: 'LAP0114',
        nombre: 'Portátil MSI GF65 Thin 10UE-047XES',
        precio: 999.99,
        descripcion: 'El portátil MSI GF65 Thin 10UE-047XES es un portátil gaming de alto rendimiento con un diseño elegante y ligero. Cuenta con un procesador Intel Core i7 de 10ª generación, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce RTX 3060. El portátil cuenta con una pantalla Full HD de 15.6 pulgadas, un disco duro SSD de 512 GB y un teclado SteelSeries con retroiluminación RGB.',
        src: '/assets/images/products/LAP0114.jpg',
        categoria: 'laptops',
		subcategoria: 'msi'
	},
	{
		id: 'LAP0228',
        nombre: 'Portátil HP Pavilion 15-eg0002ns',
        precio: 799.99,
        descripcion: 'El portátil HP Pavilion 15-eg0002ns es un portátil ligero y versátil con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador Intel Core i5 de 11ª generación, 8 GB de memoria RAM DDR4 y un disco duro SSD de 512 GB. El portátil HP Pavilion 15-eg0002ns es ideal para el trabajo, el entretenimiento y las tareas diarias.',
        src: '/assets/images/products/LAP0228.jpg',
        categoria: 'laptops',
        subcategoria: 'hp'
	},
    {
        id: 'LAP0332',
        nombre: 'Portátil Lenovo Legion 5 15ACH6H',
        precio: 899.99,
        descripcion: 'El portátil Lenovo Legion 5 15ACH6H es un portátil gaming de alto rendimiento con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 7 5800H, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce RTX 3060. El portátil cuenta con un disco duro SSD de 512 GB, un teclado retroiluminado y un sistema de refrigeración avanzado.',
        src: '/assets/images/products/LAP0332.jpg',
        categoria: 'laptops',
        subcategoria: 'lenovo'
    },
    {
        id: 'LAP0446',
        nombre: 'Portátil ASUS TUF Gaming A15 FA506QM-HN008',
        precio: 1199.99,
        descripcion: 'El portátil ASUS TUF Gaming A15 FA506QM-HN008 es un portátil gaming de alto rendimiento con un diseño resistente y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 7 5800H, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce RTX 3060. El portátil cuenta con un disco duro SSD de 1 TB, un teclado retroiluminado y una batería de larga duración.',
        src: '/assets/images/products/LAP0446.jpg',
        categoria: 'laptops',
        subcategoria: 'asus'
    },
    {
        id: 'LAP0550',
        nombre: 'Portátil Acer Nitro 5 AN515-45-R8X2',
        precio: 999.99,
        descripcion: 'El portátil Acer Nitro 5 AN515-45-R8X2 es un portátil gaming de alto rendimiento con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 7 5800H, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce RTX 3060. El portátil cuenta con un disco duro SSD de 1 TB, un teclado retroiluminado y un sistema de refrigeración avanzado.',
        src: '/assets/images/products/LAP0550.webp',
        categoria: 'laptops',
        subcategoria: 'acer'
    },
    {
        id: 'LAP0664',
        nombre: 'Portátil MSI GF63 Thin 10SCSR-876XES',
        precio: 899.99,
        descripcion: 'El portátil MSI GF63 Thin 10SCSR-876XES es un portátil ligero y versátil con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador Intel Core i7 de 10ª generación, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce GTX 1650 Ti. El portátil cuenta con un disco duro SSD de 512 GB, un teclado retroiluminado y una batería de larga duración.',
        src: '/assets/images/products/LAP0664.jpg',
        categoria: 'laptops',
        subcategoria: 'msi'
    },
    {
        id: 'LAP0778',
        nombre: 'Portátil HP Pavilion Gaming 15-ec2004ns',
        precio: 799.99,
        descripcion: 'El portátil HP Pavilion Gaming 15-ec2004ns es un portátil gaming de alto rendimiento con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 5 4600H, 8 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce GTX 1650. El portátil cuenta con un disco duro SSD de 512 GB, un teclado retroiluminado y un sistema de refrigeración avanzado.',
        src: '/assets/images/products/LAP0778.jpg',
        categoria: 'laptops',
        subcategoria: 'hp'
    },
    {
        id: 'LAP0882',
        nombre: 'Portátil ASUS ROG Strix G15 G513QM-HN218',
        precio: 1299.99,
        descripcion: 'El portátil ASUS ROG Strix G15 G513QM-HN218 es un portátil gaming de alto rendimiento con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 7 5800H, 16 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce RTX 3060. El portátil cuenta con un disco duro SSD de 1 TB, un teclado retroiluminado y un sistema de refrigeración avanzado.',
        src: '/assets/images/products/LAP0882.png',
        categoria: 'laptops',
        subcategoria: 'asus'
    }
];

const $$Astro = createAstro();
const $$Ofertas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ofertas;
  return renderTemplate`<!-- Astro o HTML -->${renderComponent($$result, "Layout", $$Layout, { "title": "Ofertas | Teny", "data-astro-cid-qeumhsh7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-qeumhsh7> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, { "data-astro-cid-qeumhsh7": true })} </header> <main data-astro-cid-qeumhsh7> <img class="h-full w-full" src="./assets/images/banners/Banner Ofertas.png" alt="Oferta 1" data-astro-cid-qeumhsh7> <section class="flex justify-between py-10" data-astro-cid-qeumhsh7> <div class="ml-5" data-astro-cid-qeumhsh7> ${renderComponent($$result2, "Filtrar", Filtrar, { "client:visible": true, "setFiltro": "categorias", "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Filtrar.jsx", "client:component-export": "default", "data-astro-cid-qeumhsh7": true })} </div> <div class="flex flex-wrap justify-center gap-y-7 gap-x-4" data-astro-cid-qeumhsh7> ${dataOfertas.map((producto, index) => renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": producto.id, "nombre": producto.nombre, "precio": producto.precio, "cantidad": 1, "src": producto.src, "className": (index + 1) % 4 === 0 ? "" : "mr-5", "data-astro-cid-qeumhsh7": true })}`)} </div> </section> </main> <footer data-astro-cid-qeumhsh7> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-qeumhsh7": true })} </footer> ` })}  `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/ofertas.astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/ofertas.astro";
const $$url = "/ofertas";

export { $$Ofertas as default, $$file as file, $$url as url };
