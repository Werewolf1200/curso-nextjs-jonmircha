// Redireccionar con useRouter
/* 1. Importar useRouter
  2. Invocar Router
  3. Crear función para redireccionar
*/
"use client";

import { useRouter } from "next/navigation"; // Comopente del cliente

export default function Contacto() {
  const router = useRouter(); // *2

  const handleClick = () => { //*3
    router.push("/");
  }

  return (
    <>
    <h1>Contacto</h1>
      <button onClick={handleClick}>Regresar al Home</button>
    </>)
}