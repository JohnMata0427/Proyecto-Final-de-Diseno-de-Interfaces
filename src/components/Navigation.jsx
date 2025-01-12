import { useState } from 'react';

function Option({ text, href, children }) {
    return (
        <a
            className="group flex items-center gap-x-2 transition-all hover:scale-105"
            href={href}
        >
            {children}
            <span className="transition-all group-hover:text-sky-500">
                {text}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 8"
                className="size-3"
            >
                <path
                    className="stroke-white transition-all group-hover:stroke-sky-500"
                    d="m1 1 5 5.3L11 1"
                />
            </svg>
        </a>
    );
}

export default function Navigagion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-morado-primario py-2 text-sm">
            <ul className="flex flex-wrap justify-center gap-x-20 gap-y-2 px-4">
                <li>
                    <Option text="Inicio" href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            className="size-4"
                        >
                            <path
                                className="fill-white transition-all group-hover:fill-sky-500"
                                d="M16.3 6.4V.7H13v2.6L10 0 0 10.7h2.5V20h5.6v-7.1H12V20h5.6v-9.3H20l-3.8-4.3Z"
                            />
                        </svg>
                    </Option>
                </li>
                <li>
                    <Option text="Ofertas" href="/ofertas">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="size-4"
                            viewBox="0 0 21 21"
                        >
                            <path
                                className="fill-white transition-all group-hover:fill-sky-500"
                                d="m20.7 7.2-1.9-1.9a.9.9 0 0 0-1.2 0 1.3 1.3 0 0 1-2.2-1c0-.3.1-.7.3-1a.9.9 0 0 0 0-1.1l-2-2a.9.9 0 0 0-1.2 0l-3 3.1L9 4a.3.3 0 0 1-.2.2l-.7.4-7.8 8a.9.9 0 0 0 0 1.2l1.9 1.9a.9.9 0 0 0 1.2 0 1.3 1.3 0 0 1 1.9 2 .9.9 0 0 0 0 1.1l2 2a.9.9 0 0 0 1.2 0l7.9-8c.2-.1.3-.4.4-.6a.3.3 0 0 1 .2-.2l.7-.5 3-3a.9.9 0 0 0 0-1.3ZM10.7 6a.7.7 0 0 1-1 0l-.4-.5a.7.7 0 0 1 1-1l.5.5a.7.7 0 0 1 0 1Zm2 2a.7.7 0 0 1-1 0l-.5-.5a.7.7 0 0 1 1-1l.5.5a.7.7 0 0 1 0 1Zm1.9 1.9a.7.7 0 0 1-1 0l-.5-.5a.7.7 0 0 1 1-1l.5.5a.7.7 0 0 1 0 1Zm2 2a.7.7 0 0 1-1 0l-.5-.6a.7.7 0 1 1 1-1l.5.6a.7.7 0 0 1 0 1Z"
                            />
                        </svg>
                    </Option>
                </li>
                <li>
                    <button
                        className="group flex items-center gap-x-2 transition-all hover:scale-105 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="size-4"
                            viewBox="0 0 21 19"
                        >
                            <path
                                className="fill-white transition-all group-hover:fill-sky-500"
                                d="M16.2 1.5H4.8c-.2 0-.4 0-.5-.2A.8.8 0 0 1 4 .8l.3-.6.5-.2h11.4c.2 0 .4 0 .5.2l.3.6c0 .2-.1.4-.3.5-.1.2-.3.2-.5.2ZM17.8 4H3.2a.5.5 0 0 1-.5-.3.8.8 0 0 1-.3-.5l.3-.6.5-.2h14.6l.5.2.3.6c0 .2-.1.4-.3.5-.1.2-.3.3-.5.3Zm1 14.6H2.2c-.6 0-1.2-.2-1.6-.6a2 2 0 0 1-.7-1.5V6.8c0-.6.2-1.1.7-1.5.4-.4 1-.7 1.6-.7h16.4c.6 0 1.2.3 1.6.7.5.4.7 1 .7 1.5v9.6a2 2 0 0 1-.7 1.5c-.4.4-1 .6-1.6.6Z"
                            />
                        </svg>
                        <span className="transition-all group-hover:text-sky-500">
                            Categorias
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="size-3"
                            viewBox="0 0 12 8"
                        >
                            <path
                                className="stroke-white transition-all group-hover:stroke-sky-500"
                                d="m1 1 5 5.3L11 1"
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute mt-2 w-40 rounded-b-xl bg-black text-sm shadow-md shadow-black">
                            <a
                                href="/categorias/hardware"
                                className="flex items-center justify-between px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 22 18"
                                >
                                    <path
                                        fill="#fff"
                                        d="m21.4 2.7-3.6 3.5-2-2L19.2.5c-2-.9-4.7-1-6.4.7-1.5 1.5-1.7 4-1 5.8l-7.5 8a.5.5 0 0 0 0 .7l2.2 2.2a.5.5 0 0 0 .8 0l7.7-7.8c2 .7 4.3.5 5.8-1 1.6-1.6 1.6-4.3.7-6.3Z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="m14.7 11.3-2.9 3 3 3.6h.2a.4.4 0 0 0 .5 0l2.4-2.7a.5.5 0 0 0 .1-.3.5.5 0 0 0-.1-.3l-3.2-3.3ZM4.7 7c0-.2 0-.4-.2-.6h-.1l.4-.2s.2 0 .5.3L7 8.3V9l.3.3L10 6.5l-.3-.3-.4-.2s-.2 0-.3.2C8.1 5 8 4.6 7.8 4.3c-.2-.6.2-1.2.6-1.5a2.3 2.3 0 0 1 2.3-.2l.5-.8a3.8 3.8 0 0 0-.7-1C10.2.5 9.3 0 8.3 0 7.7 0 7 .1 6.5.4a9.2 9.2 0 0 0-3 2l-.8 1c-.2.4-.2.8-.2 1a.7.7 0 0 0-.7 0l-.2.1L0 6.1l-.1.2v.2l2.6 2.8H3l1.5-1.6.3-.6Z"
                                    />
                                </svg>
                                <span>Hardware</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 8 12"
                                >
                                    <path
                                        stroke="#E6E6E6"
                                        d="m1 11 5.4-4.8-5-5.2"
                                    />
                                </svg>
                            </a>
                            <hr></hr>
                            <a
                                href="/categorias/perifericos"
                                className="flex items-center justify-between px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 26 20"
                                >
                                    <path
                                        stroke="#fff"
                                        d="M7.9 19 1 10l6.9-9M18 19l6.9-9L18 1M9.6 12.6l3.4 5.1 3.4-5.1M13 2.3v14.1"
                                    />
                                </svg>
                                <span>Perifericos</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 8 12"
                                >
                                    <path
                                        stroke="#E6E6E6"
                                        d="m1 11 5.4-4.8-5-5.2"
                                    />
                                </svg>
                            </a>
                            <hr></hr>
                            <a
                                href="/categorias/monitores"
                                className="flex items-center justify-between px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        fill="#fff"
                                        d="M0 14.6c0 .6.2 1.2.6 1.6.5.5 1 .7 1.6.7h6.1l-.1 1.6H5.9c-.2 0-.4 0-.6.2a.8.8 0 0 0 0 1l.6.3H16c.2 0 .4 0 .6-.2a.8.8 0 0 0 0-1.1.7.7 0 0 0-.6-.2h-2.3l-.1-1.6h6.1c.6 0 1.1-.2 1.6-.7.4-.4.6-1 .6-1.6v-2.3H0v2.3Zm11-.8c.1 0 .3 0 .4.2l.3.3a.8.8 0 0 1-.2.9l-.4.2h-.4a.7.7 0 0 1-.3-.4.8.8 0 0 1 0-1l.6-.2ZM22 2.3c0-.6-.2-1.2-.6-1.6-.5-.5-1-.7-1.6-.7H2.2C1.6 0 1.1.2.6.7.2 1 0 1.7 0 2.3v9.2h22V2.3Z"
                                    />
                                </svg>
                                <span>Monitores</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 8 12"
                                >
                                    <path
                                        stroke="#E6E6E6"
                                        d="m1 11 5.4-4.8-5-5.2"
                                    />
                                </svg>
                            </a>
                            <hr></hr>
                            <a
                                href="/categorias/laptops"
                                className="flex items-center justify-between px-4 py-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 24 20"
                                >
                                    <path
                                        fill="#fff"
                                        d="M23.3 18.2h-1.4a3 3 0 0 0 .6-1.8V2.7a3 3 0 0 0-.7-1.9 2 2 0 0 0-1.6-.8H3.8a2 2 0 0 0-1.6.8 3 3 0 0 0-.7 2v13.6c0 .6.2 1.3.6 1.8H.7c-.1 0-.3 0-.5.2a1 1 0 0 0-.2.7c0 .2 0 .5.2.6l.5.3h22.6l.5-.3.2-.6c0-.3 0-.5-.2-.7a.7.7 0 0 0-.6-.2Z"
                                    />
                                </svg>
                                <span>Laptops</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="size-4"
                                    viewBox="0 0 8 12"
                                >
                                    <path
                                        stroke="#E6E6E6"
                                        d="m1 11 5.4-4.8-5-5.2"
                                    />
                                </svg>
                            </a>
                        </div>
                    )}
                </li>
                <li>
                    <Option text="Contacto" href="/contacto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="size-4"
                            viewBox="0 0 21 21"
                        >
                            <path
                                className="fill-white transition-all group-hover:fill-sky-500"
                                d="M16.8 21c-.9 0-2.2-.3-4.1-1.4a26.8 26.8 0 0 1-6.5-4.9 24.6 24.6 0 0 1-4.8-6.4C-.4 5-.1 3.5.3 2.8c.3-.9 1-1.4 1.7-1.9A8.3 8.3 0 0 1 3.4.2c.3-.1.6-.3 1-.1.4 0 .6.3 1 .7.9.9 2 2.7 2.5 3.7.3.6.5 1 .5 1.4 0 .6-.3 1-.6 1.4l-.2.3c-.4.4-.4.6-.4.8.1.5.9 2 2.2 3.2 1.3 1.3 2.7 2 3.2 2.1.2.1.3 0 .8-.3l.2-.2c.5-.4 1-.6 1.5-.6.4 0 .8.2 1.5.5a18 18 0 0 1 3.6 2.4l.7 1c.2.4 0 .8 0 1l-.1.1L20 19c-.5.7-1 1.3-1.9 1.7-.4.2-.9.3-1.4.3Z"
                            />
                        </svg>
                    </Option>
                </li>
            </ul>
        </nav>
    );
}
