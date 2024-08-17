export default function TrabajamosCon() {
	const marcas = ["samsung", "lg", "sony", "apple"];

	return (
		<div className="box-border overflow-hidden">
			<ul className="flex justify-center items-center animate-scroll space-x-4 whitespace-nowrap relative">
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
