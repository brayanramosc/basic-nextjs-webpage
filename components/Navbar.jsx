import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <h1>Navegación</h1>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/about">Acerca de nosotros</Link>
                </li>
                <li>
                    <Link href="/shop">Tienda</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
