import { useState } from 'react';

export default function PasswordInput() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex items-center">
            <input
                className="h-10 w-72 rounded-lg border-2 border-[#dadada] text-lg"
                type={isVisible ? 'text' : 'password'}
                id="password"
                placeholder="Contraseña"
            ></input>
            <button
                className="ml-4 h-10 w-36 rounded-lg bg-gris-oscuro text-center text-white"
                onClick={(event) => {
                    event.preventDefault();
                    setIsVisible(!isVisible);
                }}
            >
                {isVisible ? 'Ocultar' : 'Mostrar'}
            </button>
        </div>
    );
}
