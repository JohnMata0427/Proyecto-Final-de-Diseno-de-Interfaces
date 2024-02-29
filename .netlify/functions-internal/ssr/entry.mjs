import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D7_IABBz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_QC35LnXE.mjs');
const _page1 = () => import('./chunks/login_CiO9FKXb.mjs');
const _page2 = () => import('./chunks/carrito_CS8qr75n.mjs');
const _page3 = () => import('./chunks/hardware_pfbziNuN.mjs');
const _page4 = () => import('./chunks/laptops_DVv8AOYH.mjs');
const _page5 = () => import('./chunks/monitores_0oVdmJv0.mjs');
const _page6 = () => import('./chunks/perifericos_CMHl_HfF.mjs');
const _page7 = () => import('./chunks/_id__BxxuRNMO.mjs');
const _page8 = () => import('./chunks/contacto_DxW_xBf9.mjs');
const _page9 = () => import('./chunks/ofertas_BLjTP_ni.mjs');
const _page10 = () => import('./chunks/index_Cf_Gz7D6.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/auth/login.astro", _page1],
    ["src/pages/carrito.astro", _page2],
    ["src/pages/categorias/hardware.astro", _page3],
    ["src/pages/categorias/laptops.astro", _page4],
    ["src/pages/categorias/monitores.astro", _page5],
    ["src/pages/categorias/perifericos.astro", _page6],
    ["src/pages/categorias/productos/[id].astro", _page7],
    ["src/pages/contacto.astro", _page8],
    ["src/pages/ofertas.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "df4b5f81-2d2d-4915-afbd-8083793276a8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
