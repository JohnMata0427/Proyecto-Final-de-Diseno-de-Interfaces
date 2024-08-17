import { useState } from "react";

export default function PasswordInput() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div className="flex items-center">
			<input
				className="rounded-lg h-10 w-[280px] border-2 border-[#dadada] text-lg"
				type={isVisible ? "text" : "password"}
				id="password"
				placeholder="Contraseña"
			></input>
			<button
				className="bg-gris-oscuro text-center w-36 h-10 text-white ml-4 rounded-lg"
				onClick={(event) => {
                    event.preventDefault();
					setIsVisible(!isVisible);
				}}
			>
				{isVisible ? "Ocultar" : "Mostrar"}
			</button>
		</div>
	);
}
