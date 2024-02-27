export default function DescripcionProducto(props) {
    return (
        <section className="flex justify-center py-10">
            <div className="w-96 border-black border-2 border-solid mx-10 shadow-lg p-10"> 
                <img src="/assets/images/products/product1.png" alt="Producto 1" />
            </div>
            <div className="w-96 border-2 border-solid border-black mx-10 shadow-lg flex flex-col p-10">
                <h3 className="text-black">{props.nombre}</h3>
                <p className="text-black">Precio: {props.precio}</p>
                <p className="text-black">{props.descripcion}</p>
                <input className="text-black" type="number" id="cantidad"/>
                <button className="bg-black">Agregar al carrito</button>
                <p><strong className="text-black">SKU: </strong><span className="text-gris-oscuro">{props.ids}</span></p>
                <p><strong className="text-black">Categoría: </strong><span className="text-gris-oscuro">{props.categoria}</span></p>
            </div>
        </section>
    );
}
