import { useState } from 'react';

export default function Filtrar({ setFiltro }) {
    const [value, setValue] = useState(0);
    const [precio, setPrecio] = useState([0, 5000]);
    const handleOnChange = (e) => {
        setValue(e.target.value);
        setFiltro(`Precio: ${e.target.value}`);
    };

    return (
        <div className="w-[300px] border-[#dadada] border-solid border-[1px] rounded-[15px] shadow-lg">
            <h2 className='text-black text-[20px] font-extrabold pb-3 px-5 pt-5'>Filtrar por Subcategorías</h2>
            <h3 className='text-black font-bold text-[18px] px-5'>Hardware</h3>
            <div className='flex flex-col p-4 px-5'>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Procesadores' : '')} />
                    <span className='text-black pl-2'>Procesadores</span>
                </label>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Mainboards' : '')} />
                    <span className='text-black pl-2'>Mainboards</span>
                </label>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Memorias RAM' : '')} />
                    <span className='text-black pl-2'>Memorias RAM</span>
                </label>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Almacenamiento' : '')} />
                    <span className='text-black pl-2'>Almacenamiento</span>
                </label>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Tarjetas de Video' : '')} />
                    <span className='text-black pl-2'>Tarjetas de Video</span>
                </label>
                <label className='pb-1'>
                    <input type='checkbox' onChange={(e) => setFiltro(e.target.checked ? 'Fuentes de Poder' : '')} />
                    <span className='text-black pl-2'>Fuentes de Poder</span>
                </label>
            </div>
            <hr className='border-[#dadada] w-full'></hr>
            <h2 className='text-black text-[20px] font-extrabold py-3 px-5'>Filtrar Por Precio</h2>
            <div className='flex flex-col px-5 pb-5'>
                <input className='py-3' type="range" min="0" max="5000" step="100" value={value} onChange={handleOnChange} />
                <div className='flex items-center justify-between'>
                    <label className='text-black text-[18px] my-3'>Precio: $0 - ${value}</label>
                    <button className='bg-gris-oscuro text-[18px] rounded-[10px] w-20'>Filtrar</button>
                </div>
            </div>
        </div>
    );
}