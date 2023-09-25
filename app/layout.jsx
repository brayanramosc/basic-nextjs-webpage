import Navbar from "../components/Navbar";

export const metadata = {
  title: 'App tienda - Inicio',
  description: 'Página principal de una tienda online',
  keywords: 'tienda, online, comercio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
