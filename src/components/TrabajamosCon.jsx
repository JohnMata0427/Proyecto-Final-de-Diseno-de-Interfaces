export default function TrabajamosCon() {
    const marcas = ['samsung', 'lg', 'sony', 'apple'];

    return (
        <div className="box-border overflow-hidden bg-morado-primario">
            <ul className="relative flex animate-scroll items-center justify-center space-x-4 whitespace-nowrap">
                {marcas.map((marca) => (
                    <li key={marca}>
                        <img
                            src={`/assets/images/icons/${marca}.png`}
                            alt={marca}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
