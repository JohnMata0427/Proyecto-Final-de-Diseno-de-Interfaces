export { renderers } from '../renderers.mjs';

const page = () => import('./pages/hardware_SA482czr.mjs').then(n => n.h);

export { page };
