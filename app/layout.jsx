import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: 'App tienda - Inicio',
  description: 'Página principal de una tienda online',
  keywords: 'tienda, online, comercio'
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
