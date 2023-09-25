import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link href={'/'}>Ir al inicio</Link>
        </section>
    )
}

export default NotFoundPage;
