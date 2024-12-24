import { useState } from 'react';

export default function Filtrar({ setFiltro }) {
    const [value, setValue] = useState(0);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    const applyFilter = () => {
        setFiltro(`Precio: ${value}`);
    };

    return (
        <div className="w-80 rounded-2xl border border-solid border-[#dadada] shadow-lg">
            <h2 className="px-5 pb-3 pt-5 text-xl font-extrabold text-black">
                Filtrar por Subcategorías
            </h2>
            <h3 className="px-5 text-lg font-bold text-black">Hardware</h3>
            <div className="flex flex-col p-4 px-5">
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(e.target.checked ? 'Procesadores' : '')
                        }
                    />
                    <span className="pl-2 text-black">Procesadores</span>
                </label>
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(e.target.checked ? 'Mainboards' : '')
                        }
                    />
                    <span className="pl-2 text-black">Mainboards</span>
                </label>
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(e.target.checked ? 'Memorias RAM' : '')
                        }
                    />
                    <span className="pl-2 text-black">Memorias RAM</span>
                </label>
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(e.target.checked ? 'Almacenamiento' : '')
                        }
                    />
                    <span className="pl-2 text-black">Almacenamiento</span>
                </label>
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(
                                e.target.checked ? 'Tarjetas de Video' : '',
                            )
                        }
                    />
                    <span className="pl-2 text-black">Tarjetas de Video</span>
                </label>
                <label className="pb-1">
                    <input
                        type="checkbox"
                        onChange={(e) =>
                            setFiltro(
                                e.target.checked ? 'Fuentes de Poder' : '',
                            )
                        }
                    />
                    <span className="pl-2 text-black">Fuentes de Poder</span>
                </label>
            </div>
            <hr className="w-full border-[#dadada]"></hr>
            <h2 className="px-5 py-3 text-xl font-extrabold text-black">
                Filtrar Por Precio
            </h2>
            <div className="flex flex-col px-5 pb-5">
                <input
                    className="py-3"
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={value}
                    onChange={handleOnChange}
                />
                <div className="flex items-center justify-between">
                    <label className="my-3 text-lg text-black">
                        Precio: $0 - ${value}
                    </label>
                    <button
                        className="w-20 rounded-lg bg-gris-oscuro text-lg"
                        onClick={applyFilter}
                    >
                        Filtrar
                    </button>
                </div>
            </div>
        </div>
    );
}
