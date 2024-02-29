import { useState } from 'react';

export default function PasswordInput() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);

    };

    return (
        <div className="flex items-center">
            <input className="rounded-[8px] h-10 w-[280px] boder-solid border-[2px] border-[#dadada] text-[19px] pl-2" type={isVisible ? "text" : "password"} id="password" placeholder="Contraseña"></input>
            <button className="bg-gris-oscuro text-center w-36 h-10 text-white ml-4 rounded-[8px]" onClick={handleClick}>Mostrar/Ocultar</button>
        </div>
    );
}