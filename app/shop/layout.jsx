import React from 'react';
import Link from 'next/link';

const ShopLayout = ({ children }) => {
    return (
        <>
            <nav>
                <h3>Sección tienda</h3>
                <ul>
                    <li>
                        <Link href={'/shop/categories'} >Categorías</Link>
                    </li>
                    <li>
                        <Link href={'/shop/categories/computers'} >Productos</Link>
                    </li>
                </ul>
            </nav>

            {children}
        </>
    )
}

export default ShopLayout;
