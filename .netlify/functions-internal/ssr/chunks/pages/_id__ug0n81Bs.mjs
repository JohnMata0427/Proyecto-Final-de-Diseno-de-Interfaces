/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_CC8H2oU-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                             */
/* empty css                         */

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/layouts/Layout.astro", void 0);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "bg-morado-primario py-2 text-[14px]", children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "flex justify-center", children: [
    /* @__PURE__ */ jsx("li", { className: "mr-24 flex items-center", children: /* @__PURE__ */ jsxs("a", { className: "flex items-center", href: "/", children: [
      /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M16.25 6.37232V0.714286H13.125V3.32366L10 0L0 10.7143H2.5V20H8.125V12.8571H11.875V20H17.5V10.7143H20L16.25 6.37232Z", fill: "white" }) }),
      /* @__PURE__ */ jsx("span", { className: "mr-2 ml-2", children: "Inicio" }),
      /* @__PURE__ */ jsx("svg", { width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 1L6 6.29754L11 1", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "mr-24 flex items-center", children: /* @__PURE__ */ jsxs("a", { className: "flex items-center", href: "/ofertas", children: [
      /* @__PURE__ */ jsx("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M20.7461 7.23683L18.8153 5.30596C18.6596 5.15228 18.4519 5.06254 18.2332 5.05444C18.0145 5.04634 17.8008 5.12047 17.634 5.26221C17.3767 5.4813 17.0464 5.5957 16.7086 5.58273C16.3709 5.56977 16.0503 5.43038 15.8105 5.1922C15.5724 4.95238 15.4331 4.6319 15.4202 4.29423C15.4072 3.95656 15.5215 3.62634 15.7405 3.36897C15.8822 3.20225 15.9563 2.98847 15.9482 2.76979C15.9401 2.55111 15.8504 2.3434 15.6967 2.18761L13.7642 0.254562C13.6009 0.0915517 13.3796 0 13.1488 0C12.9181 0 12.6968 0.0915517 12.5335 0.254562L9.45554 3.33222C9.26551 3.52294 9.1222 3.75506 9.03683 4.01041C9.02021 4.0595 8.9925 4.1041 8.95585 4.14075C8.9192 4.1774 8.8746 4.20511 8.82551 4.22174C8.57008 4.3071 8.33794 4.45059 8.14736 4.6409L0.254548 12.5341C0.091547 12.6974 0 12.9188 0 13.1495C0 13.3803 0.091547 13.6016 0.254548 13.7649L2.1875 15.6958C2.34327 15.8495 2.55097 15.9392 2.76964 15.9473C2.98831 15.9554 3.20208 15.8813 3.3688 15.7395C3.62557 15.5187 3.95632 15.403 4.29476 15.4157C4.63321 15.4284 4.95435 15.5686 5.19384 15.8081C5.43333 16.0476 5.57347 16.3687 5.58618 16.7072C5.59888 17.0457 5.48322 17.3764 5.26237 17.6332C5.12064 17.7999 5.04652 18.0137 5.05461 18.2324C5.06271 18.4511 5.15245 18.6588 5.30612 18.8146L7.23689 20.7454C7.4002 20.9084 7.62151 21 7.85225 21C8.08299 21 8.30431 20.9084 8.46762 20.7454L16.3604 12.8522C16.5506 12.6617 16.6941 12.4297 16.7796 12.1745C16.7961 12.1252 16.8239 12.0805 16.8606 12.0437C16.8973 12.007 16.9421 11.9792 16.9913 11.9627C17.2465 11.8773 17.4785 11.734 17.669 11.544L20.7465 8.46588C20.909 8.30257 21.0001 8.08159 21 7.85126C20.9999 7.62094 20.9086 7.40002 20.7461 7.23683ZM10.7545 5.93952C10.6895 6.00454 10.6123 6.05612 10.5274 6.09132C10.4425 6.12651 10.3514 6.14462 10.2595 6.14462C10.1675 6.14462 10.0765 6.12651 9.99155 6.09132C9.90661 6.05612 9.82943 6.00454 9.76442 5.93952L9.26084 5.43591C9.13276 5.30396 9.06173 5.12691 9.06312 4.94302C9.0645 4.75913 9.13818 4.58317 9.26824 4.45316C9.39829 4.32315 9.57428 4.24955 9.75816 4.24824C9.94205 4.24694 10.1191 4.31805 10.2509 4.4462L10.7545 4.94937C10.8195 5.01438 10.8711 5.09156 10.9063 5.1765C10.9415 5.26145 10.9596 5.3525 10.9596 5.44444C10.9596 5.53639 10.9415 5.62744 10.9063 5.71238C10.8711 5.79733 10.8195 5.87451 10.7545 5.93952ZM12.6796 7.8647C12.5483 7.99588 12.3703 8.06958 12.1848 8.06958C11.9992 8.06958 11.8212 7.99588 11.6899 7.8647L11.2087 7.3834C11.1437 7.31839 11.0921 7.2412 11.0569 7.15626C11.0217 7.07131 11.0036 6.98027 11.0036 6.88833C11.0036 6.79638 11.0217 6.70534 11.0569 6.62039C11.0921 6.53545 11.1437 6.45826 11.2087 6.39325C11.34 6.26195 11.518 6.18818 11.7037 6.18818C11.7957 6.18818 11.8867 6.20629 11.9716 6.24148C12.0566 6.27666 12.1338 6.32823 12.1988 6.39325L12.68 6.87454C12.7453 6.93955 12.7971 7.01679 12.8324 7.10184C12.8677 7.18689 12.886 7.27808 12.886 7.37018C12.886 7.46229 12.8679 7.5535 12.8326 7.63858C12.7974 7.72366 12.7457 7.80095 12.6805 7.86601L12.6796 7.8647ZM14.6047 9.78987C14.5397 9.8549 14.4625 9.90648 14.3776 9.94167C14.2926 9.97686 14.2016 9.99497 14.1096 9.99497C14.0177 9.99497 13.9266 9.97686 13.8417 9.94167C13.7568 9.90648 13.6796 9.8549 13.6146 9.78987L13.1333 9.30858C13.0052 9.17663 12.9342 8.99958 12.9356 8.81569C12.937 8.6318 13.0106 8.45583 13.1407 8.32583C13.2708 8.19582 13.4467 8.12221 13.6306 8.12091C13.8145 8.11961 13.9915 8.19071 14.1234 8.31886L14.6047 8.80016C14.6701 8.86505 14.7221 8.94223 14.7576 9.02726C14.7931 9.11229 14.8115 9.2035 14.8117 9.29565C14.8119 9.38781 14.7939 9.4791 14.7588 9.56428C14.7236 9.64947 14.672 9.72688 14.6069 9.79206L14.6047 9.78987ZM16.5486 11.7387C16.4836 11.8037 16.4064 11.8553 16.3214 11.8905C16.2365 11.9257 16.1455 11.9438 16.0535 11.9438C15.9616 11.9438 15.8705 11.9257 15.7856 11.8905C15.7006 11.8553 15.6235 11.8037 15.5585 11.7387L15.0579 11.2355C14.9916 11.1707 14.9387 11.0933 14.9025 11.0079C14.8663 10.9225 14.8474 10.8307 14.847 10.7379C14.8465 10.6452 14.8645 10.5532 14.8999 10.4674C14.9353 10.3817 14.9874 10.3038 15.0532 10.2384C15.1189 10.1729 15.1971 10.1212 15.283 10.0862C15.3689 10.0512 15.4609 10.0337 15.5537 10.0346C15.6465 10.0355 15.7382 10.0548 15.8234 10.0914C15.9086 10.1281 15.9857 10.1813 16.0502 10.248L16.5512 10.7507C16.6162 10.8157 16.6677 10.893 16.7029 10.9779C16.738 11.0629 16.7561 11.1539 16.7561 11.2459C16.756 11.3378 16.7379 11.4289 16.7026 11.5138C16.6674 11.5987 16.6158 11.6759 16.5508 11.7409L16.5486 11.7387Z", fill: "#E6E6E6" }) }),
      /* @__PURE__ */ jsx("span", { className: "mr-2 ml-2", children: "Ofertas" }),
      /* @__PURE__ */ jsx("svg", { width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 1L6 6.29754L11 1", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "mr-24 flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block text-left", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { className: "flex items-center", type: "button", onClick: () => setIsOpen(!isOpen), children: [
        /* @__PURE__ */ jsx("svg", { width: "21", height: "19", viewBox: "0 0 21 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M16.1538 1.54511H4.84615C4.63194 1.54511 4.4265 1.46372 4.27503 1.31884C4.12356 1.17395 4.03846 0.977452 4.03846 0.772557C4.03846 0.567662 4.12356 0.371159 4.27503 0.226277C4.4265 0.0813943 4.63194 0 4.84615 0H16.1538C16.3681 0 16.5735 0.0813943 16.725 0.226277C16.8764 0.371159 16.9615 0.567662 16.9615 0.772557C16.9615 0.977452 16.8764 1.17395 16.725 1.31884C16.5735 1.46372 16.3681 1.54511 16.1538 1.54511ZM17.7692 3.86279H3.23077C3.01656 3.86279 2.81112 3.78139 2.65964 3.63651C2.50817 3.49163 2.42308 3.29512 2.42308 3.09023C2.42308 2.88533 2.50817 2.68883 2.65964 2.54395C2.81112 2.39907 3.01656 2.31767 3.23077 2.31767H17.7692C17.9834 2.31767 18.1889 2.39907 18.3404 2.54395C18.4918 2.68883 18.5769 2.88533 18.5769 3.09023C18.5769 3.29512 18.4918 3.49163 18.3404 3.63651C18.1889 3.78139 17.9834 3.86279 17.7692 3.86279ZM18.7349 18.5414H2.26507C1.66454 18.5407 1.0888 18.3123 0.664162 17.9061C0.239523 17.4999 0.000668072 16.9492 0 16.3748V6.80188C0.000668072 6.22748 0.239523 5.67678 0.664162 5.27061C1.0888 4.86445 1.66454 4.63598 2.26507 4.63534H18.7349C19.3355 4.63598 19.9112 4.86445 20.3358 5.27061C20.7605 5.67678 20.9993 6.22748 21 6.80188V16.3748C20.9993 16.9492 20.7605 17.4999 20.3358 17.9061C19.9112 18.3123 19.3355 18.5407 18.7349 18.5414Z", fill: "#E6E6E6" }) }),
        /* @__PURE__ */ jsx("span", { className: "mr-2 ml-2", children: "Categorias" }),
        /* @__PURE__ */ jsx("svg", { width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 1L6 6.29754L11 1", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
      ] }) }),
      isOpen && /* @__PURE__ */ jsx("div", { className: "absolute left-4 w-40 shadow-lg bg-black rounded-b-[15px] mt-[8px]", children: /* @__PURE__ */ jsxs("div", { role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: [
        /* @__PURE__ */ jsxs("a", { href: "/categorias/hardware", className: "flex items-center justify-between px-4 py-2 text-sm", role: "menuitem", children: [
          /* @__PURE__ */ jsxs("svg", { width: "22", height: "18", viewBox: "0 0 22 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M21.357 2.74185L17.8479 6.23977L15.7457 4.14508L19.2548 0.648462C17.2979 -0.303471 14.5531 -0.307365 12.9282 1.31265C11.3998 2.83574 11.209 5.23331 11.9528 7.11944L4.15286 14.8569C4.10445 14.9052 4.06604 14.9625 4.03983 15.0256C4.01363 15.0887 4.00013 15.1564 4.00013 15.2247C4.00013 15.293 4.01363 15.3607 4.03983 15.4238C4.06604 15.4869 4.10445 15.5443 4.15286 15.5925L6.41475 17.8473C6.46299 17.8957 6.52032 17.9341 6.58344 17.9603C6.64656 17.9865 6.71423 18 6.78257 18C6.85092 18 6.91859 17.9865 6.98171 17.9603C7.04483 17.9341 7.10215 17.8957 7.15039 17.8473L14.9396 10.0371C16.8072 10.7385 19.1803 10.5408 20.6836 9.04191C22.3064 7.42146 22.3029 4.70023 21.357 2.74185Z", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M14.6841 11.2776L11.7978 14.3933L14.8328 17.8517C14.873 17.8977 14.9214 17.9346 14.9751 17.9601C15.0288 17.9855 15.0867 17.9991 15.1454 18C15.2041 18.0008 15.2624 17.9889 15.3167 17.965C15.371 17.9411 15.4203 17.9057 15.4616 17.8608L17.8726 15.2445C17.9138 15.1995 17.9463 15.1461 17.9682 15.0874C17.99 15.0288 18.0008 14.966 17.9999 14.9028C17.9991 14.8396 17.9865 14.7772 17.9629 14.7193C17.9394 14.6614 17.9054 14.6091 17.8629 14.5655L14.6841 11.2776ZM4.78119 7.09646C4.78119 6.88571 4.62046 6.69271 4.48183 6.54342L4.47179 6.53303L4.40991 6.46942C4.40606 6.46472 4.40315 6.45923 4.40136 6.45327C4.39956 6.44732 4.39891 6.44103 4.39946 6.4348C4.51569 6.36432 4.64925 6.3341 4.78199 6.34825C4.83302 6.35388 5.01947 6.3872 5.28025 6.56073C5.41607 6.65117 6.5914 7.86889 7.04546 8.32197C6.96583 8.41164 6.92185 8.53125 6.9229 8.65532C6.92395 8.7794 6.96994 8.89813 7.05109 8.98622L7.34964 9.32635L9.98801 6.5062L9.65651 6.16694C9.57502 6.0792 9.46464 6.0297 9.34941 6.02921C9.23418 6.02872 9.12344 6.07729 9.04132 6.16434C8.11712 5.09635 7.87603 4.63029 7.79567 4.32737C7.61806 3.65793 7.96202 3.11571 8.35822 2.76952C8.59288 2.56959 9.07668 2.41987 9.5235 2.38006C9.67942 2.37016 9.83588 2.37887 9.99002 2.40602C10.1295 2.42766 10.2432 2.45535 10.287 2.4666C10.4386 2.51062 10.5865 2.56853 10.729 2.6397L11.2112 1.8175C11.0623 1.53883 10.8814 1.28148 10.6727 1.05155C10.6054 0.975639 10.5358 0.902037 10.4642 0.830858C10.1516 0.521451 9.33907 3.07448e-06 8.27062 3.07448e-06C7.65356 -0.000728051 7.04236 0.128946 6.47166 0.381677C4.96723 1.0455 3.98518 1.95035 3.53393 2.43069L3.53112 2.43372C3.22789 2.76188 2.94734 3.11348 2.69171 3.4857C2.47674 3.81155 2.50004 4.17115 2.51571 4.40916C2.51571 4.42301 2.51571 4.43815 2.51853 4.45243C2.39252 4.35415 2.24095 4.30115 2.08536 4.30097C1.98898 4.30026 1.89345 4.3203 1.80436 4.3599C1.71528 4.39951 1.63444 4.4579 1.56661 4.53162L0.0798619 6.12799C0.0287257 6.18309 0 6.2578 0 6.3357C0 6.4136 0.0287257 6.48832 0.0798619 6.54342L2.61135 9.26014C2.66198 9.31463 2.73063 9.34524 2.80221 9.34524C2.87379 9.34524 2.94244 9.31463 2.99308 9.26014L4.48223 7.65901C4.62046 7.51015 4.78119 7.30677 4.78119 7.09646Z", fill: "white" })
          ] }),
          /* @__PURE__ */ jsx("span", { children: "Hardware" }),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 10.9952L6.44923 6.16101L1.30843 0.999996", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: "border-white" }),
        /* @__PURE__ */ jsxs("a", { href: "/categorias/perifericos", className: "flex items-center justify-between px-4 py-2 text-sm", role: "menuitem", children: [
          /* @__PURE__ */ jsx("svg", { width: "26", height: "20", viewBox: "0 0 26 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M7.85714 19L1 10L7.85714 1M18.1429 19L25 10L18.1429 1M9.57143 12.5795L13 17.7143L16.4286 12.5795M13 2.28571V16.431", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) }),
          /* @__PURE__ */ jsx("span", { children: "Perifericos" }),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 10.9952L6.44923 6.16101L1.30843 0.999996", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: "border-white" }),
        /* @__PURE__ */ jsxs("a", { href: "/categorias/monitores", className: "flex items-center justify-between px-4 py-2 text-sm", role: "menuitem", children: [
          /* @__PURE__ */ jsx("svg", { width: "22", height: "20", viewBox: "0 0 22 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M0 14.6154C0.000606646 15.2272 0.232587 15.8138 0.645035 16.2465C1.05748 16.6791 1.61671 16.9224 2.2 16.9231H8.33617L8.15283 18.4615H5.86667C5.67217 18.4615 5.48565 18.5426 5.34812 18.6868C5.2106 18.8311 5.13333 19.0268 5.13333 19.2308C5.13333 19.4348 5.2106 19.6304 5.34812 19.7747C5.48565 19.919 5.67217 20 5.86667 20H16.1333C16.3278 20 16.5144 19.919 16.6519 19.7747C16.7894 19.6304 16.8667 19.4348 16.8667 19.2308C16.8667 19.0268 16.7894 18.8311 16.6519 18.6868C16.5144 18.5426 16.3278 18.4615 16.1333 18.4615H13.8472L13.6638 16.9231H19.8C20.3833 16.9224 20.9425 16.6791 21.355 16.2465C21.7674 15.8138 21.9994 15.2272 22 14.6154V12.3077H0V14.6154ZM11 13.8462C11.145 13.8462 11.2868 13.8913 11.4074 13.9758C11.528 14.0603 11.622 14.1805 11.6775 14.321C11.733 14.4616 11.7475 14.6162 11.7192 14.7655C11.6909 14.9147 11.6211 15.0517 11.5185 15.1593C11.416 15.2669 11.2853 15.3402 11.1431 15.3698C11.0008 15.3995 10.8534 15.3843 10.7194 15.3261C10.5854 15.2678 10.4708 15.1692 10.3903 15.0427C10.3097 14.9162 10.2667 14.7675 10.2667 14.6154C10.2667 14.4114 10.3439 14.2157 10.4815 14.0715C10.619 13.9272 10.8055 13.8462 11 13.8462ZM22 2.30769C21.9994 1.69585 21.7674 1.10925 21.355 0.67661C20.9425 0.243972 20.3833 0.000636342 19.8 0H2.2C1.61671 0.000636342 1.05748 0.243972 0.645035 0.67661C0.232587 1.10925 0.000606646 1.69585 0 2.30769V11.5385H22V2.30769Z", fill: "white" }) }),
          /* @__PURE__ */ jsx("span", { children: "Monitores" }),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 10.9952L6.44923 6.16101L1.30843 0.999996", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] }),
        /* @__PURE__ */ jsx("hr", { className: "border-white" }),
        /* @__PURE__ */ jsxs("a", { href: "/categorias/laptops", className: "flex items-center justify-between px-4 py-2 text-sm", role: "menuitem", children: [
          /* @__PURE__ */ jsx("svg", { width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M23.25 18.1818H21.9216C22.2943 17.681 22.5005 17.0302 22.5 16.3557V2.73523C22.4993 2.01008 22.2613 1.31489 21.8382 0.802126C21.4152 0.289367 20.8417 0.000902117 20.2434 0H3.75656C3.15831 0.000902117 2.58478 0.289367 2.16175 0.802126C1.73873 1.31489 1.50074 2.01008 1.5 2.73523V16.3557C1.49953 17.0302 1.70566 17.681 2.07844 18.1818H0.75C0.551088 18.1818 0.360322 18.2776 0.21967 18.4481C0.0790176 18.6186 0 18.8498 0 19.0909C0 19.332 0.0790176 19.5632 0.21967 19.7337C0.360322 19.9042 0.551088 20 0.75 20H23.25C23.4489 20 23.6397 19.9042 23.7803 19.7337C23.921 19.5632 24 19.332 24 19.0909C24 18.8498 23.921 18.6186 23.7803 18.4481C23.6397 18.2776 23.4489 18.1818 23.25 18.1818Z", fill: "white" }) }),
          /* @__PURE__ */ jsx("span", { children: "Laptops" }),
          /* @__PURE__ */ jsx("svg", { width: "8", height: "12", viewBox: "0 0 8 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 10.9952L6.44923 6.16101L1.30843 0.999996", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "flex items-center", children: /* @__PURE__ */ jsxs("a", { className: "flex items-center", href: "/contacto", children: [
      /* @__PURE__ */ jsx("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M16.827 20.9998C15.9118 20.9998 14.6262 20.6689 12.7011 19.5936C10.3602 18.281 8.54949 17.0693 6.2212 14.7476C3.97637 12.5046 2.88396 11.0524 1.35505 8.27076C-0.372179 5.1301 -0.0777441 3.48383 0.251386 2.78022C0.643341 1.93928 1.2219 1.4363 1.96971 0.937076C2.39446 0.65884 2.84395 0.420328 3.31248 0.224568C3.35936 0.204411 3.40297 0.185192 3.44188 0.167848C3.67396 0.0633158 4.02559 -0.0946548 4.471 0.0740972C4.76825 0.185661 5.03361 0.413945 5.44901 0.824106C6.3009 1.66412 7.46505 3.53492 7.89451 4.45368C8.18285 5.07291 8.37367 5.48166 8.37414 5.94011C8.37414 6.47683 8.10408 6.89074 7.77636 7.33747C7.71494 7.42137 7.65399 7.50153 7.59492 7.57934C7.23813 8.0481 7.15983 8.18357 7.2114 8.42545C7.31595 8.91155 8.09564 10.3586 9.377 11.6369C10.6584 12.9152 12.064 13.6455 12.552 13.7496C12.8043 13.8035 12.9426 13.7219 13.4264 13.3525C13.4958 13.2996 13.5671 13.2447 13.6416 13.1899C14.1414 12.8182 14.5362 12.5552 15.0604 12.5552H15.0632C15.5193 12.5552 15.9099 12.753 16.5569 13.0793C17.4008 13.5049 19.3283 14.6538 20.1736 15.5065C20.5848 15.9209 20.814 16.1852 20.9261 16.482C21.0949 16.9287 20.9359 17.2788 20.8323 17.5132C20.815 17.5521 20.7957 17.5948 20.7756 17.6421C20.5782 18.1097 20.3383 18.5582 20.0587 18.9818C19.5603 19.7271 19.0554 20.3042 18.2124 20.6965C17.7795 20.9012 17.3058 21.005 16.827 20.9998Z", fill: "#E6E6E6" }) }),
      /* @__PURE__ */ jsx("span", { className: "mr-2 ml-2", children: "Contacto" }),
      /* @__PURE__ */ jsx("svg", { width: "12", height: "8", viewBox: "0 0 12 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { id: "Vector", d: "M1 1L6 6.29754L11 1", stroke: "#E6E6E6", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }) })
    ] }) })
  ] }) }) });
}

const $$Astro$4 = createAstro();
const $$HeaderSup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderSup;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gris-oscuro pt-7 flex pb-7 justify-between" data-astro-cid-hd5vcdte> <a class="w-[200px] pl-10 flex items-center" href="/" data-astro-cid-hd5vcdte> <img class="w-full h-[40px]" src="/assets/images/Logo.png" alt="Logo" data-astro-cid-hd5vcdte> </a> <div class="flex" data-astro-cid-hd5vcdte> <div class="flex items-center justify-end" data-astro-cid-hd5vcdte> <input class="w-[610px] h-10 pl-4 mr-10 rounded-[15px]" type="text" placeholder="Buscar Productos..." data-astro-cid-hd5vcdte> <button class="h-10 mr-14 absolute" data-astro-cid-hd5vcdte> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hd5vcdte> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-hd5vcdte></path> <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" data-astro-cid-hd5vcdte></path> <path d="M21 21l-6 -6" data-astro-cid-hd5vcdte></path> </svg> </button> </div> <a class="flex h-10 items-center mr-10" href="/auth/login" data-astro-cid-hd5vcdte> <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hd5vcdte> <g id="Group 1" data-astro-cid-hd5vcdte> <path id="Vector" d="M15.2098 0.00139365C6.77416 -0.112538 -0.112543 6.77383 0.00139372 15.2091C0.113889 23.299 6.70133 29.8861 14.7916 29.9986C23.2287 30.1139 30.1139 23.2276 29.9986 14.7923C29.8875 6.701 23.3001 0.113883 15.2098 0.00139365ZM24.3262 23.5989C24.2975 23.63 24.2623 23.6544 24.2231 23.6703C24.1839 23.6862 24.1417 23.6933 24.0994 23.6911C24.0572 23.6889 24.0159 23.6775 23.9786 23.6576C23.9413 23.6376 23.9088 23.6097 23.8835 23.5759C23.2385 22.732 22.4486 22.0095 21.5506 21.4422C19.7147 20.2639 17.3883 19.6149 15.0007 19.6149C12.6131 19.6149 10.2867 20.2639 8.45076 21.4422C7.55288 22.0093 6.76298 22.7315 6.11794 23.5751C6.0926 23.609 6.06011 23.6369 6.02279 23.6568C5.98547 23.6768 5.94421 23.6882 5.90196 23.6904C5.85971 23.6926 5.81749 23.6855 5.7783 23.6696C5.7391 23.6536 5.7039 23.6293 5.67517 23.5982C3.55917 21.3141 2.36054 18.3295 2.30898 15.2163C2.19144 8.19942 7.94959 2.32617 14.9697 2.30887C21.9898 2.29156 27.6924 7.99175 27.6924 15C27.6948 18.1882 26.4925 21.2596 24.3262 23.5989Z" fill="white" data-astro-cid-hd5vcdte></path> <path id="Vector_2" d="M15.164 6.14966C13.742 6.14966 12.4562 6.62015 11.5426 7.47519C10.6289 8.33023 10.1724 9.51251 10.2756 10.7814C10.4847 13.2803 12.6776 15.3176 15.164 15.3176C17.6505 15.3176 19.8391 13.2803 20.0525 10.782C20.1592 9.52525 19.7064 8.35379 18.7776 7.48283C17.8603 6.62334 16.5767 6.14966 15.164 6.14966Z" fill="white" data-astro-cid-hd5vcdte></path> </g> </svg> <span class="pl-2 text-[15px]" data-astro-cid-hd5vcdte>Mi Cuenta</span> </a> <a class="flex h-10 items-center mr-10" href="/carrito" data-astro-cid-hd5vcdte> <svg width="25" height="25" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-hd5vcdte> <g id="Group 2" data-astro-cid-hd5vcdte> <path id="Vector" d="M10.911 33.9119C12.2501 33.9119 13.3357 32.6807 13.3357 31.1619C13.3357 29.6431 12.2501 28.4119 10.911 28.4119C9.5719 28.4119 8.48633 29.6431 8.48633 31.1619C8.48633 32.6807 9.5719 33.9119 10.911 33.9119Z" fill="white" data-astro-cid-hd5vcdte></path> <path id="Vector_2" d="M27.8838 33.9119C29.2229 33.9119 30.3085 32.6807 30.3085 31.1619C30.3085 29.6431 29.2229 28.4119 27.8838 28.4119C26.5447 28.4119 25.4591 29.6431 25.4591 31.1619C25.4591 32.6807 26.5447 33.9119 27.8838 33.9119Z" fill="white" data-astro-cid-hd5vcdte></path> <path id="Vector_3" d="M10.2883 21.537H30.0904L33 5.03699H7.72036L7.07857 0.911987H0V3.66199H5.04487L8.6819 27.037H30.3086V24.287H10.7156L10.2883 21.537Z" fill="white" data-astro-cid-hd5vcdte></path> </g> </svg> <div class="mb-5 text-[12px] w-5 text-center bg-sky-500 rounded-full" data-astro-cid-hd5vcdte> <span data-astro-cid-hd5vcdte>1</span> </div> </a> </div> </div> ${renderComponent($$result, "HeaderInf", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/HeaderInf.jsx", "client:component-export": "default", "data-astro-cid-hd5vcdte": true })} `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/HeaderSup.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="bg-morado-primario flex justify-around items-center py-10"> <div> <h5 class="text-[40px]">¿Deseas recibir más información?</h5> <p class="text-[20px]">Asegúrese de que nunca se pierda nuestras noticias interesantes al unirse <br> a nuestro programa de boletines.</p> </div> <button class="bg-sky-500 w-64 h-16 rounded-[15px] text-[40px]">Suscribete</button> </div> <div class="bg-gris-oscuro flex justify-around pt-20 pb-5"> <!--footer--> <div class="flex flex-col items-center justify-start"> <div class="flex justify-around w-full h-16"> <button><img class="w-8 h-8" src="/assets/images/icons/facebook.png" alt="Facebook"></button> <button><img class="w-8 h-8" src="/assets/images/icons/instagram.png" alt="Instagram"></button> <button><img class="w-8 h-8" src="/assets/images/icons/twitter.png" alt="Twitter"></button> </div> <h4 class="underline text-[20px] mt-10">Servicio a domicilio</h4> <a href="tel:1234567890">123 456 7890</a> <h4 class="underline text-[20px] mt-5">Servicio al cliente</h4> <a href="tel:1234567890">123 456 7890</a> <h4 class="underline text-[20px] mt-5">Correo Electrónico</h4> <a href="mailto:john.mata@epn.edu.ec">john.mata@epn.edu.ec</a> </div> <div class="flex flex-col justify-start"> <h4 class="text-[25px]">Contactanos</h4> <hr> <a class="pt-2 pb-5" href="https://www.google.com/maps/?q=latitude,longitude">Av. de la Prensa N58-411</a> <h4 class="text-[25px]">App Tecny</h4> <hr> <span class="pt-2">Encuentrala en:</span> <button class="py-3"><img class="w-44 h-12" src="/assets/images/icons/Download_In_AppStore.png" alt="Download in AppStore"></button> <button class="pt-1"><img class="w-44 h-12" src="/assets/images/icons/Download_In_GooglePlay.png" alt="Download in GooglePlay"></button> </div> <div class="flex flex-col items-end justify-center"> <iframe class="w-[450px] h-[300px] rounded-[10px]" src="https://www.google.com/maps/embed?pb=..." allowfullscreen="" loading="lazy"></iframe> <p class="pt-3">Todos los derechos reservados &copy; 2024 Tecny</p> </div> </div>`;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Productos;
  const { id, nombre, precio, cantidad, src, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`w-[250px] h-auto border-[#dadada] border-solid border-[1px] rounded-[20px] shadow-lg ${className}`, "class")}> <a class="h-[225px] flex justify-center items-center"${addAttribute(`/categorias/productos/${id}`, "href")}> <img class="p-7"${addAttribute(src, "src")}${addAttribute(nombre, "alt")}> </a> <hr class="border-[#dadada]"> <div class="h-[225px]"> <div class="h-[120px] flex flex-col"> <span class="text-gray-500 mt-2 ml-4">SKU: ${id}</span> <h3 class="text-black mt-2 mx-4 font-semibold">${nombre}</h3> <span class="text-sky-500 mt-2 ml-4 font-semibold">${`$ ${precio}`}</span> </div> <div class="h-[90px] flex flex-col"> <input class="bg-gris-oscuro rounded-[10px] my-3 py-1 pl-2 ml-4 w-12" type="number" min="0" max="99" step="1"${addAttribute(cantidad, "value")}> <button class="bg-gris-oscuro flex justify-around items-center py-1 rounded-[10px] mx-4"> <svg width="25" height="25" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Group 2"> <path id="Vector" d="M10.911 33.9119C12.2501 33.9119 13.3357 32.6807 13.3357 31.1619C13.3357 29.6431 12.2501 28.4119 10.911 28.4119C9.5719 28.4119 8.48633 29.6431 8.48633 31.1619C8.48633 32.6807 9.5719 33.9119 10.911 33.9119Z" fill="white"></path> <path id="Vector_2" d="M27.8838 33.9119C29.2229 33.9119 30.3085 32.6807 30.3085 31.1619C30.3085 29.6431 29.2229 28.4119 27.8838 28.4119C26.5447 28.4119 25.4591 29.6431 25.4591 31.1619C25.4591 32.6807 26.5447 33.9119 27.8838 33.9119Z" fill="white"></path> <path id="Vector_3" d="M10.2883 21.537H30.0904L33 5.03699H7.72036L7.07857 0.911987H0V3.66199H5.04487L8.6819 27.037H30.3086V24.287H10.7156L10.2883 21.537Z" fill="white"></path> </g> </svg> <span class="font-medium">Añadir al carrito</span> </button><button></button> </div> </div> </article>`;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/Productos.astro", void 0);

const dataHardware = [
	{
		id: 'HAR0291',
		nombre: 'Dark Rock 4 Air Cooler',
		precio: 74.99,
		descripcion: 'El Dark Rock 4 es un disipador de CPU de una sola torre con un ventilador de 135 mm. Ofrece un rendimiento de refrigeración extremadamente alto de 200 W TDP y un funcionamiento prácticamente inaudible. El diseño compacto de una sola torre ahorra espacio y se adapta a prácticamente todos los sistemas de PC. Con un diseño de aletas asimétricas y seis tubos de calor, el Dark Rock 4 proporciona un enfriamiento silencioso y eficiente.',
		src: '/assets/images/products/HAR0291.webp',
		categoria: 'hardware',
		subcategoria: 'coolers'
	},
	{
		id: 'HAR0459',
		nombre: 'Memoria RAM Corsair Vengeance LPX 16GB DDR4',
		precio: 89.99,
		descripcion: 'La memoria DDR4 Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida; la placa impresa de ocho capas administra el calor y proporciona una capacidad superior para incrementar el overclocking. Cada circuito integrado se selecciona individualmente para el máximo potencial de rendimiento.',
		src: '/assets/images/products/HAR0459.webp',
		categoria: 'hardware',
		subcategoria: 'memorias'
	},
	{
		id: 'HAR0673',
		nombre: 'Tarjeta Gráfica MSI GeForce RTX 3060 Ti',
		precio: 399.99,
		descripcion: 'La GeForce RTX 3060 Ti es una tarjeta gráfica de alto rendimiento que ofrece una potencia increíble para los juegos en 1080p y 1440p. Basada en la arquitectura NVIDIA Ampere, la RTX 3060 Ti cuenta con 4864 núcleos CUDA y 8 GB de memoria GDDR6. La tarjeta gráfica MSI GeForce RTX 3060 Ti Ventus 2X OC cuenta con un diseño de doble ventilador para una refrigeración eficiente y un rendimiento silencioso.',
		src: '/assets/images/products/HAR0673.webp',
		categoria: 'hardware',
		subcategoria: 'tarjetas_graficas'
	},
	{
		id: 'HAR0789',
		nombre: 'Fuente de Alimentación Corsair RM750x 750W 80 Plus',
		precio: 119.99,
		descripcion: 'La fuente de alimentación Corsair RM750x es una fuente de alimentación modular con certificación 80 Plus Gold. Ofrece una eficiencia energética del 90% y un funcionamiento silencioso. El ventilador de 135 mm cuenta con un modo de ventilador sin parada para un funcionamiento silencioso y una refrigeración eficiente. La fuente de alimentación RMx Series cuenta con condensadores japoneses de alta calidad para un rendimiento fiable y una larga vida útil.',
		src: '/assets/images/products/HAR0789.webp',
		categoria: 'hardware',
		subcategoria: 'fuentes_alimentacion'
	},
	{
		id: 'HAR0895',
		nombre: 'Placa Base ASUS ROG Strix B550-F Gaming',
		precio: 179.99,
		descripcion: 'La placa base ASUS ROG Strix B550-F Gaming es una placa base ATX con un diseño de alimentación digital de 12+2 fases y un disipador de calor VRM para un rendimiento fiable y una refrigeración eficiente. La placa base cuenta con dos ranuras M.2, USB 3.2 Gen 2, Wi-Fi 6 y 2.5 Gb Ethernet. El diseño de audio SupremeFX S1220A proporciona una calidad de sonido excepcional para una experiencia de juego inmersiva.',
		src: '/assets/images/products/HAR0895.webp',
		categoria: 'hardware',
		subcategoria: 'placas_base'
	},
	{
		id: 'HAR1001',
		nombre: 'Disco Duro SSD Samsung 970 EVO Plus 1TB',
		precio: 199.99,
		descripcion: 'El disco duro SSD Samsung 970 EVO Plus es un disco de estado sólido NVMe M.2 con una capacidad de 1 TB. Ofrece velocidades de lectura y escritura secuenciales de hasta 3500 MB/s y 3300 MB/s, respectivamente. El disco SSD 970 EVO Plus cuenta con la tecnología V-NAND de Samsung y el controlador Phoenix para un rendimiento excepcional y una fiabilidad duradera.',
		src: '/assets/images/products/HAR1001.webp',
		categoria: 'hardware',
		subcategoria: 'discos_duros'
	},
	{
		id: 'HAR1111',
		nombre: 'Caja de PC NZXT H510',
		precio: 69.99,
		descripcion: 'La caja de PC NZXT H510 es una caja compacta ATX con un diseño elegante y minimalista. La caja cuenta con un panel frontal de E/S USB 3.1 Gen 2 Tipo-C, un panel lateral de vidrio templado y un sistema de gestión de cables integrado. La caja H510 cuenta con dos ventiladores Aer F de 120 mm para una refrigeración eficiente y un rendimiento silencioso.',
		src: '/assets/images/products/HAR1111.webp',
		categoria: 'hardware',
		subcategoria: 'cajas_pc'
	},
	{
		id: 'HAR1221',
		nombre: 'Procesador AMD Ryzen 5 5600X',
		precio: 299.99,
		descripcion: 'El procesador AMD Ryzen 5 5600X es un procesador de 6 núcleos y 12 hilos con una velocidad de reloj base de 3.7 GHz y una velocidad de reloj máxima de 4.6 GHz. El procesador cuenta con la arquitectura Zen 3 de AMD para un rendimiento excepcional en aplicaciones de productividad y juegos. El procesador Ryzen 5 5600X es compatible con el socket AM4 y cuenta con una caché L3 de 32 MB.',
		src: '/assets/images/products/HAR1221.webp',
		categoria: 'hardware',
		subcategoria: 'procesadores'
	},
	{
		id: 'HAR1331',
		nombre: 'Ventilador de Caja Corsair LL120 RGB',
		precio: 39.99,
		descripcion: 'El ventilador de caja Corsair LL120 RGB es un ventilador de 120 mm con iluminación RGB. El ventilador cuenta con 16 LED RGB independientes en cada aspa para una iluminación vibrante y personalizable. El ventilador LL120 RGB ofrece un flujo de aire de hasta 43.25 CFM y una presión estática de hasta 1.61 mmH2O para una refrigeración eficiente y un rendimiento silencioso.',
		src: '/assets/images/products/HAR1331.webp',
		categoria: 'hardware',
		subcategoria: 'ventiladores'
	},
	{
		id: 'HAR1441',
		nombre: 'Tarjeta de Sonido Creative Sound Blaster Z',
		precio: 99.99,
		descripcion: 'La tarjeta de sonido Creative Sound Blaster Z es una tarjeta de sonido PCIe con un procesador de audio SBX Pro Studio para una calidad de sonido excepcional. La tarjeta de sonido cuenta con un amplificador de auriculares de 600 ohmios para una potencia de salida superior y una relación señal/ruido de 116 dB para un sonido nítido y claro. La tarjeta de sonido Sound Blaster Z es compatible con el software de control de audio Sound Blaster Command para una personalización avanzada.',
		src: '/assets/images/products/HAR1441.png',
		categoria: 'hardware',
		subcategoria: 'tarjetas_sonido'
	},
	{
		id: 'HAR1551',
		nombre: 'Refrigeración Líquida Corsair H100i RGB Platinum SE',
		precio: 149.99,
		descripcion: 'La refrigeración líquida Corsair H100i RGB Platinum SE es un sistema de refrigeración líquida de doble ventilador con iluminación RGB. El radiador de 240 mm cuenta con dos ventiladores ML120 RGB de 120 mm para una refrigeración eficiente y un rendimiento silencioso. El cabezal de bombeo cuenta con iluminación RGB dinámica para una estética impresionante. El sistema de refrigeración líquida H100i RGB Platinum SE es compatible con el software de control de refrigeración líquida Corsair iCUE para una personalización avanzada.',
		src: '/assets/images/products/HAR1551.png',
		categoria: 'hardware',
		subcategoria: 'refrigeracion_liquida'
	},
	{
		id: 'HAR1661',
		nombre: 'Tarjeta de Captura Elgato Game Capture HD60 S+',
		precio: 199.99,
		descripcion: 'La tarjeta de captura Elgato Game Capture HD60 S+ es una tarjeta de captura externa con una resolución de hasta 1080p60 HDR y una tasa de bits de hasta 60 Mbps. La tarjeta de captura cuenta con una entrada HDMI y una salida HDMI para una conexión sencilla a tu consola de juegos y tu monitor. La tarjeta de captura HD60 S+ es compatible con el software de grabación y transmisión de Elgato para una experiencia de captura de juegos sin problemas.',
		src: '/assets/images/products/HAR1661.webp',
		categoria: 'hardware',
		subcategoria: 'tarjetas_captura'
	},
];

const dataLaptops = [
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
    },
    {
        id: 'LAP0996',
        nombre: 'Portátil Lenovo IdeaPad Gaming 3 15ARH05',
        precio: 699.99,
        descripcion: 'El portátil Lenovo IdeaPad Gaming 3 15ARH05 es un portátil gaming de alto rendimiento con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador AMD Ryzen 5 4600H, 8 GB de memoria RAM DDR4 y una tarjeta gráfica NVIDIA GeForce GTX 1650. El portátil cuenta con un disco duro SSD de 512 GB, un teclado retroiluminado y un sistema de refrigeración avanzado.',
        src: '/assets/images/products/LAP0996.jpg',
        categoria: 'laptops',
        subcategoria: 'lenovo'
    },
    {
        id: 'LAP1000',
        nombre: 'Portátil Acer Aspire 5 A515-56-50RS',
        precio: 599.99,
        descripcion: 'El portátil Acer Aspire 5 A515-56-50RS es un portátil ligero y versátil con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador Intel Core i5 de 11ª generación, 8 GB de memoria RAM DDR4 y un disco duro SSD de 512 GB. El portátil Acer Aspire 5 A515-56-50RS es ideal para el trabajo, el entretenimiento y las tareas diarias.',
        src: '/assets/images/products/LAP1000.webp',
        categoria: 'laptops',
        subcategoria: 'acer'
    },
    {
        id: 'LAP1110',
        nombre: 'Portátil ASUS VivoBook 15 F515EA-BQ253T',
        precio: 499.99,
        descripcion: 'El portátil ASUS VivoBook 15 F515EA-BQ253T es un portátil ligero y versátil con un diseño elegante y una pantalla Full HD de 15.6 pulgadas. Cuenta con un procesador Intel Core i3 de 11ª generación, 8 GB de memoria RAM DDR4 y un disco duro SSD de 256 GB. El portátil ASUS VivoBook 15 F515EA-BQ253T es ideal para el trabajo, el entretenimiento y las tareas diarias.',
        src: '/assets/images/products/LAP1110.jpg',
        categoria: 'laptops',
        subcategoria: 'asus'
    },
    {
        id: 'LAP1224',
        nombre: 'Portátil HP 15s-fq2032ns',
        precio: 399.99,
        descripcion: 'El portátil HP 15s-fq2032ns es un portátil ligero y versátil con un diseño elegante y una pantalla HD de 15.6 pulgadas. Cuenta con un procesador Intel Core i3 de 11ª generación, 8 GB de memoria RAM DDR4 y un disco duro SSD de 256 GB. El portátil HP 15s-fq2032ns es ideal para el trabajo, el entretenimiento y las tareas diarias.',
        src: '/assets/images/products/LAP1224.jpg',
        categoria: 'laptops',
        subcategoria: 'hp'
    }
];

const dataMonitores = [
    {
		id: 'MON0299',
        nombre: 'Monitor Gaming MSI Optix G27C4',
        precio: 199.99,
        descripcion: 'El monitor gaming MSI Optix G27C4 es un monitor curvo de 27 pulgadas con una frecuencia de actualización de 165 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución Full HD y un panel VA para una calidad de imagen excepcional. El monitor cuenta con tecnología AMD FreeSync para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0299.jpg',
        categoria: 'monitores',
        subcategoria: 'msi'
	},
	{
		id: 'MON0029',
        nombre: 'Monitor Lenovo Legion Y25-25',
        precio: 499.99,
        descripcion: 'El monitor Lenovo Legion Y25-25 es un monitor de 24.5 pulgadas con una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución Full HD y un panel TN para una calidad de imagen excepcional. El monitor cuenta con tecnología AMD FreeSync para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0029.jpg',
        categoria: 'monitores',
        subcategoria: 'lenovo'
	},
    {
        id: 'MON0137',
        nombre: 'Monitor Acer Predator XB253QGP',
        precio: 299.99,
        descripcion: 'El monitor Acer Predator XB253QGP es un monitor de 24.5 pulgadas con una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 0.5 ms. Cuenta con una resolución Full HD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología NVIDIA G-SYNC para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0137.jpg',
        categoria: 'monitores',
        subcategoria: 'acer'
    },
    {
        id: 'MON0245',
        nombre: 'Monitor ASUS TUF Gaming VG27WQ1B',
        precio: 349.99,
        descripcion: 'El monitor ASUS TUF Gaming VG27WQ1B es un monitor curvo de 27 pulgadas con una frecuencia de actualización de 165 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución WQHD y un panel VA para una calidad de imagen excepcional. El monitor cuenta con tecnología FreeSync Premium para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0245.png',
        categoria: 'monitores',
        subcategoria: 'asus'
    },
    {
        id: 'MON0353',
        nombre: 'Monitor HP Omen 27i',
        precio: 399.99,
        descripcion: 'El monitor HP Omen 27i es un monitor de 27 pulgadas con una frecuencia de actualización de 165 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología NVIDIA G-SYNC para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0353.webp',
        categoria: 'monitores',
        subcategoria: 'hp'
    },
    {
        id: 'MON0461',
        nombre: 'Monitor LG UltraGear 27GN800-B',
        precio: 299.99,
        descripcion: 'El monitor LG UltraGear 27GN800-B es un monitor de 27 pulgadas con una frecuencia de actualización de 144 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología AMD FreeSync para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0461.webp',
        categoria: 'monitores',
        subcategoria: 'lg'
    },
    {
        id: 'MON0570',
        nombre: 'Monitor Samsung Odyssey G7',
        precio: 599.99,
        descripcion: 'El monitor Samsung Odyssey G7 es un monitor curvo de 27 pulgadas con una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel VA para una calidad de imagen excepcional. El monitor cuenta con tecnología NVIDIA G-SYNC para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0570.jpg',
        categoria: 'monitores',
        subcategoria: 'samsung'
    },
    {
        id: 'MON0678',
        nombre: 'Monitor ViewSonic Elite XG270QG',
        precio: 499.99,
        descripcion: 'El monitor ViewSonic Elite XG270QG es un monitor de 27 pulgadas con una frecuencia de actualización de 165 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología NVIDIA G-SYNC para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0678.webp',
        categoria: 'monitores',
        subcategoria: 'viewsonic'
    },
    {
        id: 'MON0786',
        nombre: 'Monitor BenQ Zowie XL2546',
        precio: 399.99,
        descripcion: 'El monitor BenQ Zowie XL2546 es un monitor de 24.5 pulgadas con una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución Full HD y un panel TN para una calidad de imagen excepcional. El monitor cuenta con tecnología DyAc para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0786.webp',
        categoria: 'monitores',
        subcategoria: 'benq'
    },
    {
        id: 'MON0894',
        nombre: 'Monitor AOC Agon AG273QCG',
        precio: 499.99,
        descripcion: 'El monitor AOC Agon AG273QCG es un monitor curvo de 27 pulgadas con una frecuencia de actualización de 165 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel VA para una calidad de imagen excepcional. El monitor cuenta con tecnología NVIDIA G-SYNC para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON0894.webp',
        categoria: 'monitores',
        subcategoria: 'aoc'
    },
    {
        id: 'MON1002',
        nombre: 'Monitor Dell Alienware AW2521HFL',
        precio: 399.99,
        descripcion: 'El monitor Dell Alienware AW2521HFL es un monitor de 24.5 pulgadas con una frecuencia de actualización de 240 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución Full HD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología AMD FreeSync para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON1002.jpg',
        categoria: 'monitores',
        subcategoria: 'dell'
    },
    {
        id: 'MON1110',
        nombre: 'Monitor Razer Raptor 27',
        precio: 699.99,
        descripcion: 'El monitor Razer Raptor 27 es un monitor de 27 pulgadas con una frecuencia de actualización de 144 Hz y un tiempo de respuesta de 1 ms. Cuenta con una resolución QHD y un panel IPS para una calidad de imagen excepcional. El monitor cuenta con tecnología AMD FreeSync para una experiencia de juego suave y sin tearing.',
        src: '/assets/images/products/MON1110.jpg',
        categoria: 'monitores',
        subcategoria: 'razer'
    },
];

const dataPerifericos = [
    {
        id: 'PER0541',
        nombre: 'Teclado Mecánico Corsair K70 RGB MK.2',
        precio: 129.99,
        descripcion: 'El teclado mecánico Corsair K70 RGB MK.2 es un teclado gaming de alto rendimiento con interruptores Cherry MX y retroiluminación RGB. Cuenta con una estructura de aluminio anodizado para una durabilidad excepcional y una apariencia elegante. El teclado cuenta con teclas programables y un reposamuñecas desmontable para una comodidad excepcional.',
        src: '/assets/images/products/PER0541.webp',
        categoria: 'perifericos',
        subcategoria: 'teclados'
    },
    {
        id: 'PER0655',
        nombre: 'Ratón Gaming Logitech G502 HERO',
        precio: 49.99,
        descripcion: 'El ratón gaming Logitech G502 HERO es un ratón de alto rendimiento con un sensor óptico de 16000 DPI y 11 botones programables. Cuenta con un sistema de pesas ajustable para una personalización excepcional y un rendimiento optimizado. El ratón cuenta con iluminación RGB y un diseño ergonómico para una comodidad excepcional.',
        src: '/assets/images/products/PER0655.webp',
        categoria: 'perifericos',
        subcategoria: 'ratones'
    },
    {
        id: 'PER0769',
        nombre: 'Auriculares Gaming HyperX Cloud II',
        precio: 79.99,
        descripcion: 'Los auriculares gaming HyperX Cloud II son unos auriculares de alto rendimiento con sonido envolvente virtual 7.1. Cuentan con un diseño ligero y cómodo con almohadillas de espuma viscoelástica y cuero sintético. Los auriculares cuentan con un micrófono desmontable con cancelación de ruido y controles de audio en línea para un rendimiento excepcional.',
        src: '/assets/images/products/PER0769.webp',
        categoria: 'perifericos',
        subcategoria: 'auriculares'
    },
    {
        id: 'PER0883',
        nombre: 'Silla Gaming Newskill Takamikura',
        precio: 199.99,
        descripcion: 'La silla gaming Newskill Takamikura es una silla ergonómica de alta calidad con un diseño elegante y una construcción resistente. Cuenta con un mecanismo de inclinación ajustable, reposabrazos 2D y cojines lumbares y cervicales para una comodidad excepcional. La silla cuenta con un diseño de cuero sintético de alta calidad y una base de aluminio para una durabilidad excepcional.',
        src: '/assets/images/products/PER0883.jpg',
        categoria: 'perifericos',
        subcategoria: 'sillas'
    },
    {
        id: 'PER0997',
        nombre: 'Webcam Logitech C922 Pro',
        precio: 99.99,
        descripcion: 'La webcam Logitech C922 Pro es una webcam de alta definición con grabación Full HD 1080p y 30 fps. Cuenta con un enfoque automático y corrección de luz HD para una calidad de imagen excepcional en cualquier entorno. La webcam cuenta con un trípode ajustable y un clip universal para una fácil instalación en cualquier monitor o trípode.',
        src: '/assets/images/products/PER0997.jpg',
        categoria: 'perifericos',
        subcategoria: 'webcams'
    },
    {
        id: 'PER1011',
        nombre: 'Micrófono USB HyperX QuadCast',
        precio: 139.99,
        descripcion: 'El micrófono USB HyperX QuadCast es un micrófono de alta calidad con cuatro patrones polares seleccionables y control de ganancia ajustable. Cuenta con una interfaz de audio integrada y un soporte incorporado para un rendimiento excepcional. El micrófono cuenta con iluminación RGB y un filtro pop interno para una calidad de sonido excepcional.',
        src: '/assets/images/products/PER1011.webp',
        categoria: 'perifericos',
        subcategoria: 'microfonos'
    },
    {
        id: 'PER1125',
        nombre: 'Alfombrilla Gaming Razer Goliathus',
        precio: 19.99,
        descripcion: 'La alfombrilla gaming Razer Goliathus es una alfombrilla de tela de alta calidad con una superficie optimizada para un seguimiento preciso y una respuesta uniforme. Cuenta con una base de goma antideslizante y bordes cosidos para una durabilidad excepcional. La alfombrilla cuenta con un diseño de tamaño mediano para un equilibrio óptimo entre velocidad y control.',
        src: '/assets/images/products/PER1125.jpg',
        categoria: 'perifericos',
        subcategoria: 'alfombrillas'
    },
    {
        id: 'PER1239',
        nombre: 'Mesa Gaming Trust GXT 711 Dominus',
        precio: 149.99,
        descripcion: 'La mesa gaming Trust GXT 711 Dominus es una mesa de juego de alta calidad con un diseño ergonómico y una construcción resistente. Cuenta con una superficie de fibra de carbono y un soporte para auriculares incorporado para una funcionalidad excepcional. La mesa cuenta con un diseño de tamaño mediano para un equilibrio óptimo entre espacio y comodidad.',
        src: '/assets/images/products/PER1239.webp',
        categoria: 'perifericos',
        subcategoria: 'mesas'
    },
    {
        id: 'PER1353',
        nombre: 'Soporte para Auriculares Newskill Takamikura',
        precio: 19.99,
        descripcion: 'El soporte para auriculares Newskill Takamikura es un soporte de alta calidad con un diseño elegante y una construcción resistente. Cuenta con un soporte de aluminio y una base de goma antideslizante para una estabilidad excepcional. El soporte para auriculares cuenta con un diseño universal para una compatibilidad óptima con la mayoría de los auriculares.',
        src: '/assets/images/products/PER1353.jpg',
        categoria: 'perifericos',
        subcategoria: 'soportes_auriculares'
    },
    {
        id: 'PER1467',
        nombre: 'Reposapiés Newskill Takamikura',
        precio: 29.99,
        descripcion: 'El reposapiés Newskill Takamikura es un reposapiés ergonómico con un diseño elegante y una construcción resistente. Cuenta con una superficie de tela suave y un relleno de espuma viscoelástica para una comodidad excepcional. El reposapiés cuenta con un diseño ajustable para una personalización óptima de la altura y la inclinación.',
        src: '/assets/images/products/PER1467.webp',
        categoria: 'perifericos',
        subcategoria: 'reposapies'
    },
    {
        id: 'PER1571',
        nombre: 'Hub USB Trust GXT 253',
        precio: 19.99,
        descripcion: 'El hub USB Trust GXT 253 es un hub de alta calidad con 4 puertos USB 2.0 y un diseño compacto y portátil. Cuenta con una conexión USB plug-and-play y una alimentación por bus para una compatibilidad óptima con la mayoría de los dispositivos. El hub USB cuenta con un diseño de tamaño mediano para un equilibrio óptimo entre espacio y funcionalidad.',
        src: '/assets/images/products/PER1571.jpg',
        categoria: 'perifericos',
        subcategoria: 'hubs_usb'
    },
    {
        id: 'PER1685',
        nombre: 'Cable HDMI 2.1 8K 2m',
        precio: 19.99,
        descripcion: 'El cable HDMI 2.1 8K 2m es un cable de alta calidad con una resolución de hasta 8K y una tasa de refresco de hasta 120 Hz. Cuenta con una conexión HDMI chapada en oro y un blindaje de triple capa para una calidad de señal excepcional. El cable HDMI cuenta con un diseño de tamaño mediano para una compatibilidad óptima con la mayoría de los dispositivos.',
        src: '/assets/images/products/PER1685.webp',
        categoria: 'perifericos',
        subcategoria: 'cables_hdmi'
    }
];

const $$Astro$1 = createAstro();
const $$DescripcionProducto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DescripcionProducto;
  const { id, nombre, precio, descripcion, categoria, src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center py-10"> <div class="flex items-center justify-center bg-[#fdfdfd] w-[550px] h-[600px] border-[#e5e5e5] border-2 border-solid rounded-tl-[15px] rounded-bl-[15px] mx-10 shadow-lg p-10"> <img class=""${addAttribute(src, "src")}${addAttribute(nombre, "alt")}> </div> <div class="bg-[#fdfdfd] w-[550px] border-2 h-[600px] border-solid border-[#e5e5e5] rounded-tr-[15px] rounded-br-[15px] shadow-lg flex flex-col pt-6 mx-10"> <h3 class="text-black text-[25px] pl-8 font-bold pr-32">${nombre}</h3> <p class="text-[#209FD5] pl-8 font-bold py-3 text-[20px]">$${precio}</p> <p class="text-[#8D8C8C] pl-8 text-[18px] font-medium pr-24">${descripcion}</p> <input class="bg-gris-oscuro ml-8 text-center w-12 py-1 rounded-[10px] mt-5" type="number" value="1" min="1" max="99" id="cantidad"> <button class="bg-gris-oscuro ml-8 w-48 h-8 flex justify-evenly items-center rounded-[15px] mt-3"><svg width="25" height="25" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Group 2"> <path id="Vector" d="M10.911 33.9119C12.2501 33.9119 13.3357 32.6807 13.3357 31.1619C13.3357 29.6431 12.2501 28.4119 10.911 28.4119C9.5719 28.4119 8.48633 29.6431 8.48633 31.1619C8.48633 32.6807 9.5719 33.9119 10.911 33.9119Z" fill="white"></path> <path id="Vector_2" d="M27.8838 33.9119C29.2229 33.9119 30.3085 32.6807 30.3085 31.1619C30.3085 29.6431 29.2229 28.4119 27.8838 28.4119C26.5447 28.4119 25.4591 29.6431 25.4591 31.1619C25.4591 32.6807 26.5447 33.9119 27.8838 33.9119Z" fill="white"></path> <path id="Vector_3" d="M10.2883 21.537H30.0904L33 5.03699H7.72036L7.07857 0.911987H0V3.66199H5.04487L8.6819 27.037H30.3086V24.287H10.7156L10.2883 21.537Z" fill="white"></path> </g> </svg> <span>Agregar al carrito</span> </button> <hr class="border-[#e5e5e5] border-solid border-[2px] my-4"> <p class="pl-8"><strong class="text-black">SKU: </strong><span class="text-gris-oscuro">${id}</span></p> <p class="pl-8"><strong class="text-black">Categoría: </strong><span class="text-gris-oscuro">${categoria}</span></p> </div> </section>`;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/DescripcionProducto.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const allDataPath = [...dataMonitores, ...dataLaptops, ...dataHardware, ...dataPerifericos];
  const paths = allDataPath.map((product) => ({ params: { id: product.id } }));
  return paths;
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const allData = [...dataMonitores, ...dataLaptops, ...dataHardware, ...dataPerifericos];
  let { id } = Astro2.params;
  let product = allData.find((item) => item.id === id);
  let contador = 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${product?.nombre} | Tecny` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header> ${renderComponent($$result2, "HeaderSup", $$HeaderSup, {})} </header> <main> ${renderComponent($$result2, "DescripcionProducto", $$DescripcionProducto, { "client:visible": true, "id": product?.id, "nombre": product?.nombre, "precio": product?.precio, "descripcion": product?.descripcion, "src": product?.src, "categoria": "", "client:component-hydration": "visible", "client:component-path": "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/components/DescripcionProducto.astro", "client:component-export": "default" })} <section> <h2 class="text-center text-morado-primario text-[40px] font-bold">Productos Relacionados</h2> <div class="flex justify-center my-5"> ${allData.map((item) => {
    if ((item.id !== product?.id && item.subcategoria === product?.subcategoria || item.categoria === product?.categoria) && contador < 4) {
      contador++;
      return renderTemplate`${renderComponent($$result2, "Productos", $$Productos, { "id": item.id, "nombre": item.nombre, "precio": item.precio, "cantidad": 1, "src": item.src, "className": contador % 4 === 0 ? "" : "mr-5" })}`;
    }
  })} </div> </section> </main> <footer> ${renderComponent($$result2, "Footer", $$Footer, {})} </footer> ` })} `;
}, "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/productos/[id].astro", void 0);

const $$file = "C:/Users/jhonm/OneDrive/Documentos/Frameworks_FrontEnd/diseno-interfaces/src/pages/categorias/productos/[id].astro";
const $$url = "/categorias/productos/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeaderSup as $, _id_ as _, $$Footer as a, $$Layout as b, $$Productos as c, dataHardware as d, dataMonitores as e, dataLaptops as f, dataPerifericos as g };
