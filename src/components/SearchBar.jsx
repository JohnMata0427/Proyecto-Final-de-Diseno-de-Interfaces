import { useRef, useState, useEffect } from 'react';

export function SearchBar({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBarRef = useRef(null);

  const handleSearch = ({ target }) => {
    const search = target.value.toLowerCase();
    setFilteredProducts(
      products.filter((product) => {
        const { nombre, id } = product;
        if (
          nombre.toLowerCase().includes(search) ||
          id.toLowerCase().includes(search)
        )
          return product;
      }),
    );

    if (!search) setFilteredProducts([]);
  };

  const handleClickOutside = ({ target }) => {
    const { current } = searchBarRef;
    setShowResults(current.contains(target));
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative flex w-full justify-end">
      <input
        className="h-10 w-full rounded-2xl pl-4 text-gris-oscuro"
        placeholder="Buscar Productos..."
        type="search"
        onChange={handleSearch}
      />
      <button className="absolute right-2 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="size-5"
        >
          <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0M21 21l-6-6"></path>
        </svg>
      </button>
      {showResults && filteredProducts.length > 0 && (
        <div className="absolute top-12 flex max-h-80 w-full flex-col overflow-auto rounded-xl border border-gray-300 bg-white z-10">
          {filteredProducts.map(({ id, nombre }) => (
            <a
              href={`/productos/${id}`}
              className="border-b border-gray-300 p-2 text-black hover:bg-gray-300"
            >
              <span>{nombre}</span>
              <br />
              <small className="text-gray-500">{id}</small>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
