import { useState } from 'react';

export default function Filtrar() {
    const [value, setValue] = useState(0);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="w-full rounded-2xl border border-solid border-[#dadada] shadow-lg md:w-80">
            <h2 className="px-5 pb-3 pt-5 text-xl font-extrabold text-black">
                Filtrar por Subcategorías
            </h2>
            <h3 className="px-5 text-lg font-bold text-black">Hardware</h3>
            <div className="flex flex-col p-4 px-5">
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Procesadores</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Mainboards</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Memorias RAM</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Almacenamiento</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Tarjetas de Video</span>
                </label>
                <label>
                    <input type="checkbox" />
                    <span className="pl-2 text-black">Fuentes de Poder</span>
                </label>
            </div>
            <hr className="w-full border-[#dadada]"></hr>
            <h2 className="px-5 py-3 text-xl font-extrabold text-black">
                Filtrar Por Precio
            </h2>
            <div className="flex flex-col px-5 pb-5">
                <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={value}
                    onChange={handleOnChange}
                />
                <div className="mt-2 flex items-center justify-between">
                    <label className="text-lg text-black">
                        Precio: $0 - ${value}
                    </label>
                    <button className="w-20 rounded-lg bg-gris-oscuro text-lg">
                        Filtrar
                    </button>
                </div>
            </div>
        </div>
    );
}
