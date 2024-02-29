import { useState } from 'react';

export default function PasswordInput() {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <input type={isVisible ? "text" : "password"} id="password" placeholder="Contraseña"></input>
            <button onClick={handleClick}>Mostrar/Ocultar</button>
        </div>
    );
}