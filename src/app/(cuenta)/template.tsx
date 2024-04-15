"use client"
import { useState } from 'react';

export default function ProfileLayout({
  children,
}: {
        children: React.ReactNode;
    }) {
    
    const [input, setinput] = useState("")
    return (
        <>
            <h2>Rutas relativas a ala Cuenta de Usuario</h2>
            {children}
            <input type="text"
                value={input}
            onChange={(e) => setinput(e.target.value)}/>
        </>
    );
}