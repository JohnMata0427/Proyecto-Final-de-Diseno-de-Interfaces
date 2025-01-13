import { useEffect, useState } from 'react';

export default function Filtrar({ categoria }) {
  const [subcategorias, setSubcategorias] = useState([]);
  const [form, setForm] = useState({
    subcategorias: [],
    price: 0,
  });

  const handleChangePrice = ({ target }) => {
    setForm({ ...form, price: target.value });
  };

  const handleChangeSubcategorias = ({ target }) => {
    if (target.checked) {
      setForm({ ...form, subcategorias: [...form.subcategorias, target.id] });
    } else {
      setForm({
        ...form,
        subcategorias: form.subcategorias.filter(
          (subcategoria) => subcategoria !== target.id,
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  useEffect(() => {
    setSubcategorias(
      Array.from(
        new Set(
          categoria.map(({ subcategoria }) => {
            if (subcategoria.includes('_')) return subcategoria.split('_')[0];

            return subcategoria;
          }),
        ),
      ),
    );
  }, []);

  return (
    <div className="w-full rounded-2xl border border-solid border-[#dadada] shadow-lg md:w-80">
      <h2 className="px-5 pb-3 pt-5 text-xl font-extrabold text-black">
        Filtrar por Subcategorías
      </h2>
      <h3 className="px-5 text-lg font-bold text-black">Hardware</h3>
      <div className="flex flex-col p-4 px-5">
        {subcategorias.map((subcategoria) => (
          <div>
            <input
              id={subcategoria}
              type="checkbox"
              onChange={handleChangeSubcategorias}
            />
            <label htmlFor={subcategoria} className="pl-2 text-black">
              {subcategoria.charAt(0).toUpperCase() + subcategoria.slice(1)}
            </label>
          </div>
        ))}
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
          value={form.price}
          onChange={handleChangePrice}
        />
        <div className="mt-2 flex items-center justify-between">
          <label className="text-lg text-black">
            Precio: $0 - ${form.price}
          </label>
          <button
            className="w-20 rounded-lg bg-gris-oscuro text-lg"
            onClick={handleSubmit}
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
}
